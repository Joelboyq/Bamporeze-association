import {
  Injectable,
  ConflictException,
  UnauthorizedException,
  InternalServerErrorException,
  BadRequestException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Admin, Prisma } from '@prisma/client';
import * as bcrypt from 'bcrypt';
import { ApiResponse } from 'src/@types';
import { GeneratorsService } from 'src/generators/generators.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateAdminDto, LoginDto } from './dtos';

type AdminWithoutSensitiveData = Omit<Admin, 'password' | 'verification_code' | 'refresh_token'>;

@Injectable()
export class AuthService {
  private readonly SALT_ROUNDS = 10;

  constructor(
    private readonly prisma: PrismaService,
    private readonly generator: GeneratorsService,
    private readonly jwtService: JwtService,
  ) {}

  async createAdmin(createAdminDto: CreateAdminDto): Promise<ApiResponse<AdminWithoutSensitiveData>> {
    try {
      // Check if admin with email already exists
      const existingAdmin = await this.prisma.admin.findUnique({
        where: { email: createAdminDto.email },
      });

      if (existingAdmin) {
        throw new ConflictException('An admin with this email already exists');
      }

      // Hash password
      const hashedPassword = await bcrypt.hash(createAdminDto.password, this.SALT_ROUNDS);
      const verification_code = await this.generator._generateCode();
      
      // Create new admin
      const admin = await this.prisma.admin.create({
        data: {
          profile_picture: createAdminDto.profile_picture || null,
          name: createAdminDto.name,
          verification_code,
          email: createAdminDto.email.toLowerCase().trim(),
          password: hashedPassword,
        },
      });

      // Remove sensitive data before returning
      const { password, verification_code: _, refresh_token, ...result } = admin;
      
      return new ApiResponse(
        201,
        'Admin created successfully',
        result
      );
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new ConflictException('An admin with this email already exists');
        }
      }
      throw new InternalServerErrorException('Failed to create admin account');
    }
  }

  async login(loginDto: LoginDto): Promise<ApiResponse<{ token: string; admin: AdminWithoutSensitiveData }>> {
    try {
      // Input validation
      if (!loginDto.email || !loginDto.password) {
        throw new BadRequestException('Email and password are required');
      }

      // Find admin by email (case-insensitive)
      const admin = await this.prisma.admin.findUnique({
        where: { email: loginDto.email.toLowerCase().trim() },
      });

      // Check if admin exists and has a password set
      if (!admin || !admin.password) {
        // Use the same error message for security (don't reveal if email exists)
        throw new UnauthorizedException('Invalid credentials');
      }

      // Verify password
      const isPasswordValid = await bcrypt.compare(loginDto.password, admin.password);
      if (!isPasswordValid) {
        throw new UnauthorizedException('Invalid credentials');
      }

      // Generate JWT token
      const token = this.jwtService.sign(
        { id: admin.id, email: admin.email },
        { expiresIn: '1d' }
      );

      // Remove sensitive data
      const { password, verification_code, refresh_token, ...adminData } = admin;

      return new ApiResponse(
        200,
        'Login successful',
        { token, admin: adminData }
      );
    } catch (error) {
      if (error instanceof UnauthorizedException || 
          error instanceof BadRequestException) {
        throw error;
      }
      throw new InternalServerErrorException('An error occurred during login');
    }
  }

  async updateRtHash(adminId: string, hashedRefreshToken: string): Promise<void> {
    try {
      await this.prisma.admin.update({
        where: { id: adminId },
        data: { refresh_token: hashedRefreshToken },
      });
    } catch (error) {
      throw new InternalServerErrorException('Failed to update refresh token');
    }
  }

  async validateUser(userId: string): Promise<AdminWithoutSensitiveData | null> {
    try {
      const user = await this.prisma.admin.findUnique({
        where: { id: userId },
      });

      if (!user) {
        return null;
      }

      const { password, verification_code, refresh_token, ...result } = user;
      return result;
    } catch (error) {
      throw new InternalServerErrorException('Failed to validate user');
    }
  }
}

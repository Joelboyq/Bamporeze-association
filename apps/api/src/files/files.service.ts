import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { ApiResponse } from 'src/@types';
import cloudinary from 'src/utils/cloudinary';

@Injectable()
export class FilesService {
  async uploadFile(file: Express.Multer.File): Promise<ApiResponse<string>> {
    try {
      // Convert file buffer to base64 in chunks to handle large files
      const chunkSize = 1024 * 1024; // 1MB chunks
      let base64String = '';
      for (let i = 0; i < file.buffer.length; i += chunkSize) {
        const chunk = file.buffer.slice(i, i + chunkSize);
        base64String += chunk.toString('base64');
      }

      const stringified_file = `data:${file.mimetype};base64,${base64String}`;
      
      // Configure Cloudinary upload with optimization settings
      const res = await cloudinary.uploader.upload(stringified_file, {
        access_mode: 'public',
        public_id: file.originalname
          .replaceAll(/[. ]/g, '-')
          .toLowerCase(),
        allowed_formats: ['jpg', 'png', 'jpeg', 'webp', 'gif'],
        transformation: [
          { quality: 'auto:good' },
          { fetch_format: 'auto' },
          { flags: 'progressive' }
        ],
        resource_type: 'auto',
        chunk_size: 6000000, // 6MB chunks for upload
      });

      return new ApiResponse<string>(
        200,
        'File uploaded successfully',
        res.secure_url,
      );
    } catch (err) {
      console.error('File upload error:', err);
      throw new InternalServerErrorException({
        message: 'Error uploading file',
        details: err.message
      });
    }
  }

  async deleteFile(url: string): Promise<ApiResponse<string>> {
    try {
      const publicId = url.split('/').pop()?.split('.')[0];
      if (!publicId) {
        throw new Error('Invalid URL format');
      }

      const res = await cloudinary.uploader.destroy(publicId);
      return new ApiResponse<string>(
        200,
        'File deleted successfully',
        res.result,
      );
    } catch (err) {
      console.error('File deletion error:', err);
      throw new InternalServerErrorException({
        message: 'Error deleting file',
        details: err.message
      });
    }
  }
}

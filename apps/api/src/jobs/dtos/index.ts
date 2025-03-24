import { IsBoolean, IsIn, IsString } from 'class-validator';

export class JobDto {
  @IsString()
  title: string;

  @IsIn(['FULL_TIME', 'PART_TIME', 'CONTRACT', 'INTERNSHIP', 'TEMPORARY'])
  type: 'FULL_TIME' | 'PART_TIME' | 'CONTRACT' | 'INTERNSHIP' | 'TEMPORARY';

  @IsString()
  location: string;

  @IsBoolean()
  isOpen: boolean;

  @IsString()
  description: string;
}

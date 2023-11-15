import {
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
  Validate,
} from 'class-validator';
import { IsUniquePipe } from '@/modules/admin/user/pipes/is-unique.pipe';
import { Gender, ValidateType } from '@/constants';

export class UpdateDto {
  @IsNotEmpty()
  @IsNumber()
  id: number;

  @IsNotEmpty()
  @IsString()
  @IsEmail()
  @MaxLength(255)
  @Validate(IsUniquePipe, [ValidateType.update])
  email: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(6)
  password: string;

  @IsOptional()
  @IsEnum(Gender)
  gender: Gender;

  @IsOptional()
  @IsString()
  @MaxLength(255)
  @Validate(IsUniquePipe, [ValidateType.update])
  username: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(255)
  full_name: string;

  @IsOptional()
  @MaxLength(30)
  @Validate(IsUniquePipe, [ValidateType.update])
  phone: string;
}

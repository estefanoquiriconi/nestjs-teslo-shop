import {
  IsEmail,
  IsLowercase,
  IsString,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ description: 'User email address' })
  @IsString()
  @IsEmail()
  @IsLowercase()
  email: string;

  @ApiProperty({
    description:
      'User password, must contain uppercase, lowercase letters, and a number',
    minLength: 6,
    maxLength: 50,
  })
  @IsString()
  @MinLength(6)
  @MaxLength(50)
  @Matches(/(?:(?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message:
      'The password must have a uppercase, lowercase letter and a number',
  })
  password: string;

  @ApiProperty({ description: 'User full name', minLength: 1 })
  @IsString()
  @MinLength(1)
  fullName: string;
}

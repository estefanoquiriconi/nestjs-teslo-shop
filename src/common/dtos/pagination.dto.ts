import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsOptional, IsPositive, Min } from 'class-validator';

export class PaginationDto {
  @ApiProperty({
    default: 10,
    description: 'The maximum number of rows to return',
  })
  @IsOptional()
  @IsPositive()
  @Type(() => Number)
  limit?: number;

  @ApiProperty({
    default: 0,
    description:
      'The number of rows to skip before starting to collect the result set',
  })
  @Type(() => Number)
  @IsOptional()
  @Min(0)
  offset?: number;
}

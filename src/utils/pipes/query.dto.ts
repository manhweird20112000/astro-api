import { IsOptional, IsString } from 'class-validator';

export class QueryDto {
  @IsOptional()
  per_page = 10;

  @IsOptional()
  page = 1;

  @IsOptional()
  @IsString()
  search: string;
}

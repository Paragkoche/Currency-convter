import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber, Min, IsCurrency } from 'class-validator';

export class ConvertDto {
  @IsCurrency()
  @ApiProperty({ example: 'USD', description: 'Source currency code' })
  from: string;

  @IsCurrency()
  @ApiProperty({ example: 'EUR', description: 'Target currency code' })
  to: string;

  @IsNumber()
  @ApiProperty({ example: 100, description: 'Amount to convert', minimum: 1 })
  @Min(1) // Ensures amount is at least 1
  amount: number;
}

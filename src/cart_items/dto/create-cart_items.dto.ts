import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsPositive, IsString } from 'class-validator';

export class CreateCart_itemsDto {
  @IsInt()
  @IsPositive()
  @ApiProperty({ description: 'ID of the user', example: 1, required: true })
  user_id: string;

  @IsInt()
  @IsPositive()
  @ApiProperty({ description: 'ID of the product', example: 1, required: true })
  product_id: number;

  @IsInt()
  @ApiProperty({ description: 'quantity of the product', example: '2' })
  quantity: number;

  @IsInt()
  @ApiProperty({ description: 'total quantity of the products', example: '2' })
  subtotal: number;
}

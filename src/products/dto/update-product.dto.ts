import { IsOptional, IsNumber, IsString, Min } from 'class-validator';

export class UpdateProductDto {
  @IsOptional()
  @IsString()
  nombre?: string;

  @IsOptional()
  @IsString()
  descripcion?: string;

  @IsOptional()
  @IsNumber()
  @Min(0.01, { message: 'El precio debe ser mayor a cero' })
  precio?: number;

  @IsOptional()
  @IsNumber()
  @Min(1, { message: 'El stock debe ser mayor a cero' })
  stock?: number;
}

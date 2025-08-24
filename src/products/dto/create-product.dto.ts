import { IsNotEmpty, IsNumber, IsString, Min } from 'class-validator';

export class CreateProductDto {
  @IsNotEmpty()
  @IsString()
  nombre: string;

  @IsNotEmpty()
  @IsString()
  descripcion: string;

  @IsNumber()
  @Min(0.01, { message: 'El precio debe ser mayor a cero' })
  precio: number;

  @IsNumber()
  @Min(1, { message: 'El stock debe ser mayor a cero' })
  stock: number;
}

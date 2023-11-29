import { IsString, IsNotEmpty, MaxLength, isNumber, IsNumber, IsInt, IsPositive, Validate, IsNumberString } from 'class-validator';

export class CreatePersonajeDto {
  @IsInt({ message: 'el campo obtiene olo numeros'})
  @IsPositive({ message: 'El campo debe ser un número positivo' })
  id:number;

  @IsNotEmpty({ message: 'El nombre no puede estar vacío' })
  @IsString({ message: 'El nombre debe ser una cadena de texto' })
  @MaxLength(50, { message: 'El nombre no puede tener más de 50 caracteres' })
  nombre: string;

  @IsNotEmpty({ message: 'La descripción no puede estar vacía' })
  @IsString({ message: 'La descripción debe ser una cadena de texto' })
  @MaxLength(200, { message: 'La descripción no puede tener más de 200 caracteres' })
  descripcion: string;

  @IsNotEmpty({ message: 'La descripción no puede estar vacía' })
  @IsString({ message: 'La descripción debe ser una cadena de texto' })
  imagen: string;
 
}

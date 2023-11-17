import { PartialType } from '@nestjs/mapped-types';
import { CreatePersonajeDto } from './create-personaje.dto';
import { IsNotEmpty, IsString, MaxLength, IsArray } from 'class-validator';


export class UpdatePersonajeDto extends PartialType(CreatePersonajeDto) {
  @IsNotEmpty({ message: 'El nombre no puede estar vacío' })
  @IsArray({ message: 'no es un array' })
  nombre: string;

  @IsString({ message: 'no se actualizó el personaje' })
  @MaxLength(200, { message: 'La descripcion esta vacia' })
  descripcion: string;
}

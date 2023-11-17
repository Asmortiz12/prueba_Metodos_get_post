import { PartialType } from '@nestjs/mapped-types';
import { CreatePersonajeDto } from './create-personaje.dto';

export class UpdatePersonajeDto extends PartialType(CreatePersonajeDto) {
    nombre?: string;
    descripcion?: string;
  static nombre: string;
  static descripcion: string;
}

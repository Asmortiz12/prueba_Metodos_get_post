import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePersonajeDto } from './dto/create-personaje.dto';
import { UpdatePersonajeDto } from './dto/update-personaje.dto';
import { Personaje } from './entities/personaje.entity';


@Injectable()
export class PersonajesService {
  private personaje:Personaje[]=[
    { id: 1, nombre: 'Scorpion', descripcion: 'Un ninja espectro que busca venganza.' },
    { id: 2, nombre: 'Sub-Zero', descripcion: 'Maestro de la criomancia y rival de Scorpion.' },
    { id: 3, nombre: 'Liu Kang', descripcion: 'Luchador de Kung Fu y campeón del Earthrealm.' },
    { id: 4, nombre: 'Sonya Blade', descripcion: 'Agente de las fuerzas especiales y amiga de Jax.' },
  ]
  
  create(createPersonajeDto: CreatePersonajeDto) {
    const nuevoPersonaje: Personaje = {
      id: createPersonajeDto.id, 
      nombre: createPersonajeDto.nombre,
      descripcion: createPersonajeDto.descripcion,
    };

    this.personaje.push(nuevoPersonaje);

    return nuevoPersonaje;
  }
  findAll() {
    return this.personaje;
  }

  findOne(id: number) {
    const personaje = this.personaje.find(data => data.id == id);
  
  
    if (!personaje) {
      throw new NotFoundException('No existe el personaje');
    }
  
    return personaje;
  }
  

  update(id: number, _updatePersonajeDto: UpdatePersonajeDto) {
    const personajeIndex = this.personaje.findIndex(data => data.id === id);

    if (personajeIndex === -1) {
      throw new NotFoundException('No existe el personaje con el ID proporcionado');
    }
  
    this.personaje[personajeIndex].nombre = _updatePersonajeDto.nombre;
    this.personaje[personajeIndex].descripcion = _updatePersonajeDto.descripcion;
  
    return this.personaje[personajeIndex];
    }
}

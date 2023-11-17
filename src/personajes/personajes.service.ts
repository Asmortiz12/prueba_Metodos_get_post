import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePersonajeDto } from './dto/create-personaje.dto';
import { UpdatePersonajeDto } from './dto/UpdatePersonajeDto';
import { Personaje } from './entities/personaje.entity';
import { PersonajesModule } from './personajes.module';

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
      id :CreatePersonajeDto.length+1,
      nombre: createPersonajeDto.nombre,
      descripcion: createPersonajeDto.descripcion,
    };

    this.personaje.push(nuevoPersonaje);

    return nuevoPersonaje;
  }
  findAll() {
    return this.personaje;
  }

  findByName(nombre: string): Personaje[] {
    const personajePorNombre= this.personaje.filter(filtar => filtar.nombre.includes(nombre));
    if (!personajePorNombre.length) {
      throw new Error(`No se encontraron muebles con el nombre "${nombre}"`);
    }
    return personajePorNombre;
 }

 findByLetter(letra: string): Personaje[] {
  const personajePorLetra = this.personaje.filter(filtra => filtra.nombre.includes(letra));
  if (!personajePorLetra.length) {
    throw new Error(`no e encontro al presonaje"${letra}"`);
  }
  return personajePorLetra
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

  remove(id: number) {
    const personajeIndex = this.personaje.findIndex(data => data.id === id);

    if (personajeIndex === -1) {
      throw new NotFoundException('No existe el personaje con el ID proporcionado');
    }
  
    const removedPersonaje = this.personaje.splice(personajeIndex, 1);
  
    return removedPersonaje[0];
  }
}

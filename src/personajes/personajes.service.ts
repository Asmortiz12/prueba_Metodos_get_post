import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { CreatePersonajeDto } from './dto/create-personaje.dto';
import { UpdatePersonajeDto } from './dto/UpdatePersonajeDto';
import { Personaje } from './entities/personaje.entity';
import { PersonajesModule } from './personajes.module';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { error } from 'console';

@Injectable()
export class PersonajesService {
   private personaje:Personaje[]=[]
constructor(
@InjectRepository(Personaje)
private readonly personajeRepository:Repository<Personaje>){}
  
  async create(createPersonajeDto: CreatePersonajeDto) {

  try{

    const nuevoPersonaje = this.personajeRepository.create(createPersonajeDto);
    await this.personajeRepository.save(nuevoPersonaje);
    return nuevoPersonaje;
  } catch{
    console.log(error)
    throw new Error('no se puede pa');
  }
    
  }
  findAll() {
    return this.personajeRepository.find();
  }

  findByName(nombre: string): Personaje[] {
    const personajePorNombre= this.personaje.filter(filtar => filtar.nombre.includes(nombre));
    if (!personajePorNombre.length) {
      throw new Error(`No se encontro el personje con el nombre "${nombre}"`);
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

  async findOne(id: number) {
    const personaje = await this.personajeRepository.findOneBy( {id});
  
  
    if (!personaje) {
      throw new NotFoundException('No existe el personaje ')
    }
    return personaje;
  }
  

  update(id: number, _updatePersonajeDto: UpdatePersonajeDto) {
    const personaje = this.personajeRepository.update({id}, _updatePersonajeDto)

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

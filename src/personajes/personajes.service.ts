import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { CreatePersonajeDto } from './dto/create-personaje.dto';
import { UpdatePersonajeDto } from './dto/UpdatePersonajeDto';
import { Personaje } from './entities/personaje.entity';
import { PersonajesModule } from './personajes.module';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { error } from 'console';
import { PaginacionDto } from 'src/common/dto/paginacion.dto';

@Injectable()
export class PersonajesService {
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
  findAll(paginacionDto:PaginacionDto) {
    const {limit=10, offset=1}=paginacionDto
    return this.personajeRepository.find({
      take:limit,
      skip:offset
    })



    return this.personajeRepository.find();
  }


  async findOne(id: number) {
    const personaje = await this.personajeRepository.findOneBy( {id});
  
  
    if (!personaje) {
      throw new NotFoundException('No existe el personaje ')
    }
    return personaje;
  }
  

  async update(id: number, updatePersonajeDto: UpdatePersonajeDto) {
    const personaje = await this.personajeRepository.preload({
      id:id,
  ...updatePersonajeDto
    })  
    if(!personaje){
      throw new NotFoundException('No de puede eliminar ')
    }
    await this.personajeRepository.save(personaje);
    return personaje
     }

  async remove(id: number) {
    const personaje = await this.findOne(id);
return this.personajeRepository.delete(personaje)
}
}

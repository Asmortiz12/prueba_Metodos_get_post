import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe, UsePipes, ValidationPipe} from '@nestjs/common';
import { PersonajesService } from './personajes.service';
import { CreatePersonajeDto } from './dto/create-personaje.dto';
import { UpdatePersonajeDto } from './dto/UpdatePersonajeDto';
import { Personaje } from '/home/asom/Proyectos/Nest/clase003/src/personajes/entities/personaje.entity';

@Controller('personajes')
export class PersonajesController {
  constructor(private readonly personajesService: PersonajesService) {}

  @UsePipes(ValidationPipe)
  @Post()
  create(@Body() createPersonajeDto: CreatePersonajeDto, ) {
    return this.personajesService.create(createPersonajeDto);
  }

  @Get()
  findAll():Personaje[] {
    return this.personajesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id',ParseIntPipe) id: number) {
    return this.personajesService.findOne(+id);
  }
  @Get('nombre/:nombre')
  findByName(@Param('nombre') nombre: string): Personaje[] {
  return this.personajesService.findByName(nombre);
    }

  @Get('letra/:letra')
 findByLetter(@Param('letra') nombre: string): Personaje[] {
  return this.personajesService.findByLetter(nombre);
}

  
  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePersonajeDto: UpdatePersonajeDto): import("/home/asom/Proyectos/Nest/clase003/src/personajes/entities/personaje.entity").Personaje {
    return this.personajesService.update(+id, updatePersonajeDto);
  }

}

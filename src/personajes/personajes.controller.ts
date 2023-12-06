import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe, UsePipes, ValidationPipe, Query} from '@nestjs/common';
import { PersonajesService } from './personajes.service';
import { CreatePersonajeDto } from './dto/create-personaje.dto';
import { UpdatePersonajeDto } from './dto/UpdatePersonajeDto';
import { Personaje } from '/home/asom/Proyectos/Nest/clase003/src/personajes/entities/personaje.entity';
import { PaginacionDto } from 'src/common/dto/paginacion.dto';

@Controller('personajes')
export class PersonajesController {
  constructor(private readonly personajesService: PersonajesService) {}

  @UsePipes(ValidationPipe)
  @Post()
  create(@Body() createPersonajeDto: CreatePersonajeDto, ) {
    return this.personajesService.create(createPersonajeDto);
  }

  @Get()
  findAll(@Query() paginacionDto:PaginacionDto) {
    return this.personajesService.findAll(paginacionDto);
  }

  @Get(':id')
  findOne(@Param('id',ParseIntPipe) id: number) {
    return this.personajesService.findOne(id);
  }

  
  @Patch(':id')
  update(@Param('id') id: number, @Body() updatePersonajeDto: UpdatePersonajeDto) {
    return this.personajesService.update(+id, updatePersonajeDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.personajesService.remove(id);
}

}

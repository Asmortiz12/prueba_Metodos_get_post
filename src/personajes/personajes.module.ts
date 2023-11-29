import { Module } from '@nestjs/common';
import { PersonajesService } from './personajes.service';
import { PersonajesController } from './personajes.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Personaje } from './entities/personaje.entity';

@Module({
  controllers: [PersonajesController],
  providers: [PersonajesService],
  imports: [
    TypeOrmModule.forFeature([Personaje])
  ]

})
export class PersonajesModule {}

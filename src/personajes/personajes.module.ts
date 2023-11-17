import { Module } from '@nestjs/common';
import { PersonajesService } from './personajes.service';
import { PersonajesController } from './personajes.controller';

@Module({
  controllers: [PersonajesController],
  providers: [PersonajesService],
})
export class PersonajesModule {}

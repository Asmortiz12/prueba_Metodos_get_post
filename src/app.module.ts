import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PersonajesModule } from './personajes/personajes.module';

@Module({
  imports: [PersonajesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

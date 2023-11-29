import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PersonajesModule } from './personajes/personajes.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommonModule } from './common/common.module';

@Module({
  imports: [
    PersonajesModule,
    //Traer el ConfigModule 
    ConfigModule.forRoot(),
    //Traer la configuracion del typeOrm
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      database: process.env.DB_NAME,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      autoLoadEntities:true, //carge automaticamente las entidades
      synchronize:true //en produccion se debe poner falso
    }),
    CommonModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

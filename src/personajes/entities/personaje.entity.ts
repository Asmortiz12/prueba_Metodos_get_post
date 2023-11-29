import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Personaje {
  @PrimaryGeneratedColumn('identity')
    id: number;
    @Column('varchar')
    nombre:string;
    @Column('varchar')
    descripcion:string; 
    @Column('varchar')
    imagen:string; 
  
}

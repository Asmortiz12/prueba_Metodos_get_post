import { BeforeInsert, BeforeUpdate, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Personaje {
  @PrimaryGeneratedColumn('identity')
  id: number;

  @Column('varchar')
  nombre: string;

  @Column('varchar')
  descripcion: string;

  @Column('varchar')
  imagen: string;

  @BeforeInsert()
  beforeInsert() {
    console.log('Fecha de Inserción:', new Date());
  }
  
  @BeforeUpdate()
   beforeUpdate() {
    console.log('Fecha de Actualización:', new Date());
  }
}

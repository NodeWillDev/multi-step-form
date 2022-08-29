import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export default class Resume {

  @PrimaryGeneratedColumn('increment')
  id?: number;

  @Column('text')
  contact: string;

  @Column('text')
  name: string;

  @Column('text')
  description: string;
}
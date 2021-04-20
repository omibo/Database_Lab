import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne } from 'typeorm';
import UserEntity from './user.entity';

@Entity()
export default class ProjectEntity extends BaseEntity {

  @PrimaryGeneratedColumn()
  id: Number;

  @Column({ length: 200 })
  title: string;

  @Column()
  budget: number;

  @Column()
  deadline: number;

  @Column({ length: 200 })
  filePath: string;

  @ManyToOne(type => UserEntity, user => user.projects)
  user: UserEntity;  
}
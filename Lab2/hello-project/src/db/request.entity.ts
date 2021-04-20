import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne } from 'typeorm';
import UserEntity from './user.entity';

@Entity()
export default class RequestEntity extends BaseEntity {

  @PrimaryGeneratedColumn()
  id: Number;

  @Column()
  projectId: Number;

  @Column()
  budget: Number;

  @Column()
  deadline: Number;
  
  @ManyToOne(type => UserEntity, user => user.requests)
  user: UserEntity;  
}
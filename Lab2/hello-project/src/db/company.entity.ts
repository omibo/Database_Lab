import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToOne, JoinColumn } from 'typeorm';
import UserEntity from './user.entity';

@Entity()
export default class CompanyEntity extends BaseEntity {

  @PrimaryGeneratedColumn()
  id: Number;

  @Column({ length: 20 })
  name: string;

  @Column({ length: 20 })
  location: string;

  @Column({ length: 20 })
  website: string;

  @OneToOne(() => UserEntity)
  @JoinColumn()
  userEntity: UserEntity;
}
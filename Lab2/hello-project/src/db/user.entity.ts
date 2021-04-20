import { Entity, PrimaryColumn, Column, BaseEntity, OneToOne, OneToMany, ManyToMany, JoinTable } from 'typeorm';
import CompanyEntity from './company.entity';
import ProjectEntity from './project.entity';
import RequestEntity from './request.entity';
import SkillEntity from './request.entity';

@Entity()
export default class UserEntity extends BaseEntity {

  @PrimaryColumn({ length: 20 })
  username: string;

  @Column({ length: 20 })
  firstname: string;

  @Column({ length: 20 })
  lastname: string;

  @Column({ length: 20 })
  email: string;

  @Column({ length: 20 })
  password: string;

  @OneToOne(() => CompanyEntity, companyEntity => companyEntity.userEntity)
  companyEntity: CompanyEntity;

  @OneToMany(type => ProjectEntity, project => project.user)
  projects: ProjectEntity[];

  @OneToMany(type => RequestEntity, request => request.user)
  requests: ProjectEntity[];
}
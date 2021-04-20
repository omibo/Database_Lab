import { BaseEntity } from 'typeorm';
import CompanyEntity from './company.entity';
import ProjectEntity from './project.entity';
export default class UserEntity extends BaseEntity {
    username: string;
    firstname: string;
    lastname: string;
    email: string;
    password: string;
    companyEntity: CompanyEntity;
    projects: ProjectEntity[];
    requests: ProjectEntity[];
}

import { BaseEntity } from 'typeorm';
import UserEntity from './user.entity';
export default class CompanyEntity extends BaseEntity {
    id: Number;
    name: string;
    location: string;
    website: string;
    userEntity: UserEntity;
}

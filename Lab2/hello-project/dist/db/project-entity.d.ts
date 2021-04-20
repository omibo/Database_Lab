import { BaseEntity } from 'typeorm';
import UserEntity from './user.entity';
export default class ProjectEntity extends BaseEntity {
    id: Number;
    title: string;
    budget: number;
    deadline: number;
    filePath: string;
    user: UserEntity;
}

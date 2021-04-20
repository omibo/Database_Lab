import { BaseEntity } from 'typeorm';
import UserEntity from './user.entity';
export default class RequestEntity extends BaseEntity {
    id: Number;
    projectId: Number;
    budget: Number;
    deadline: Number;
    user: UserEntity;
}

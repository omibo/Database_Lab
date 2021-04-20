import { BaseEntity } from 'typeorm';
import UserEntity from './user.entity';
export default class SkillEntity extends BaseEntity {
    id: Number;
    skillName: string;
    users: UserEntity[];
}

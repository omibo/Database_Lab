import { BaseEntity } from 'typeorm';
import BookEntity from './book.entity';
export default class UserEntity extends BaseEntity {
    id: number;
    username: string;
    password: string;
    name: string;
    books: BookEntity[];
}

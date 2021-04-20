import { BaseEntity } from 'typeorm';
import BookEntity from './book.entity';
export default class UserEntity2 extends BaseEntity {
    id: number;
    username: string;
    password: string;
    name: string;
    books: BookEntity[];
}

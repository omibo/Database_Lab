import UserEntity from '../db/last/user.entity';
import CreateUserDto from './dto/create-user.dto';
import BookEntity from '../db/last/book.entity';
export declare class UserService {
    insert(userDetails: CreateUserDto): Promise<UserEntity>;
    getAllUsers(): Promise<UserEntity[]>;
    getUser(username: string): Promise<UserEntity | undefined>;
    getBooksOfUser(userID: number): Promise<BookEntity[]>;
}

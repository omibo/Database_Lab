import UserEntity from '../db/user.entity';
import CreateUserDto from './dto/create-user.dto';
import BookEntity from '../db/book.entity';
export declare class UserService {
    insert(userDetails: CreateUserDto): Promise<UserEntity>;
    getAllUsers(): Promise<UserEntity[]>;
    getBooksOfUser(userID: number): Promise<BookEntity[]>;
}

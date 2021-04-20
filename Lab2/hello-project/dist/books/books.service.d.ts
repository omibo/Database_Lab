import BookEntity from '../db/last/book.entity';
import CreateBookDto from './dto/create-book.dto';
import UpdateBookDto from './dto/update-book.dto';
export default class BooksService {
    insert(bookDetails: CreateBookDto): Promise<BookEntity>;
    update(bookDetails: UpdateBookDto): Promise<BookEntity>;
    delete(bookId: number): Promise<BookEntity>;
    getAllBooks(): Promise<BookEntity[]>;
}

import BooksService from './books.service';
import CreateBookDto from './dto/create-book.dto';
import UpdateBookDto from './dto/update-book.dto';
export default class BooksController {
    private readonly booksService;
    constructor(booksService: BooksService);
    postBook(book: CreateBookDto): Promise<import("../db/last/book.entity").default>;
    putBook(book: UpdateBookDto): Promise<import("../db/last/book.entity").default>;
    deleteBook(bookId: number): Promise<import("../db/last/book.entity").default>;
    getAll(): Promise<import("../db/last/book.entity").default[]>;
}

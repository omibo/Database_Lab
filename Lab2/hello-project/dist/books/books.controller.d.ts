import BooksService from './books.service';
import CreateBookDto from './dto/create-book.dto';
export default class BooksController {
    private readonly booksService;
    constructor(booksService: BooksService);
    postGenre(book: CreateBookDto): Promise<import("../db/book.entity").default>;
    getAll(): Promise<import("../db/book.entity").default[]>;
}

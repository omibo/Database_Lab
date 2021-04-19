"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const book_entity_1 = require("../db/book.entity");
const user_entity_1 = require("../db/user.entity");
const common_1 = require("@nestjs/common");
const genre_entity_1 = require("../db/genre.entity");
let BooksService = class BooksService {
    async insert(bookDetails) {
        const { name, userID, genreIDs } = bookDetails;
        const book = new book_entity_1.default();
        book.name = name;
        book.user = await user_entity_1.default.findOne(userID);
        book.genres = [];
        for (let i = 0; i < genreIDs.length; i++) {
            const genre = await genre_entity_1.default.findOne(genreIDs[i]);
            book.genres.push(genre);
        }
        await book.save();
        return book;
    }
    async update(bookDetails) {
        const { bookId, name, userID, genreIDs } = bookDetails;
        const book = await book_entity_1.default.findOne(bookId);
        book.name = name;
        book.user = await user_entity_1.default.findOne(userID);
        book.genres = [];
        for (let i = 0; i < genreIDs.length; i++) {
            const genre = await genre_entity_1.default.findOne(genreIDs[i]);
            book.genres.push(genre);
        }
        await book.save();
        return book;
    }
    async delete(bookId) {
        const book = await book_entity_1.default.findOne(bookId);
        await book.remove();
        return book;
    }
    async getAllBooks() {
        return book_entity_1.default.find();
    }
};
BooksService = __decorate([
    common_1.Injectable()
], BooksService);
exports.default = BooksService;
//# sourceMappingURL=books.service.js.map
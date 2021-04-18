import { Body, Controller, Header, Get, Post } from '@nestjs/common';
import BooksService from './books.service';
import CreateBookDto from './dto/create-book.dto';
import {ApiResponse, ApiQuery, ApiBearerAuth} from '@nestjs/swagger'

@Controller('books')
export default class BooksController {
  constructor(private readonly booksService: BooksService) {}
  
  @Header('Content-Type', 'application/json')
  @ApiResponse({status:200, description: 'You add book sucessfully'})
  @ApiResponse({status:400, description: 'Bad request!'})
  @Post('post')
  postGenre( @Body() book: CreateBookDto) {
    return this.booksService.insert(book);
  }

  @Header('Content-Type', 'application/json')
  @ApiResponse({status:200, description: 'You get all genres'})
  @Get()
  getAll() {
    return this.booksService.getAllBooks();
  }
}
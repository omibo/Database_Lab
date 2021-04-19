import { Body, Controller, Header, Get, Post, Put, Delete, Param } from '@nestjs/common';
import BooksService from './books.service';
import CreateBookDto from './dto/create-book.dto';
import UpdateBookDto from './dto/update-book.dto';
import {ApiResponse, ApiQuery, ApiBearerAuth} from '@nestjs/swagger'

@Controller('books')
export default class BooksController {
  constructor(private readonly booksService: BooksService) {}
  
  @Header('Content-Type', 'application/json')
  @ApiResponse({status:201, description: 'You add book sucessfully'})
  @ApiResponse({status:400, description: 'Bad request!'})
  @Post('post')
  postBook( @Body() book: CreateBookDto) {
    return this.booksService.insert(book);
  }

  @Header('Content-Type', 'application/json')
  @ApiResponse({status:200, description: 'You update the book successfullly'})
  @ApiResponse({status:400, description: 'Wanted book does not exists'})
  @Put('put')
  putBook( @Body() book: UpdateBookDto) {
    return this.booksService.update(book);
  }

  @Header('Content-Type', 'application/json')
  @ApiResponse({status:200, description: 'You delete the book successfullly'})
  @ApiResponse({status:400, description: 'Wanted book does not exists'})
  @Delete('delete')
  deleteBook( @Param() bookId: number) {
    return this.booksService.delete(bookId);
  }

  @Header('Content-Type', 'application/json')
  @ApiResponse({status:200, description: 'You get all genres'})
  @Get()
  getAll() {
    return this.booksService.getAllBooks();
  }
}
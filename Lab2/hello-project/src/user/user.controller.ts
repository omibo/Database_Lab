import { Body, Controller, Header, Get, ParseIntPipe, Post, Put } from '@nestjs/common';
import { UserService } from './user.service';
import CreateUserDto from './dto/create-user.dto';
import {ApiResponse, ApiQuery, ApiBearerAuth, ApiBody} from '@nestjs/swagger'

@Controller('users')
export class UserController {
  constructor(private readonly usersService: UserService) {}

  @Header('Content-Type', 'application/json')
  @ApiResponse({status:200, description: 'You add user sucessfully'})
  @ApiResponse({status:400, description: 'Bad request!'})
  @Post('post')
  postUser( @Body() user: CreateUserDto) {
    return this.usersService.insert(user);
  }

  @Header('Content-Type', 'application/json')
  @ApiResponse({status:200, description: 'You get all users'})
  @Get()
  getAll() {
    return this.usersService.getAllUsers();
  }

  @Header('Content-Type', 'application/json')
  @ApiResponse({status:200, description: 'You get user {id} books'})
  @ApiBody({
    description: 'Enter user id'
  })
  @Get('books')
  getBooks( @Body('userID', ParseIntPipe) userID: number ) {
    return this.usersService.getBooksOfUser(userID);
  }
}
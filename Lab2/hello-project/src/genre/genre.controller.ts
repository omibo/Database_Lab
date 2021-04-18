
import { Body, Controller, Header, Get, Post } from '@nestjs/common';
import GenreService from './genre.service';
import CreateGenreDto from './dto/create-genre.dto';
import {ApiResponse, ApiQuery, ApiBearerAuth} from '@nestjs/swagger'

@Controller('genre')
export default class GenreController {
  constructor(private readonly genreService: GenreService) {}
  
  @Header('Content-Type', 'application/json')
  @ApiResponse({status:200, description: 'You add genre sucessfully'})
  @ApiResponse({status:400, description: 'Bad request!'})
  @Post('post')
  postGenre( @Body() genre: CreateGenreDto) {
    return this.genreService.insert(genre);
  }

  @Header('Content-Type', 'application/json')
  @ApiResponse({status:200, description: 'You get all genres'})
  @Get()
  getAll() {
    return this.genreService.getAllGenre();
  }
}
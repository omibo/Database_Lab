import { HelloService } from './hello.service'
import { Controller, Post, Body, Get, Header, Head, Query, RequestTimeoutException } from '@nestjs/common';
import { PersonDto } from './dto/person.dto';
import { ApiResponse, ApiBearerAuth, ApiQuery } from '@nestjs/swagger'

@Controller('hello')
export class HelloController {
    constructor(
        private readonly helloService: HelloService,
    ){}

    @Header('Content-Type', 'application/json')
    @ApiResponse({status: 200, description: 'Say Hello!!!'})
    @Post("welcome")
    @Header('Content-Type', 'application/json')
    async sayWelcome(@Body() PersonDto: PersonDto): Promise<{data: string}>{
        let msg = await this.helloService.welcome(PersonDto);
        return {data:msg};        
    }
    
    
    @ApiResponse({status: 200})
    @ApiQuery({
        name: 'name',
        required: true,
        type: String,
    })
    @ApiResponse({status: 200})
    @ApiQuery({
        name: 'year',
        required: false,
        type: Number,
        description: 'you can ignore this'
    })

    @Get("welcome")
    async sayWelcome2(@Query('name') iName, @Query('year') iYear): Promise<{data: String}>{
        let msg = await this.helloService.welcome({name: iName, year: iYear});
        return {data:msg};
    }
}
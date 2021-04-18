import {ApiProperty, ApiPropertyOptional} from '@nestjs/swagger'

export default class CreateUserDto {
    
    @ApiProperty({
        description: 'Enter your name',
        type: String,
        minLength: 3,
        maxLength: 20
    })    
    readonly name: string;
    
    @ApiPropertyOptional({
        type: [Number],
    })    
    readonly books: number[] ;
}
import {ApiProperty, ApiPropertyOptional} from '@nestjs/swagger'

export default class CreateUserDto {
    
    @ApiProperty({
        description: 'Enter your username',
        type: String,
        minLength: 3,
        maxLength: 20
    })
    readonly username: string;

    @ApiProperty({
        description: 'Enter your password',
        type: String,
        minLength: 6,
        maxLength: 20
    })
    readonly password: string;

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
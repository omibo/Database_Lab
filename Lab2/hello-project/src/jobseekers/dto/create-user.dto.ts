import {ApiProperty} from '@nestjs/swagger'

export default class CreateUserDto {
    
    @ApiProperty({
        description: 'Enter your username',
        type: String,
        minLength: 3,
        maxLength: 20,
        required: true,
    })
    readonly username: string;

    @ApiProperty({
        description: 'Enter your firstname',
        type: String,
        minLength: 3,
        maxLength: 20,
        required: true,
    })
    readonly firstname: string;
    
    @ApiProperty({
        description: 'Enter your lastname',
        type: String,
        minLength: 3,
        maxLength: 20,
        required: true,
    })
    readonly lastname: string;
    
    @ApiProperty({
        description: 'Enter your email',
        type: String,
        minLength: 6,
        maxLength: 20,
        required: true,
    })
    readonly email: string;
    
    @ApiProperty({
        description: 'Enter your password',
        type: String,
        minLength: 6,
        maxLength: 20,
        required: true,
    })
    readonly password: string;
}
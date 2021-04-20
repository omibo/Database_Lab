import {ApiProperty} from '@nestjs/swagger'

export default class EditUserDto {

    @ApiProperty({
        description: 'Enter your firstname',
        type: String,
        minLength: 3,
        maxLength: 20,
        required: false,
    })
    readonly firstname: string;
    
    @ApiProperty({
        description: 'Enter your lastname',
        type: String,
        minLength: 3,
        maxLength: 20,
        required: false,
    })
    readonly lastname: string;
    
    @ApiProperty({
        description: 'Enter your email',
        type: String,
        minLength: 6,
        maxLength: 20,
        required: false,
    })
    readonly email: string;
    
    @ApiProperty({
        description: 'Enter your password',
        type: String,
        minLength: 6,
        maxLength: 20,
        required: false,
    })
    readonly password: string;
}
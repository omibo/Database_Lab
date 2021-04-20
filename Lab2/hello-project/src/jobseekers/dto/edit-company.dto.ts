import {ApiProperty} from '@nestjs/swagger'

export default class EditCompanyDto {
    
    @ApiProperty({
        description: 'Enter your name',
        type: String,
        minLength: 3,
        maxLength: 20,
        required: false,
    })
    readonly name: string;

    @ApiProperty({
        description: 'Enter your location',
        type: String,
        minLength: 3,
        maxLength: 100,
        required: false,
    })
    readonly location: string;
    
    @ApiProperty({
        description: 'Enter your website',
        type: String,
        minLength: 3,
        maxLength: 20,
        required: false,
    })
    readonly website: string;
}
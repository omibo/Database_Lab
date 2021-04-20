import {ApiProperty} from '@nestjs/swagger'

export default class CreateProjectDto {
    
    @ApiProperty({
        description: 'Enter your title',
        type: String,
        minLength: 3,
        maxLength: 200,
        required: true,
    })
    readonly title: string;

    @ApiProperty({
        description: 'Enter your budget',
        type: Number,
        required: false,
    })
    readonly budget: number;

    @ApiProperty({
        description: 'Enter your deadline',
        type: Number,
        required: false,
    })
    readonly deadline: number;
    
    @ApiProperty({
        description: 'Enter your file path',
        type: String,
        minLength: 3,
        maxLength: 200,
        required: false,
    })
    readonly filePath: string;
}
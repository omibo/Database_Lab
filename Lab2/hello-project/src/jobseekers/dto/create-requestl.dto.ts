import {ApiProperty} from '@nestjs/swagger'

export default class CreateRequestDto {
    
    @ApiProperty({
        description: 'Enter your title',
        type: Number,
        required: true,
    })
    readonly pid: number;

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
}
import { ApiProperty, ApiPropertyOptional, ApiPropertyOptions } from '@nestjs/swagger'

export default class CreateBookDto {
    @ApiProperty({
        description: 'Enter book name',
        minLength: 3,
        maxLength: 20,
        type: String
    })
    readonly name: string;
    
    @ApiPropertyOptional({
        description: 'Enter userId',
        type: Number
    })
    readonly userID: number;
    
    @ApiProperty({
        type: [Number]
    })
    readonly genreIDs: number[];
}
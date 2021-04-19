import { ApiProperty, ApiPropertyOptional, ApiPropertyOptions } from '@nestjs/swagger'

export default class UpdateBookDto {
    @ApiPropertyOptional({
        description: 'Enter bookId that you want to edit',
        type: Number
    })
    readonly bookId: number;
    
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
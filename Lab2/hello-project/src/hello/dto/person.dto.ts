import {Length, IsOptional, Min, IsNumber} from 'class-validator'
import { ApiProperty, ApiPropertyOptional} from '@nestjs/swagger'

export class PersonDto {
    @Length(3, 10)
    @ApiProperty({description:'Enter your name > ', minLength: 3, default: 'Ali', maxLength: 10})
    name: String;

    @IsNumber()
    @IsOptional()
    @Min(1960)
    @ApiProperty({description:'Optional', default: 1998, maxLength: 1960})
    year: number;
}
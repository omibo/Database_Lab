import { ApiProperty } from '@nestjs/swagger'

export default class CreateGenreDto {
  
  @ApiProperty({
      description: 'Enter genre',
      type: String,
      default: 'Comic'
  })    
  readonly type: string;
}
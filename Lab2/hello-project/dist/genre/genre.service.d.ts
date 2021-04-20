import CreateGenreDto from './dto/create-genre.dto';
import GenreEntity from '../db/last/genre.entity';
export default class GenreService {
    insert(genreDetails: CreateGenreDto): Promise<GenreEntity>;
    getAllGenre(): Promise<GenreEntity[]>;
}

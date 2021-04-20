import GenreService from './genre.service';
import CreateGenreDto from './dto/create-genre.dto';
export default class GenreController {
    private readonly genreService;
    constructor(genreService: GenreService);
    postGenre(genre: CreateGenreDto): Promise<import("../db/last/genre.entity").default>;
    getAll(): Promise<import("../db/last/genre.entity").default[]>;
}

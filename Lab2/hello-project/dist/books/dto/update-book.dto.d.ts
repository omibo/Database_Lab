export default class UpdateBookDto {
    readonly bookId: number;
    readonly name: string;
    readonly userID: number;
    readonly genreIDs: number[];
}

"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const genre_service_1 = require("./genre.service");
const create_genre_dto_1 = require("./dto/create-genre.dto");
const swagger_1 = require("@nestjs/swagger");
let GenreController = class GenreController {
    constructor(genreService) {
        this.genreService = genreService;
    }
    postGenre(genre) {
        return this.genreService.insert(genre);
    }
    getAll() {
        return this.genreService.getAllGenre();
    }
};
__decorate([
    common_1.Header('Content-Type', 'application/json'),
    swagger_1.ApiResponse({ status: 200, description: 'You add genre sucessfully' }),
    swagger_1.ApiResponse({ status: 400, description: 'Bad request!' }),
    common_1.Post('post'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_genre_dto_1.default]),
    __metadata("design:returntype", void 0)
], GenreController.prototype, "postGenre", null);
__decorate([
    common_1.Header('Content-Type', 'application/json'),
    swagger_1.ApiResponse({ status: 200, description: 'You get all genres' }),
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], GenreController.prototype, "getAll", null);
GenreController = __decorate([
    common_1.Controller('genre'),
    __metadata("design:paramtypes", [genre_service_1.default])
], GenreController);
exports.default = GenreController;
//# sourceMappingURL=genre.controller.js.map
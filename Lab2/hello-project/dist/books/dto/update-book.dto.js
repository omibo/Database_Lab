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
Object.defineProperty(exports, "__esModule", { value: true });
const swagger_1 = require("@nestjs/swagger");
class UpdateBookDto {
}
__decorate([
    swagger_1.ApiPropertyOptional({
        description: 'Enter bookId that you want to edit',
        type: Number
    }),
    __metadata("design:type", Number)
], UpdateBookDto.prototype, "bookId", void 0);
__decorate([
    swagger_1.ApiProperty({
        description: 'Enter book name',
        minLength: 3,
        maxLength: 20,
        type: String
    }),
    __metadata("design:type", String)
], UpdateBookDto.prototype, "name", void 0);
__decorate([
    swagger_1.ApiPropertyOptional({
        description: 'Enter userId',
        type: Number
    }),
    __metadata("design:type", Number)
], UpdateBookDto.prototype, "userID", void 0);
__decorate([
    swagger_1.ApiProperty({
        type: [Number]
    }),
    __metadata("design:type", Array)
], UpdateBookDto.prototype, "genreIDs", void 0);
exports.default = UpdateBookDto;
//# sourceMappingURL=update-book.dto.js.map
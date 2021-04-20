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
class CreateProjectDto {
}
__decorate([
    swagger_1.ApiProperty({
        description: 'Enter your title',
        type: String,
        minLength: 3,
        maxLength: 200,
        required: true,
    }),
    __metadata("design:type", String)
], CreateProjectDto.prototype, "title", void 0);
__decorate([
    swagger_1.ApiProperty({
        description: 'Enter your budget',
        type: Number,
        required: false,
    }),
    __metadata("design:type", Number)
], CreateProjectDto.prototype, "budget", void 0);
__decorate([
    swagger_1.ApiProperty({
        description: 'Enter your deadline',
        type: Number,
        required: false,
    }),
    __metadata("design:type", Number)
], CreateProjectDto.prototype, "deadline", void 0);
__decorate([
    swagger_1.ApiProperty({
        description: 'Enter your file path',
        type: String,
        minLength: 3,
        maxLength: 200,
        required: false,
    }),
    __metadata("design:type", String)
], CreateProjectDto.prototype, "filePath", void 0);
exports.default = CreateProjectDto;
//# sourceMappingURL=create-project.dto.js.map
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
class EditCompanyDto {
}
__decorate([
    swagger_1.ApiProperty({
        description: 'Enter your name',
        type: String,
        minLength: 3,
        maxLength: 20,
        required: false,
    }),
    __metadata("design:type", String)
], EditCompanyDto.prototype, "name", void 0);
__decorate([
    swagger_1.ApiProperty({
        description: 'Enter your location',
        type: String,
        minLength: 3,
        maxLength: 100,
        required: false,
    }),
    __metadata("design:type", String)
], EditCompanyDto.prototype, "location", void 0);
__decorate([
    swagger_1.ApiProperty({
        description: 'Enter your website',
        type: String,
        minLength: 3,
        maxLength: 20,
        required: false,
    }),
    __metadata("design:type", String)
], EditCompanyDto.prototype, "website", void 0);
exports.default = EditCompanyDto;
//# sourceMappingURL=edit-company.dto.js.map
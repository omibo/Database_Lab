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
exports.PersonDto = void 0;
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
class PersonDto {
}
__decorate([
    class_validator_1.Length(3, 10),
    swagger_1.ApiProperty({ description: 'Enter your name > ', minLength: 3, default: 'Ali', maxLength: 10 }),
    __metadata("design:type", String)
], PersonDto.prototype, "name", void 0);
__decorate([
    class_validator_1.IsNumber(),
    class_validator_1.IsOptional(),
    class_validator_1.Min(1960),
    swagger_1.ApiProperty({ description: 'Optional', default: 1998, maxLength: 1960 }),
    __metadata("design:type", Number)
], PersonDto.prototype, "year", void 0);
exports.PersonDto = PersonDto;
//# sourceMappingURL=person.dto.js.map
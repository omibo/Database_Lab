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
const typeorm_1 = require("typeorm");
const user_entity_1 = require("./user.entity");
const genre_entity_1 = require("./genre.entity");
let BookEntity = class BookEntity extends typeorm_1.BaseEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], BookEntity.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({ length: 500 }),
    __metadata("design:type", String)
], BookEntity.prototype, "name", void 0);
__decorate([
    typeorm_1.ManyToOne(type => user_entity_1.default, user => user.books),
    __metadata("design:type", user_entity_1.default)
], BookEntity.prototype, "user", void 0);
__decorate([
    typeorm_1.ManyToMany(type => genre_entity_1.default),
    typeorm_1.JoinTable(),
    __metadata("design:type", Array)
], BookEntity.prototype, "genres", void 0);
BookEntity = __decorate([
    typeorm_1.Entity()
], BookEntity);
exports.default = BookEntity;
//# sourceMappingURL=book.entity.js.map
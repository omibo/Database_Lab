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
const company_entity_1 = require("./company.entity");
const project_entity_1 = require("./project.entity");
const request_entity_1 = require("./request.entity");
let UserEntity = class UserEntity extends typeorm_1.BaseEntity {
};
__decorate([
    typeorm_1.PrimaryColumn({ length: 20 }),
    __metadata("design:type", String)
], UserEntity.prototype, "username", void 0);
__decorate([
    typeorm_1.Column({ length: 20 }),
    __metadata("design:type", String)
], UserEntity.prototype, "firstname", void 0);
__decorate([
    typeorm_1.Column({ length: 20 }),
    __metadata("design:type", String)
], UserEntity.prototype, "lastname", void 0);
__decorate([
    typeorm_1.Column({ length: 20 }),
    __metadata("design:type", String)
], UserEntity.prototype, "email", void 0);
__decorate([
    typeorm_1.Column({ length: 20 }),
    __metadata("design:type", String)
], UserEntity.prototype, "password", void 0);
__decorate([
    typeorm_1.OneToOne(() => company_entity_1.default, companyEntity => companyEntity.userEntity),
    __metadata("design:type", company_entity_1.default)
], UserEntity.prototype, "companyEntity", void 0);
__decorate([
    typeorm_1.OneToMany(type => project_entity_1.default, project => project.user),
    __metadata("design:type", Array)
], UserEntity.prototype, "projects", void 0);
__decorate([
    typeorm_1.OneToMany(type => request_entity_1.default, request => request.user),
    __metadata("design:type", Array)
], UserEntity.prototype, "requests", void 0);
UserEntity = __decorate([
    typeorm_1.Entity()
], UserEntity);
exports.default = UserEntity;
//# sourceMappingURL=user.entity.js.map
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
exports.UserController = void 0;
const common_1 = require("@nestjs/common");
const user_service_1 = require("./user.service");
const create_user_dto_1 = require("./dto/create-user.dto");
const swagger_1 = require("@nestjs/swagger");
const custom_decorator_1 = require("../auth/custom-decorator");
let UserController = class UserController {
    constructor(usersService) {
        this.usersService = usersService;
    }
    postUser(user) {
        return this.usersService.insert(user);
    }
    getAll() {
        return this.usersService.getAllUsers();
    }
    getBooks(userID) {
        return this.usersService.getBooksOfUser(userID);
    }
};
__decorate([
    common_1.Header('Content-Type', 'application/json'),
    custom_decorator_1.Public(),
    swagger_1.ApiResponse({ status: 201, description: 'You add user sucessfully' }),
    swagger_1.ApiResponse({ status: 400, description: 'Bad request!' }),
    common_1.Post('post'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_user_dto_1.default]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "postUser", null);
__decorate([
    common_1.Header('Content-Type', 'application/json'),
    swagger_1.ApiResponse({ status: 200, description: 'You get all users' }),
    swagger_1.ApiResponse({ status: 401, description: 'You are not authorized' }),
    swagger_1.ApiBearerAuth(),
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UserController.prototype, "getAll", null);
__decorate([
    common_1.Header('Content-Type', 'application/json'),
    swagger_1.ApiResponse({ status: 200, description: 'You get user {id} books' }),
    swagger_1.ApiResponse({ status: 401, description: 'You are not authorized' }),
    swagger_1.ApiBearerAuth(),
    swagger_1.ApiBody({
        description: 'Enter user id'
    }),
    common_1.Get('books'),
    __param(0, common_1.Body('userID', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "getBooks", null);
UserController = __decorate([
    common_1.Controller('users'),
    __metadata("design:paramtypes", [user_service_1.UserService])
], UserController);
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map
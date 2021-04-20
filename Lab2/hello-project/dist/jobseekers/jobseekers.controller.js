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
exports.JobseekersController = void 0;
const common_1 = require("@nestjs/common");
const jobseekers_service_1 = require("./jobseekers.service");
const create_user_dto_1 = require("./dto/create-user.dto");
const swagger_1 = require("@nestjs/swagger");
const create_company_dto_1 = require("./dto/create-company.dto");
const edit_company_dto_1 = require("./dto/edit-company.dto");
const create_project_dto_1 = require("./dto/create-project.dto");
const edit_project_dto_1 = require("./dto/edit-project.dto");
const create_requestl_dto_1 = require("./dto/create-requestl.dto");
const edit_request_dto_1 = require("./dto/edit-request.dto");
const edit_user_dto_1 = require("./dto/edit-user.dto");
let JobseekersController = class JobseekersController {
    constructor(jsService) {
        this.jsService = jsService;
    }
    getUser(username) {
        return this.jsService.getUser(username);
    }
    postUser(user) {
        return this.jsService.insertUser(user);
    }
    edittUser(username, user) {
        return this.jsService.editUser(username, user);
    }
    deleteUser(username) {
        return this.jsService.deleteUser(username);
    }
    getCompany(username) {
        const a = this.jsService.getCompany(username);
        return a;
    }
    createCompany(username, company) {
        return this.jsService.insertCompany(username, company);
    }
    editCompany(username, company) {
        return this.jsService.editCompany(username, company);
    }
    deleteCompany(username) {
        return this.jsService.deleteCompany(username);
    }
    getProject(username, pid) {
        return this.jsService.getProject(username, pid);
    }
    createProject(username, project) {
        return this.jsService.insertProject(username, project);
    }
    editProject(username, pid, project) {
        return this.jsService.editProject(username, pid, project);
    }
    deleteProject(username, pid) {
        return this.jsService.deleteProject(username, pid);
    }
    getRequest(username, rid) {
        return this.jsService.getRequest(username, rid);
    }
    createRequest(username, request) {
        return this.jsService.insertRequest(username, request);
    }
    editRequest(username, rid, request) {
        return this.jsService.editRequest(username, rid, request);
    }
    deleteRequest(username, rid) {
        return this.jsService.deleteRequest(username, rid);
    }
};
__decorate([
    common_1.Header('Content-Type', 'application/json'),
    swagger_1.ApiResponse({ status: 200, description: 'You get user details sucessfully' }),
    swagger_1.ApiResponse({ status: 400, description: 'Bad Request' }),
    common_1.Get('users/:username'),
    __param(0, common_1.Param('username')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], JobseekersController.prototype, "getUser", null);
__decorate([
    common_1.Header('Content-Type', 'application/json'),
    swagger_1.ApiResponse({ status: 201, description: 'You signed up sucessfully' }),
    swagger_1.ApiResponse({ status: 400, description: 'Your request body is wrong' }),
    common_1.Post('/users/'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_user_dto_1.default]),
    __metadata("design:returntype", void 0)
], JobseekersController.prototype, "postUser", null);
__decorate([
    common_1.Header('Content-Type', 'application/json'),
    swagger_1.ApiResponse({ status: 201, description: 'You edit your profile sucessfully' }),
    swagger_1.ApiResponse({ status: 400, description: 'Your request body is wrong' }),
    common_1.Post('users/:username'),
    __param(0, common_1.Param('username')), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, edit_user_dto_1.default]),
    __metadata("design:returntype", void 0)
], JobseekersController.prototype, "edittUser", null);
__decorate([
    common_1.Header('Content-Type', 'application/json'),
    swagger_1.ApiResponse({ status: 201, description: 'You remove user sucessfully' }),
    swagger_1.ApiResponse({ status: 400, description: 'Bad request!' }),
    common_1.Delete('users/:username'),
    __param(0, common_1.Param('username')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], JobseekersController.prototype, "deleteUser", null);
__decorate([
    common_1.Header('Content-Type', 'application/json'),
    swagger_1.ApiResponse({ status: 200, description: 'You get your company details' }),
    swagger_1.ApiResponse({ status: 401, description: 'Wrong userId' }),
    common_1.Get('users/:username/company'),
    __param(0, common_1.Param('username')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], JobseekersController.prototype, "getCompany", null);
__decorate([
    common_1.Header('Content-Type', 'application/json'),
    swagger_1.ApiResponse({ status: 201, description: 'You add company sucessfully' }),
    swagger_1.ApiResponse({ status: 400, description: 'Bad request!' }),
    common_1.Post('users/:username/company'),
    __param(0, common_1.Param('username')), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, create_company_dto_1.default]),
    __metadata("design:returntype", void 0)
], JobseekersController.prototype, "createCompany", null);
__decorate([
    common_1.Header('Content-Type', 'application/json'),
    swagger_1.ApiResponse({ status: 201, description: 'You add company sucessfully' }),
    swagger_1.ApiResponse({ status: 400, description: 'Bad request!' }),
    common_1.Put('users/:username/company'),
    __param(0, common_1.Param('username')), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, edit_company_dto_1.default]),
    __metadata("design:returntype", void 0)
], JobseekersController.prototype, "editCompany", null);
__decorate([
    common_1.Header('Content-Type', 'application/json'),
    swagger_1.ApiResponse({ status: 201, description: 'You add company sucessfully' }),
    swagger_1.ApiResponse({ status: 400, description: 'Bad request!' }),
    common_1.Delete('users/:username/company'),
    __param(0, common_1.Param('username')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], JobseekersController.prototype, "deleteCompany", null);
__decorate([
    common_1.Header('Content-Type', 'application/json'),
    swagger_1.ApiResponse({ status: 200, description: 'You get your project' }),
    swagger_1.ApiResponse({ status: 401, description: 'Wrong userId or projectId' }),
    common_1.Get('users/:username/projects/:pid'),
    __param(0, common_1.Param('username')), __param(1, common_1.Param('pid')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number]),
    __metadata("design:returntype", void 0)
], JobseekersController.prototype, "getProject", null);
__decorate([
    common_1.Header('Content-Type', 'application/json'),
    swagger_1.ApiResponse({ status: 201, description: 'You add project sucessfully' }),
    swagger_1.ApiResponse({ status: 400, description: 'Bad request!' }),
    common_1.Post('users/:username/projects/'),
    __param(0, common_1.Param('username')), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, create_project_dto_1.default]),
    __metadata("design:returntype", void 0)
], JobseekersController.prototype, "createProject", null);
__decorate([
    common_1.Header('Content-Type', 'application/json'),
    swagger_1.ApiResponse({ status: 201, description: 'You edit project sucessfully' }),
    swagger_1.ApiResponse({ status: 400, description: 'Bad request!' }),
    common_1.Put('users/:username/projects/:pid'),
    __param(0, common_1.Param('username')), __param(1, common_1.Param('pid')), __param(2, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number, edit_project_dto_1.default]),
    __metadata("design:returntype", void 0)
], JobseekersController.prototype, "editProject", null);
__decorate([
    common_1.Header('Content-Type', 'application/json'),
    swagger_1.ApiResponse({ status: 201, description: 'You delete project sucessfully' }),
    swagger_1.ApiResponse({ status: 400, description: 'Bad request!' }),
    common_1.Delete('users/:username/projects/:pid'),
    __param(0, common_1.Param('username')), __param(1, common_1.Param('pid')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number]),
    __metadata("design:returntype", void 0)
], JobseekersController.prototype, "deleteProject", null);
__decorate([
    common_1.Header('Content-Type', 'application/json'),
    swagger_1.ApiResponse({ status: 200, description: 'You get your request' }),
    swagger_1.ApiResponse({ status: 401, description: 'Wrong userId or projectId' }),
    common_1.Get('users/:username/requests/:rid'),
    __param(0, common_1.Param('username')), __param(1, common_1.Param('rid')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number]),
    __metadata("design:returntype", void 0)
], JobseekersController.prototype, "getRequest", null);
__decorate([
    common_1.Header('Content-Type', 'application/json'),
    swagger_1.ApiResponse({ status: 201, description: 'You add request sucessfully' }),
    swagger_1.ApiResponse({ status: 400, description: 'Bad request!' }),
    common_1.Post('users/:username/requests/'),
    __param(0, common_1.Param('username')), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, create_requestl_dto_1.default]),
    __metadata("design:returntype", void 0)
], JobseekersController.prototype, "createRequest", null);
__decorate([
    common_1.Header('Content-Type', 'application/json'),
    swagger_1.ApiResponse({ status: 201, description: 'You edit request sucessfully' }),
    swagger_1.ApiResponse({ status: 400, description: 'Bad request!' }),
    common_1.Put('users/:username/requests/:rid'),
    __param(0, common_1.Param('username')), __param(1, common_1.Param('rid')), __param(2, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number, edit_request_dto_1.default]),
    __metadata("design:returntype", void 0)
], JobseekersController.prototype, "editRequest", null);
__decorate([
    common_1.Header('Content-Type', 'application/json'),
    swagger_1.ApiResponse({ status: 201, description: 'You delete request sucessfully' }),
    swagger_1.ApiResponse({ status: 400, description: 'Bad request!' }),
    common_1.Delete('users/:username/requests/:rid'),
    __param(0, common_1.Param('username')), __param(1, common_1.Param('rid')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number]),
    __metadata("design:returntype", void 0)
], JobseekersController.prototype, "deleteRequest", null);
JobseekersController = __decorate([
    common_1.Controller(),
    __metadata("design:paramtypes", [jobseekers_service_1.JobseekersService])
], JobseekersController);
exports.JobseekersController = JobseekersController;
//# sourceMappingURL=jobseekers.controller.js.map
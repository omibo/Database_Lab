"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JobseekersService = void 0;
const common_1 = require("@nestjs/common");
const company_entity_1 = require("../db/company.entity");
const user_entity_1 = require("../db/user.entity");
const project_entity_1 = require("../db/project.entity");
const request_entity_1 = require("../db/request.entity");
let JobseekersService = class JobseekersService {
    async getUser(username) {
        return await user_entity_1.default.findOne(username);
    }
    async insertUser(userDetails) {
        const userEntity = user_entity_1.default.create();
        const { username, firstname, lastname, email, password } = userDetails;
        userEntity.username = username;
        userEntity.firstname = firstname;
        userEntity.lastname = lastname;
        userEntity.email = email;
        userEntity.password = password;
        await user_entity_1.default.save(userEntity);
        return userEntity;
    }
    async editUser(username, newUser) {
        const user = await user_entity_1.default.findOne(username);
        if (user == undefined) {
            return undefined;
        }
        var changed = false;
        if (newUser.firstname !== undefined) {
            user.firstname = newUser.firstname;
            changed = true;
        }
        if (newUser.lastname !== undefined) {
            user.lastname = newUser.lastname;
            changed = true;
        }
        if (newUser.email !== undefined) {
            user.email = newUser.email;
            changed = true;
        }
        if (newUser.password !== undefined) {
            user.password = newUser.password;
            changed = true;
        }
        if (changed) {
            await user.save();
        }
        return user;
    }
    async deleteUser(username) {
        const user = await user_entity_1.default.findOne(username);
        await user.remove();
        return user;
    }
    async getCompany(username) {
        return await company_entity_1.default.findOne({ where: { userEntity: username } });
    }
    async insertCompany(username, company) {
        const user = await user_entity_1.default.findOne(username);
        if (user == undefined) {
            return undefined;
        }
        const companyEntity = company_entity_1.default.create();
        const { name, location, website } = company;
        companyEntity.name = name;
        companyEntity.location = location;
        companyEntity.website = website;
        companyEntity.userEntity = user;
        try {
            await company_entity_1.default.save(companyEntity);
        }
        catch (err) {
            return undefined;
        }
        return companyEntity;
    }
    async editCompany(username, company) {
        const user = await user_entity_1.default.findOne(username);
        if (user == undefined) {
            return undefined;
        }
        const companyEntity = await company_entity_1.default.findOne(user.companyEntity);
        var changed = false;
        if (company.name !== undefined) {
            companyEntity.name = company.name;
            changed = true;
        }
        if (company.location !== undefined) {
            companyEntity.location = company.location;
            changed = true;
        }
        if (company.website !== undefined) {
            companyEntity.website = company.website;
            changed = true;
        }
        if (changed) {
            await companyEntity.save();
        }
        return companyEntity;
    }
    async deleteCompany(username) {
        const company = await company_entity_1.default.findOne({ where: { userEntity: username } });
        await company.remove();
        return company;
    }
    async getProject(username, projectId) {
        return await project_entity_1.default.findOne(projectId);
    }
    async insertProject(username, project) {
        const user1 = await user_entity_1.default.findOne(username);
        if (user1 == undefined) {
            return undefined;
        }
        const projectEntity = project_entity_1.default.create();
        const { title, budget, deadline, filePath } = project;
        projectEntity.title = title;
        projectEntity.budget = budget;
        projectEntity.deadline = deadline;
        projectEntity.filePath = filePath;
        projectEntity.user = user1;
        try {
            await project_entity_1.default.save(projectEntity);
        }
        catch (err) {
            return undefined;
        }
        return projectEntity;
    }
    async editProject(username, pid, project) {
        const user = await user_entity_1.default.findOne(username);
        if (user == undefined) {
            return undefined;
        }
        const projectEntity = await project_entity_1.default.findOne(pid);
        var changed = false;
        if (project.budget !== undefined) {
            projectEntity.budget = project.budget;
            changed = true;
        }
        if (project.deadline !== undefined) {
            projectEntity.deadline = project.deadline;
            changed = true;
        }
        if (project.filePath !== undefined) {
            projectEntity.filePath = project.filePath;
            changed = true;
        }
        if (project.title !== undefined) {
            projectEntity.title = project.title;
            changed = true;
        }
        if (changed) {
            await projectEntity.save();
        }
        return projectEntity;
    }
    async deleteProject(username, pid) {
        const project = await project_entity_1.default.findOne(pid);
        await project.remove();
        return project;
    }
    async getRequest(username, requestId) {
        return await request_entity_1.default.findOne(requestId);
    }
    async insertRequest(username, request) {
        const user1 = await user_entity_1.default.findOne(username);
        if (user1 == undefined) {
            return undefined;
        }
        const requestEntity = request_entity_1.default.create();
        const { pid, budget, deadline } = request;
        requestEntity.projectId = pid;
        requestEntity.budget = budget;
        requestEntity.deadline = deadline;
        requestEntity.user = user1;
        try {
            await request_entity_1.default.save(requestEntity);
        }
        catch (err) {
            return undefined;
        }
        return requestEntity;
    }
    async editRequest(username, rid, request) {
        const user = await user_entity_1.default.findOne(username);
        if (user == undefined) {
            return undefined;
        }
        const requestEntity = await request_entity_1.default.findOne(rid);
        var changed = false;
        if (request.pid !== undefined) {
            requestEntity.projectId = request.pid;
            changed = true;
        }
        if (request.budget !== undefined) {
            requestEntity.budget = request.budget;
            changed = true;
        }
        if (request.deadline !== undefined) {
            requestEntity.deadline = request.deadline;
            changed = true;
        }
        if (changed) {
            await requestEntity.save();
        }
        return requestEntity;
    }
    async deleteRequest(username, pid) {
        const request = await request_entity_1.default.findOne(pid);
        await request.remove();
        return request;
    }
};
JobseekersService = __decorate([
    common_1.Injectable()
], JobseekersService);
exports.JobseekersService = JobseekersService;
//# sourceMappingURL=jobseekers.service.js.map
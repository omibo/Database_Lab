import { Injectable, UnauthorizedException } from '@nestjs/common';
import CompanyEntity from 'src/db/company.entity';
import UserEntity from '../db/user.entity';
import CreateUserDto from './dto/create-user.dto';
import CreateCompanyDto from './dto/create-company.dto';
import EditCompanyDto from './dto/edit-company.dto';

import CreateProjectDto from './dto/create-project.dto';
import ProjectEntity from 'src/db/project.entity';
import EditProjectDto from './dto/edit-project.dto';
import  EditUserDto from './dto/edit-user.dto';
import RequestEntity from 'src/db/request.entity';
import CreateRequestDto from './dto/create-requestl.dto';
import EditRequestDto from './dto/edit-request.dto';


@Injectable()
export class JobseekersService {

    async getUser(username: string): Promise<UserEntity> {
        return await UserEntity.findOne(username);
    }

    async insertUser(userDetails: CreateUserDto): Promise<UserEntity> {
        const userEntity: UserEntity = UserEntity.create();
        const {username, firstname, lastname, email, password } = userDetails;
        userEntity.username = username;
        userEntity.firstname = firstname;
        userEntity.lastname = lastname;
        userEntity.email = email;
        userEntity.password = password;
        await UserEntity.save(userEntity);
        return userEntity;
    }

    async editUser(username: string, newUser: EditUserDto): Promise<UserEntity> {
        const user = await UserEntity.findOne(username);
        if(user == undefined){ return undefined;}
        
        var changed = false;

        if(newUser.firstname !== undefined){
            user.firstname = newUser.firstname;
            changed = true;
        }
        if(newUser.lastname !== undefined){
            user.lastname = newUser.lastname;
            changed = true;
        }
        if(newUser.email !== undefined){
            user.email = newUser.email;
            changed = true;
        }
        if(newUser.password !== undefined){
            user.password = newUser.password;
            changed = true;
        }
        if(changed){await user.save();}
        return user;
    }

    async deleteUser(username: string): Promise<UserEntity> {
        const user = await UserEntity.findOne(username);
        await user.remove();
        return user;
    }

    // ------------------------ Feature 1 ------------------------

    async getCompany(username: string): Promise<CompanyEntity> {
        return await CompanyEntity.findOne({where: {userEntity: username}});
    }

    async insertCompany(username: string, company: CreateCompanyDto): Promise<CompanyEntity> {
        const user = await UserEntity.findOne(username);
        if(user == undefined){ return undefined;}
        const companyEntity: CompanyEntity = CompanyEntity.create();
        const {name, location, website} = company;
        companyEntity.name = name;
        companyEntity.location = location;
        companyEntity.website = website;
        companyEntity.userEntity = user;
        try{
            await CompanyEntity.save(companyEntity);
        } catch(err){
            return undefined;
        }
        return companyEntity;
    }

    async editCompany(username: string, company: EditCompanyDto): Promise<CompanyEntity> {
        const user = await UserEntity.findOne(username);
        if(user == undefined){ return undefined;}
        const companyEntity = await CompanyEntity.findOne(user.companyEntity);
    
        var changed = false;
        
        if(company.name !== undefined){
            companyEntity.name = company.name;
            changed = true;
        }
        if(company.location !== undefined){
            companyEntity.location = company.location;
            changed = true;
        }
        if(company.website !== undefined){
            companyEntity.website = company.website
            changed = true;
        }
        if(changed){await companyEntity.save();}
        return companyEntity;
    }

    async deleteCompany(username: string): Promise<CompanyEntity> {
        const company = await CompanyEntity.findOne({where: {userEntity: username}});
        await company.remove();
        return company;
    }



    // ------------------------ Feature 2 ------------------------

    async getProject(username: string, projectId: number): Promise<ProjectEntity> {
        return await ProjectEntity.findOne(projectId);
    }

    async insertProject(username: string, project: CreateProjectDto): Promise<ProjectEntity> {
        const user1 = await UserEntity.findOne(username);
        if(user1 == undefined){ return undefined;}

        const projectEntity: ProjectEntity = ProjectEntity.create();
        const {title, budget, deadline, filePath} = project;

        projectEntity.title = title;
        projectEntity.budget = budget;
        projectEntity.deadline = deadline;
        projectEntity.filePath = filePath;
        projectEntity.user = user1;
        try{
            await ProjectEntity.save(projectEntity);
        } catch(err){
            return undefined;
        }
        return projectEntity;
    }

    async editProject(username: string, pid: number, project: EditProjectDto): Promise<ProjectEntity> {
        const user = await UserEntity.findOne(username);
        if(user == undefined){ return undefined;}
        const projectEntity = await ProjectEntity.findOne(pid);
    
        var changed = false;
        
        if(project.budget !== undefined){
            projectEntity.budget = project.budget;
            changed = true;
        }
        if(project.deadline !== undefined){
            projectEntity.deadline = project.deadline;
            changed = true;
        }
        if(project.filePath !== undefined){
            projectEntity.filePath = project.filePath;
            changed = true;
        }
        if(project.title !== undefined){
            projectEntity.title = project.title;
            changed = true;
        }
        if(changed){await projectEntity.save();}
        return projectEntity;
    }

    async deleteProject(username: string, pid: number): Promise<ProjectEntity> {
        const project = await ProjectEntity.findOne(pid);
        await project.remove();
        return project;
    }


    // ------------------------ Feature 4 ------------------------

    async getRequest(username: string, requestId: number): Promise<RequestEntity> {
        return await RequestEntity.findOne(requestId);
    }

    async insertRequest(username: string, request: CreateRequestDto): Promise<RequestEntity> {
        const user1 = await UserEntity.findOne(username);
        if(user1 == undefined){ return undefined;}

        const requestEntity: RequestEntity = RequestEntity.create();
        const {pid, budget, deadline} = request;

        requestEntity.projectId = pid;
        requestEntity.budget = budget;
        requestEntity.deadline = deadline;
        requestEntity.user = user1;
        try{
            await RequestEntity.save(requestEntity);
        } catch(err){
            return undefined;
        }
        return requestEntity;
    }

    async editRequest(username: string, rid: number, request: EditRequestDto): Promise<RequestEntity> {
        const user = await UserEntity.findOne(username);
        if(user == undefined){ return undefined;}
        const requestEntity = await RequestEntity.findOne(rid);
    
        var changed = false;
        
        if(request.pid !== undefined){
            requestEntity.projectId = request.pid;
            changed = true;
        }
        if(request.budget !== undefined){
            requestEntity.budget = request.budget;
            changed = true;
        }
        if(request.deadline !== undefined){
            requestEntity.deadline = request.deadline;
            changed = true;
        }
        if(changed){await requestEntity.save();}
        return requestEntity;
    }

    async deleteRequest(username: string, pid: number): Promise<RequestEntity> {
        const request = await RequestEntity.findOne(pid);
        await request.remove();
        return request;
    }
    

}

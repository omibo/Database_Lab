import { JobseekersService } from './jobseekers.service';
import CreateUserDto from './dto/create-user.dto';
import CreateCompanyDto from './dto/create-company.dto';
import EditCompanyDto from './dto/edit-company.dto';
import CreateProjectDto from './dto/create-project.dto';
import EditProjectDto from './dto/edit-project.dto';
import CreateRequestDto from './dto/create-requestl.dto';
import EditRequestDto from './dto/edit-request.dto';
import UpdateUserDto from './dto/edit-user.dto';
export declare class JobseekersController {
    private readonly jsService;
    constructor(jsService: JobseekersService);
    getUser(username: string): Promise<import("../db/user.entity").default>;
    postUser(user: CreateUserDto): Promise<import("../db/user.entity").default>;
    edittUser(username: string, user: UpdateUserDto): Promise<import("../db/user.entity").default>;
    deleteUser(username: string): Promise<import("../db/user.entity").default>;
    getCompany(username: string): Promise<import("../db/company.entity").default>;
    createCompany(username: string, company: CreateCompanyDto): Promise<import("../db/company.entity").default>;
    editCompany(username: string, company: EditCompanyDto): Promise<import("../db/company.entity").default>;
    deleteCompany(username: string): Promise<import("../db/company.entity").default>;
    getProject(username: string, pid: number): Promise<import("../db/project.entity").default>;
    createProject(username: string, project: CreateProjectDto): Promise<import("../db/project.entity").default>;
    editProject(username: string, pid: number, project: EditProjectDto): Promise<import("../db/project.entity").default>;
    deleteProject(username: string, pid: number): Promise<import("../db/project.entity").default>;
    getRequest(username: string, rid: number): Promise<import("../db/request.entity").default>;
    createRequest(username: string, request: CreateRequestDto): Promise<import("../db/request.entity").default>;
    editRequest(username: string, rid: number, request: EditRequestDto): Promise<import("../db/request.entity").default>;
    deleteRequest(username: string, rid: number): Promise<import("../db/request.entity").default>;
}

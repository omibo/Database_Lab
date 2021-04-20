import { Body, Controller, Header, Get, ParseIntPipe, Post, Put, Param, BadRequestException, Res, HttpStatus, Delete } from '@nestjs/common';
import { JobseekersService } from './jobseekers.service';
import CreateUserDto from './dto/create-user.dto';
import {ApiResponse, ApiQuery, ApiBearerAuth, ApiBody} from '@nestjs/swagger'
import CreateCompanyDto from './dto/create-company.dto';
import EditCompanyDto from './dto/edit-company.dto';
import CreateProjectDto from './dto/create-project.dto';
import EditProjectDto from './dto/edit-project.dto';
import CreateSkillDto from './dto/create-requestl.dto';
import CreateRequestDto from './dto/create-requestl.dto';
import EditRequestDto from './dto/edit-request.dto';
import UpdateUserDto from './dto/edit-user.dto';

@Controller()
export class JobseekersController {
  constructor(private readonly jsService: JobseekersService) {}

  // ------------------------ Feature 1 ------------------------
  @Header('Content-Type', 'application/json')
  @ApiResponse({status:200, description: 'You get user details sucessfully'})
  @ApiResponse({status:400, description: 'Bad Request'})
  @Get('users/:username')
  getUser( @Param('username') username: string) {
    return this.jsService.getUser(username);
  }


  @Header('Content-Type', 'application/json')
  @ApiResponse({status:201, description: 'You signed up sucessfully'})
  @ApiResponse({status:400, description: 'Your request body is wrong'})
  @Post('/users/')
  postUser( @Body() user: CreateUserDto) {
    return this.jsService.insertUser(user);
  }

  @Header('Content-Type', 'application/json')
  @ApiResponse({status:201, description: 'You edit your profile sucessfully'})
  @ApiResponse({status:400, description: 'Your request body is wrong'})
  @Post('users/:username')
  edittUser(@Param('username') username: string, @Body() user: UpdateUserDto) {
    return this.jsService.editUser(username, user);
  }

  @Header('Content-Type', 'application/json')
  @ApiResponse({status:201, description: 'You remove user sucessfully'})
  @ApiResponse({status:400, description: 'Bad request!'})
  @Delete('users/:username')
  deleteUser( @Param('username') username: string) {
    return this.jsService.deleteUser(username);
  }

  // ------------------------ Feature 2 ------------------------
  @Header('Content-Type', 'application/json')
  @ApiResponse({status:200, description: 'You get your company details'})
  @ApiResponse({status:401, description: 'Wrong userId'})
  @Get('users/:username/company')
  getCompany(@Param('username') username: string ) {
    const a = this.jsService.getCompany(username);
    return a;
  }  

  @Header('Content-Type', 'application/json')
  @ApiResponse({status:201, description: 'You add company sucessfully'})
  @ApiResponse({status:400, description: 'Bad request!'})
  @Post('users/:username/company')
  createCompany( @Param('username') username: string, @Body() company: CreateCompanyDto) {
    return this.jsService.insertCompany(username, company);
  }

  @Header('Content-Type', 'application/json')
  @ApiResponse({status:201, description: 'You add company sucessfully'})
  @ApiResponse({status:400, description: 'Bad request!'})
  @Put('users/:username/company')
  editCompany( @Param('username') username: string, @Body() company: EditCompanyDto) {
    return this.jsService.editCompany(username, company);
  }

  @Header('Content-Type', 'application/json')
  @ApiResponse({status:201, description: 'You add company sucessfully'})
  @ApiResponse({status:400, description: 'Bad request!'})
  @Delete('users/:username/company')
  deleteCompany( @Param('username') username: string) {
    return this.jsService.deleteCompany(username);
  }

  // ------------------------ Feature 3 ------------------------
  @Header('Content-Type', 'application/json')
  @ApiResponse({status:200, description: 'You get your project'})
  @ApiResponse({status:401, description: 'Wrong userId or projectId'})
  @Get('users/:username/projects/:pid')
  getProject(@Param('username') username: string, @Param('pid') pid: number ) {
    return this.jsService.getProject(username, pid);
  }  

  @Header('Content-Type', 'application/json')
  @ApiResponse({status:201, description: 'You add project sucessfully'})
  @ApiResponse({status:400, description: 'Bad request!'})
  @Post('users/:username/projects/')
  createProject( @Param('username') username: string, @Body() project: CreateProjectDto) {
    return this.jsService.insertProject(username, project);
  }

  @Header('Content-Type', 'application/json')
  @ApiResponse({status:201, description: 'You edit project sucessfully'})
  @ApiResponse({status:400, description: 'Bad request!'})
  @Put('users/:username/projects/:pid')
  editProject( @Param('username') username: string, @Param('pid') pid: number, @Body() project: EditProjectDto) {
    return this.jsService.editProject(username, pid, project);
  }

  @Header('Content-Type', 'application/json')
  @ApiResponse({status:201, description: 'You delete project sucessfully'})
  @ApiResponse({status:400, description: 'Bad request!'})
  @Delete('users/:username/projects/:pid')
  deleteProject( @Param('username') username: string, @Param('pid') pid: number){
    return this.jsService.deleteProject(username, pid);
  }

  // ------------------------ Feature 4 ------------------------
  @Header('Content-Type', 'application/json')
  @ApiResponse({status:200, description: 'You get your request'})
  @ApiResponse({status:401, description: 'Wrong userId or projectId'})
  @Get('users/:username/requests/:rid')
  getRequest(@Param('username') username: string, @Param('rid') rid: number ) {
    return this.jsService.getRequest(username, rid);
  }  

  @Header('Content-Type', 'application/json')
  @ApiResponse({status:201, description: 'You add request sucessfully'})
  @ApiResponse({status:400, description: 'Bad request!'})
  @Post('users/:username/requests/')
  createRequest( @Param('username') username: string, @Body() request: CreateRequestDto) {
    return this.jsService.insertRequest(username, request);
  }

  @Header('Content-Type', 'application/json')
  @ApiResponse({status:201, description: 'You edit request sucessfully'})
  @ApiResponse({status:400, description: 'Bad request!'})
  @Put('users/:username/requests/:rid')
  editRequest( @Param('username') username: string, @Param('rid') rid: number, @Body() request: EditRequestDto) {
    return this.jsService.editRequest(username, rid, request);
  }

  @Header('Content-Type', 'application/json')
  @ApiResponse({status:201, description: 'You delete request sucessfully'})
  @ApiResponse({status:400, description: 'Bad request!'})
  @Delete('users/:username/requests/:rid')
  deleteRequest( @Param('username') username: string, @Param('rid') rid: number){
    return this.jsService.deleteRequest(username, rid);
  }

}
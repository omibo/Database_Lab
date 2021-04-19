
import { Controller, Request, Post, UseGuards, Header } from '@nestjs/common';
import { LocalAuthGuard } from './auth/local-auth.guard';
import {ApiResponse, ApiQuery, ApiBearerAuth, ApiBody} from '@nestjs/swagger'
import { AuthService } from './auth/auth.service';
import { AuthGuard } from '@nestjs/passport';
import { Public } from './auth/custom-decorator';

@Controller()
export class AppController {
  constructor(private authService: AuthService) {}

  @Header('Content-Type', 'application/json')
  @ApiResponse({status:200, description: 'You are logged in'})
  @Public()
  @UseGuards(AuthGuard("local"))
  @Post('auth/login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }
}

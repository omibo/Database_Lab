import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { AuthService } from '../auth/auth.service'
import { UserController } from './user.controller';
import { APP_GUARD } from '@nestjs/core';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
@Module({
  imports: [],
  controllers: [UserController],
  providers: [
    UserService,
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    }],
})
export class UserModule {}

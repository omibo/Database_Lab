import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';

import { JobseekersModule } from './jobseekers/jobseekers.module';
import UserEntity from './db/user.entity';
import CompanyEntity from './db/company.entity';
import ProjectEntity from './db/project.entity';
import RequestEntity from './db/request.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature(
      [UserEntity, CompanyEntity, ProjectEntity, RequestEntity],
    ),

    TypeOrmModule.forRoot(),

    JobseekersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
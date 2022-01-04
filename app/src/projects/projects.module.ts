import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProjectsService } from './projects.service';
import { ProjectsController } from './projects.controller';
import { Project } from './project.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Project])],
  exports: [TypeOrmModule],
  providers: [ProjectsService],
  controllers: [ProjectsController],
})
export class ProjectsModule {}

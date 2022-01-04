import {
  Controller,
  Get,
  Post,
  HttpCode,
  HttpStatus,
  Body,
  HttpException,
  Param,
} from '@nestjs/common';
import { CreateProjectDTO, GetProjectDTO } from './dto/project.dto';
import { ProjectsService } from './projects.service';
import { Project } from './project.entity';

@Controller('projects')
export class ProjectsController {
  constructor(private readonly projectService: ProjectsService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async createProject(@Body() createProjectDTO: CreateProjectDTO) {
    try {
      await this.projectService.createProject(createProjectDTO);
    } catch (e) {
      throw new HttpException(
        {
          status: HttpStatus.INTERNAL_SERVER_ERROR,
          error: 'Internal Server Error.',
        },
        500,
      );
    }
    return;
  }

  @Get('/:id')
  async getProject(@Param() param: GetProjectDTO): Promise<Project> {
    try {
      const result = await this.projectService.findProjectById(param.id);
      return result;
    } catch (e) {
      throw new HttpException(
        {
          status: HttpStatus.INTERNAL_SERVER_ERROR,
          error: 'Internal Server Error.',
        },
        500,
      );
    }
  }
}

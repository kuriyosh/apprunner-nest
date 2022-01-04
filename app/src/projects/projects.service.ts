import { Injectable } from '@nestjs/common';
import { Project } from './project.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ProjectsService {
  constructor(
    @InjectRepository(Project)
    private readonly projectRepository: Repository<Project>,
  ) {}

  async findProjectById(id: number): Promise<Project> {
    const project = await this.projectRepository.findOne({ where: { id } });
    return project;
  }

  async createProject(project: Partial<Project>): Promise<void> {
    const result = await this.projectRepository.insert(project);
    console.log(result);
  }
}

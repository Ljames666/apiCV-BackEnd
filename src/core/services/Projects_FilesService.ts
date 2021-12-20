import { getRepository } from "typeorm";
import { Files } from "../models/Files";
import { Projects } from "../models/Projects";
import { Projects_Files } from "../models/Projects_Files";

type Projects_FilesRequest = {
  project_id: string;
  file_id: string;
};

export class CreateProjects_FilesService {
  async execute({ project_id, file_id }: Projects_FilesRequest): Promise<Projects_Files | Error> {
    const repository = getRepository(Projects_Files);

    const repoProjects = getRepository(Projects);
    const repoFiles = getRepository(Files);

    if (!(await repoProjects.findOne(project_id)) || !(await repoFiles.findOne(file_id))) {
      return new Error(` not exists!`);
    }

    const projects_Files = repository.create({
      project_id,
      file_id,
    });

    await repository.save(projects_Files);

    return projects_Files;
  }
}

export class GetProjects_FilesService {
  async execute() {
    const repository = getRepository(Projects_Files);

    const projects_Files = await repository.find({
      relations: ["projects", "files"],
    });

    return projects_Files;
  }
}

export class UpdateProjects_FilesService {
  async execute({ project_id, file_id }: Projects_FilesRequest): Promise<Projects_Files | Error> {
    const repository = getRepository(Projects_Files);

    const projects = await repository.findOne(project_id && file_id);

    if (!projects) {
      return new Error(`Projects_Files does not exists`);
    }

    projects.project_id = project_id ? project_id : projects.project_id;
    projects.file_id = file_id ? file_id : projects.file_id;

    await repository.save(projects);

    return projects;
  }
}

export class DeleteProjects_FilesService {
  async execute(project_id: string, file_id: string) {
    const repository = getRepository(Projects_Files);

    if (!(await repository.findOne(project_id && file_id))) {
      return new Error("Projects_Files does not exists");
    }

    await repository.delete(project_id && file_id);
  }
}

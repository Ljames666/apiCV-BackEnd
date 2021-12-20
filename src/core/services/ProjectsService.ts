import { getRepository } from "typeorm";
import { Projects } from "../models/Projects";

import { Users } from "../models/Users";

type ProjectsRequest = {
  title: string;
  description: string;
  Date: string;
  user_id: string;
};
type UpdateProjectsRequest = {
  id: string;
  title: string;
  description: string;
  Date: string;
  user_id: string;
};

export class CreateProjectsService {
  async execute({ title, description, Date, user_id }: ProjectsRequest): Promise<Projects | Error> {
    const repository = getRepository(Projects);

    const repoUser = getRepository(Users);

    if (!(await repoUser.findOne(user_id))) {
      return new Error(`User does not exists!`);
    }

    const projects = repository.create({
      title,
      description,
      Date,
      user_id,
    });

    await repository.save(projects);

    return projects;
  }
}

export class GetProjectsService {
  async execute() {
    const repository = getRepository(Projects);

    const projects = await repository.find({ relations: ["users"] });

    return projects;
  }
}

export class UpdateProjectsService {
  async execute({
    id,
    title,
    description,
    Date,
    user_id,
  }: UpdateProjectsRequest): Promise<Projects | Error> {
    const repository = getRepository(Projects);

    const projects = await repository.findOne(id);

    if (!projects) {
      return new Error(`Project does not exists`);
    }

    projects.title = title ? title : projects.title;
    projects.description = description ? description : projects.description;
    projects.Date = Date ? Date : projects.Date;
    projects.user_id = user_id ? user_id : projects.user_id;

    await repository.save(projects);

    return projects;
  }
}

export class DeleteProjectsService {
  async execute(id: string) {
    const repository = getRepository(Projects);

    if (!(await repository.findOne(id))) {
      return new Error("Project does not exists");
    }

    await repository.delete(id);
  }
}

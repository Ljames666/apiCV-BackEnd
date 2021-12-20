import { getRepository } from "typeorm";
import { Comments } from "../models/Comments";
import { Projects } from "../models/Projects";
import { Projects_Comments } from "../models/Projects_Comments";

type Projects_CommentsRequest = {
  project_id: string;
  comments_id: string;
};

export class CreateProjects_CommentsService {
  async execute({
    project_id,
    comments_id,
  }: Projects_CommentsRequest): Promise<Projects_Comments | Error> {
    const repository = getRepository(Projects_Comments);

    const repoProjects = getRepository(Projects);
    const repoComments = getRepository(Comments);

    if (!(await repoProjects.findOne(project_id)) || !(await repoComments.findOne(comments_id))) {
      return new Error(`not exists!`);
    }

    const projects_Comments = repository.create({
      project_id,
      comments_id,
    });

    await repository.save(projects_Comments);

    return projects_Comments;
  }
}

export class GetProjects_CommentsService {
  async execute() {
    const repository = getRepository(Projects_Comments);

    const projects_Comments = await repository.find({
      relations: ["projects", "comments"],
    });

    return projects_Comments;
  }
}

export class UpdateProjects_CommentsService {
  async execute({
    project_id,
    comments_id,
  }: Projects_CommentsRequest): Promise<Projects_Comments | Error> {
    const repository = getRepository(Projects_Comments);

    const projects = await repository.findOne(project_id && comments_id);

    if (!projects) {
      return new Error(`Projects_Comments does not exists`);
    }

    projects.project_id = project_id ? project_id : projects.project_id;
    projects.comments_id = comments_id ? comments_id : projects.comments_id;

    await repository.save(projects);

    return projects;
  }
}

export class DeleteProjects_CommentsService {
  async execute(project_id: string, comments_id: string) {
    const repository = getRepository(Projects_Comments);

    if (!(await repository.findOne(project_id && comments_id))) {
      return new Error("Projects_Comments does not exists");
    }

    await repository.delete(project_id && comments_id);
  }
}

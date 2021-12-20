import { Request, Response } from "express";
import {
  CreateProjectsService,
  DeleteProjectsService,
  GetProjectsService,
  UpdateProjectsService,
} from "../../core/services/ProjectsService";

export class CreateProjectsController {
  async handle(request: Request, response: Response) {
    const { title, description, Date, user_id } = request.body;

    const service = new CreateProjectsService();

    const result = await service.execute({ title, description, Date, user_id });

    if (result instanceof Error) {
      return response.status(400).json(result.message);
    }

    return response.json({ result });
  }
}

export class GetProjectsController {
  async handle(request: Request, response: Response) {
    const service = new GetProjectsService();

    const projects = await service.execute();

    return response.json(projects);
  }
}

export class UpdateProjectsController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const { title, description, Date, user_id } = request.body;

    const service = new UpdateProjectsService();

    const result = await service.execute({ id, title, description, Date, user_id });

    if (result instanceof Error) {
      return response.status(400).json(result.message);
    }
    return response.json(result);
  }
}

export class DeleteProjectsController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;
    const service = new DeleteProjectsService();

    const result = await service.execute(id);

    if (result instanceof Error) {
      return response.status(404).json(result.message);
    }

    return response.status(204).end();
  }
}

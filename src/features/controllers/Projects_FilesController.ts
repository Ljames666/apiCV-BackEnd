import { Request, Response } from "express";
import {
  CreateProjects_FilesService,
  GetProjects_FilesService,
} from "../../core/services/Projects_FilesService";

export class CreateProjects_FilesController {
  async handle(request: Request, response: Response) {
    const { project_id, file_id } = request.body;

    const service = new CreateProjects_FilesService();

    const result = await service.execute({ project_id, file_id });

    if (result instanceof Error) {
      return response.status(400).json(result.message);
    }

    return response.json({ result });
  }
}

export class GetProjects_FilesController {
  async handle(request: Request, response: Response) {
    const service = new GetProjects_FilesService();

    const projects_Files = await service.execute();

    return response.json(projects_Files);
  }
}

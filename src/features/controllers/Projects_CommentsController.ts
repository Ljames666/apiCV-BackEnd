import { Request, Response } from "express";
import {
  CreateProjects_CommentsService,
  GetProjects_CommentsService,
} from "../../core/services/Projects_CommentsService";

export class CreateProjects_CommentsController {
  async handle(request: Request, response: Response) {
    const { project_id, comments_id } = request.body;

    const service = new CreateProjects_CommentsService();

    const result = await service.execute({ project_id, comments_id });

    if (result instanceof Error) {
      return response.status(400).json(result.message);
    }

    return response.json({ result });
  }
}

export class GetProjects_CommentsController {
  async handle(request: Request, response: Response) {
    const service = new GetProjects_CommentsService();

    const projects_Comments = await service.execute();

    return response.json(projects_Comments);
  }
}

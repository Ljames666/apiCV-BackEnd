import { Request, Response } from "express";
import {
  CreateCommentsService,
  DeleteCommentsService,
  GetCommentsService,
  UpdateCommentsService,
} from "../../core/services/CommentsService";

export class CreateCommentsController {
  async handle(request: Request, response: Response) {
    const { name_user, message, user_id } = request.body;

    const service = new CreateCommentsService();

    const result = await service.execute({ name_user, message, user_id });

    if (result instanceof Error) {
      return response.status(400).json(result.message);
    }

    return response.json({ result });
  }
}

export class GetCommentsController {
  async handle(request: Request, response: Response) {
    const service = new GetCommentsService();

    const comments = await service.execute();

    return response.json(comments);
  }
}

export class UpdateCommentsController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const { name_user, message, user_id } = request.body;

    const service = new UpdateCommentsService();

    const result = await service.execute({ id, name_user, message, user_id });

    if (result instanceof Error) {
      return response.status(400).json(result.message);
    }
    return response.json(result);
  }
}

export class DeleteCommentsController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;
    const service = new DeleteCommentsService();

    const result = await service.execute(id);

    if (result instanceof Error) {
      return response.status(404).json(result.message);
    }

    return response.status(204).end();
  }
}

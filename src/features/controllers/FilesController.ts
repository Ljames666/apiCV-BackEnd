import { Request, Response } from "express";
import {
  CreateFilesService,
  DeleteFilesService,
  GetFilesService,
  UpdateFilesService,
} from "../../core/services/FilesService";

export class CreateFilesController {
  async handle(request: Request, response: Response) {
    const { title, description, type } = request.body;

    const service = new CreateFilesService();

    const result = await service.execute({ title, description, type });

    if (result instanceof Error) {
      return response.status(400).json(result.message);
    }

    return response.json({ result });
  }
}

export class GetFilesController {
  async handle(request: Request, response: Response) {
    const service = new GetFilesService();

    const files = await service.execute();

    return response.json(files);
  }
}

export class UpdateFilesController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const { title, description, type } = request.body;

    const service = new UpdateFilesService();

    const result = await service.execute({ id, title, description, type });

    if (result instanceof Error) {
      return response.status(400).json(result.message);
    }
    return response.json(result);
  }
}

export class DeleteFilesController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;
    const service = new DeleteFilesService();

    const result = await service.execute(id);

    if (result instanceof Error) {
      return response.status(404).json(result.message);
    }

    return response.status(204).end();
  }
}

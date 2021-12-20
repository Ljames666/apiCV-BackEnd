import { Request, Response } from "express";
import {
  CreateLanguagesService,
  DeleteLanguagesService,
  GetLanguagesService,
  UpdateLanguagesService,
} from "../../core/services/LanguagesService";

export class CreateLanguagesController {
  async handle(request: Request, response: Response) {
    const { name, level, description, user_id } = request.body;

    const service = new CreateLanguagesService();

    const result = await service.execute({ name, level, description, user_id });

    if (result instanceof Error) {
      return response.status(400).json(result.message);
    }

    return response.json({ result });
  }
}

export class GetLanguagesController {
  async handle(request: Request, response: Response) {
    const service = new GetLanguagesService();

    const languages = await service.execute();

    return response.json(languages);
  }
}

export class UpdateLanguagesController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const { name, level, description, user_id } = request.body;

    const service = new UpdateLanguagesService();

    const result = await service.execute({ id, name, level, description, user_id });

    if (result instanceof Error) {
      return response.status(400).json(result.message);
    }
    return response.json(result);
  }
}

export class DeleteLanguagesController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;
    const service = new DeleteLanguagesService();

    const result = await service.execute(id);

    if (result instanceof Error) {
      return response.status(404).json(result.message);
    }

    return response.status(204).end();
  }
}

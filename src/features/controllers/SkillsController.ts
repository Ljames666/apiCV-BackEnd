import { Request, Response } from "express";
import {
  CreateSkillsService,
  DeleteSkillsService,
  GetSkillsService,
  UpdateSkillsService,
} from "../../core/services/SkillsService";

export class CreateSkillsController {
  async handle(request: Request, response: Response) {
    const { title, description, user_id } = request.body;

    const service = new CreateSkillsService();

    const result = await service.execute({ title, description, user_id });

    if (result instanceof Error) {
      return response.status(400).json(result.message);
    }

    return response.json({ result });
  }
}

export class GetSkillsController {
  async handle(request: Request, response: Response) {
    const service = new GetSkillsService();

    const skills = await service.execute();

    return response.json(skills);
  }
}

export class UpdateSkillsController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const { title, description, user_id } = request.body;

    const service = new UpdateSkillsService();

    const result = await service.execute({ id, title, description, user_id });

    if (result instanceof Error) {
      return response.status(400).json(result.message);
    }
    return response.json(result);
  }
}

export class DeleteSkillsController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;
    const service = new DeleteSkillsService();

    const result = await service.execute(id);

    if (result instanceof Error) {
      return response.status(404).json(result.message);
    }

    return response.status(204).end();
  }
}

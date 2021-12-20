import { Request, Response } from "express";
import {
  CreateSkills_FilesService,
  GetSkills_FilesService,
} from "../../core/services/Skills_FilesService";

export class CreateSkills_FilesController {
  async handle(request: Request, response: Response) {
    const { skill_id, file_id } = request.body;

    const service = new CreateSkills_FilesService();

    const result = await service.execute({ skill_id, file_id });

    if (result instanceof Error) {
      return response.status(400).json(result.message);
    }

    return response.json({ result });
  }
}

export class GetSkills_FilesController {
  async handle(request: Request, response: Response) {
    const service = new GetSkills_FilesService();

    const skills_Files = await service.execute();

    return response.json(skills_Files);
  }
}

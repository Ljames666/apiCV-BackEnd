import { Request, Response } from "express";
import {
  CreateSkills_CommentsService,
  GetSkills_CommentsService,
} from "../../core/services/Skills_CommentsService";

export class CreateSkills_CommentsController {
  async handle(request: Request, response: Response) {
    const { skill_id, comments_id } = request.body;

    const service = new CreateSkills_CommentsService();

    const result = await service.execute({ skill_id, comments_id });

    if (result instanceof Error) {
      return response.status(400).json(result.message);
    }

    return response.json({ result });
  }
}

export class GetSkills_CommentsController {
  async handle(request: Request, response: Response) {
    const service = new GetSkills_CommentsService();

    const skills_Comments = await service.execute();

    return response.json(skills_Comments);
  }
}

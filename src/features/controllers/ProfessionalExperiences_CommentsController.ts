import { Request, Response } from "express";
import {
  CreateProfessionalExperiences_CommentsService,
  GetProfessionalExperiences_CommentsService,
} from "../../core/services/ProfessionalExperiences_CommentsService";

export class CreateProfessionalExperiences_CommentsController {
  async handle(request: Request, response: Response) {
    const { proEx_id, comments_id } = request.body;

    const service = new CreateProfessionalExperiences_CommentsService();

    const result = await service.execute({ proEx_id, comments_id });

    if (result instanceof Error) {
      return response.status(400).json(result.message);
    }

    return response.json({ result });
  }
}

export class GetProfessionalExperiences_CommentsController {
  async handle(request: Request, response: Response) {
    const service = new GetProfessionalExperiences_CommentsService();

    const professionalExperiences_Comments = await service.execute();

    return response.json(professionalExperiences_Comments);
  }
}

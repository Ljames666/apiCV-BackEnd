import { Request, Response } from "express";
import {
  CreateEducationAndCertifications_CommentsService,
  GetEducationAndCertifications_CommentsService,
} from "../../core/services/EducationAndCertifications_CommentsService";

export class CreateEducationAndCertifications_CommentsController {
  async handle(request: Request, response: Response) {
    const { educationCt_id, comments_id } = request.body;

    const service = new CreateEducationAndCertifications_CommentsService();

    const result = await service.execute({ educationCt_id, comments_id });

    if (result instanceof Error) {
      return response.status(400).json(result.message);
    }

    return response.json({ result });
  }
}

export class GetEducationAndCertifications_CommentsController {
  async handle(request: Request, response: Response) {
    const service = new GetEducationAndCertifications_CommentsService();

    const educationAndCertifications_Comments = await service.execute();

    return response.json(educationAndCertifications_Comments);
  }
}

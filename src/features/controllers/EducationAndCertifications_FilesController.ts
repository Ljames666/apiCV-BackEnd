import { Request, Response } from "express";
import {
  CreateEducationAndCertifications_FilesService,
  GetEducationAndCertifications_FilesService,
} from "../../core/services/EducationAndCertifications_FilesService";

export class CreateEducationAndCertifications_FilesController {
  async handle(request: Request, response: Response) {
    const { educationCt_id, file_id } = request.body;

    const service = new CreateEducationAndCertifications_FilesService();

    const result = await service.execute({ educationCt_id, file_id });

    if (result instanceof Error) {
      return response.status(400).json(result.message);
    }

    return response.json({ result });
  }
}

export class GetEducationAndCertifications_FilesController {
  async handle(request: Request, response: Response) {
    const service = new GetEducationAndCertifications_FilesService();

    const educationAndCertifications_Files = await service.execute();

    return response.json(educationAndCertifications_Files);
  }
}

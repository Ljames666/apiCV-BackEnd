import { Request, Response } from "express";
import {
  CreateProfessionalExperiences_FilesService,
  GetProfessionalExperiences_FilesService,
} from "../../core/services/ProfessionalExperiences_FilesService";

export class CreateProfessionalExperiences_FilesController {
  async handle(request: Request, response: Response) {
    const { proEx_id, file_id } = request.body;

    const service = new CreateProfessionalExperiences_FilesService();

    const result = await service.execute({ proEx_id, file_id });

    if (result instanceof Error) {
      return response.status(400).json(result.message);
    }

    return response.json({ result });
  }
}

export class GetProfessionalExperiences_FilesController {
  async handle(request: Request, response: Response) {
    const service = new GetProfessionalExperiences_FilesService();

    const professionalExperiences_Files = await service.execute();

    return response.json(professionalExperiences_Files);
  }
}

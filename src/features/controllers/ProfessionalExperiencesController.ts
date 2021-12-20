import { Request, Response } from "express";
import {
  CreateProfessionalExperiencesService,
  DeleteProfessionalExperiencesService,
  GetProfessionalExperiencesService,
  UpdateProfessionalExperiencesService,
} from "../../core/services/ProfessionalExperiencesService";

export class CreateProfessionalExperiencesController {
  async handle(request: Request, response: Response) {
    const { company, position, description, city, country, Date, user_id } = request.body;

    const service = new CreateProfessionalExperiencesService();

    const result = await service.execute({
      company,
      position,
      description,
      city,
      country,
      Date,
      user_id,
    });

    if (result instanceof Error) {
      return response.status(400).json(result.message);
    }

    return response.json({ result });
  }
}

export class GetProfessionalExperiencesController {
  async handle(request: Request, response: Response) {
    const service = new GetProfessionalExperiencesService();

    const ProfessionalExperiences = await service.execute();

    return response.json(ProfessionalExperiences);
  }
}

export class UpdateProfessionalExperiencesController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const { company, position, city, country, description, Date, user_id } = request.body;

    const service = new UpdateProfessionalExperiencesService();

    const result = await service.execute({
      id,
      company,
      position,
      description,
      city,
      country,
      Date,
      user_id,
    });

    if (result instanceof Error) {
      return response.status(400).json(result.message);
    }
    return response.json(result);
  }
}

export class DeleteProfessionalExperiencesController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;
    const service = new DeleteProfessionalExperiencesService();

    const result = await service.execute(id);

    if (result instanceof Error) {
      return response.status(404).json(result.message);
    }

    return response.status(204).end();
  }
}

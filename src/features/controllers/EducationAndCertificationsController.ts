import { Request, Response } from "express";
import {
  CreateEducationAndCertificationsService,
  DeleteEducationAndCertificationsService,
  GetEducationAndCertificationsService,
  UpdateEducationAndCertificationsService,
} from "../../core/services/EducationAndCertificationsService";

export class CreateEducationAndCertificationsController {
  async handle(request: Request, response: Response) {
    const { title, institute, city, country, description, Date, user_id } = request.body;

    const service = new CreateEducationAndCertificationsService();

    const result = await service.execute({
      title,
      institute,
      city,
      country,
      description,
      Date,
      user_id,
    });

    if (result instanceof Error) {
      return response.status(400).json(result.message);
    }

    return response.json({ result });
  }
}

export class GetEducationAndCertificationsController {
  async handle(request: Request, response: Response) {
    const service = new GetEducationAndCertificationsService();

    const educationAndCertifications = await service.execute();

    return response.json(educationAndCertifications);
  }
}

export class UpdateEducationAndCertificationsController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const { title, institute, city, country, description, Date, user_id } = request.body;

    const service = new UpdateEducationAndCertificationsService();

    const result = await service.execute({
      id,
      title,
      institute,
      city,
      country,
      description,
      Date,
      user_id,
    });

    if (result instanceof Error) {
      return response.status(400).json(result.message);
    }
    return response.json(result);
  }
}

export class DeleteEducationAndCertificationsController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;
    const service = new DeleteEducationAndCertificationsService();

    const result = await service.execute(id);

    if (result instanceof Error) {
      return response.status(404).json(result.message);
    }

    return response.status(204).end();
  }
}

import { Request, Response } from "express";
import {
  CreateSocialNetworksService,
  DeleteSocialNetworksService,
  GetSocialNetworksService,
  UpdateSocialNetworksService,
} from "../../core/services/SocialNetworksService";

export class CreateSocialNetworksController {
  async handle(request: Request, response: Response) {
    const { name, url, icon, user_id } = request.body;

    const service = new CreateSocialNetworksService();

    const result = await service.execute({ name, url, icon, user_id });

    if (result instanceof Error) {
      return response.status(400).json(result.message);
    }

    return response.json({ result });
  }
}

export class GetSocialNetworksController {
  async handle(request: Request, response: Response) {
    const service = new GetSocialNetworksService();

    const socialNetworks = await service.execute();

    return response.json(socialNetworks);
  }
}

export class UpdateSocialNetworksController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const { name, url, icon, user_id } = request.body;

    const service = new UpdateSocialNetworksService();

    const result = await service.execute({ id, name, url, icon, user_id });

    if (result instanceof Error) {
      return response.status(400).json(result.message);
    }
    return response.json(result);
  }
}

export class DeleteSocialNetworksController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;
    const service = new DeleteSocialNetworksService();

    const result = await service.execute(id);

    if (result instanceof Error) {
      return response.status(404).json(result.message);
    }

    return response.status(204).end();
  }
}

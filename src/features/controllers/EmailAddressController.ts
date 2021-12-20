import { Request, Response } from "express";
import {
  CreateEmailAddressService,
  DeleteEmailAddressService,
  GetEmailAddressService,
  UpdateEmailAddressService,
} from "../../core/services/EmailAddressService";

export class CreateEmailAddressController {
  async handle(request: Request, response: Response) {
    const { type, email, user_id } = request.body;

    const service = new CreateEmailAddressService();

    const result = await service.execute({ type, email, user_id });

    if (result instanceof Error) {
      return response.status(400).json(result.message);
    }

    return response.json({ result });
  }
}

export class GetEmailAddressController {
  async handle(request: Request, response: Response) {
    const service = new GetEmailAddressService();

    const emailAddress = await service.execute();

    return response.json(emailAddress);
  }
}

export class UpdateEmailAddressController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const { type, email, user_id } = request.body;

    const service = new UpdateEmailAddressService();

    const result = await service.execute({ id, type, email, user_id });

    if (result instanceof Error) {
      return response.status(400).json(result.message);
    }
    return response.json(result);
  }
}

export class DeleteEmailAddressController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;
    const service = new DeleteEmailAddressService();

    const result = await service.execute(id);

    if (result instanceof Error) {
      return response.status(404).json(result.message);
    }

    return response.status(204).end();
  }
}

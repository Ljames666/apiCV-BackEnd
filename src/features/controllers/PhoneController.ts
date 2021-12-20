import { Request, Response } from "express";
import {
  CreatePhoneService,
  DeletePhoneService,
  GetPhoneService,
  UpdatePhoneService,
} from "../../core/services/PhoneService";

export class CreatePhoneController {
  async handle(request: Request, response: Response) {
    const { type, phoneNumber, user_id } = request.body;

    const service = new CreatePhoneService();

    const result = await service.execute({ type, phoneNumber, user_id });

    if (result instanceof Error) {
      return response.status(400).json(result.message);
    }

    return response.json({ result });
  }
}

export class GetPhoneController {
  async handle(request: Request, response: Response) {
    const service = new GetPhoneService();

    const phone = await service.execute();

    return response.json(phone);
  }
}

export class UpdatePhoneController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const { type, phoneNumber, user_id } = request.body;

    const service = new UpdatePhoneService();

    const result = await service.execute({ id, type, phoneNumber, user_id });

    if (result instanceof Error) {
      return response.status(400).json(result.message);
    }
    return response.json(result);
  }
}

export class DeletePhoneController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;
    const service = new DeletePhoneService();

    const result = await service.execute(id);

    if (result instanceof Error) {
      return response.status(404).json(result.message);
    }

    return response.status(204).end();
  }
}

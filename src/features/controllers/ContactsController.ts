import { Request, Response } from "express";
import {
  CreateContactsService,
  DeleteContactsService,
  GetContactsService,
  UpdateContactsService,
} from "../../core/services/ContactsService";

export class CreateContactsController {
  async handle(request: Request, response: Response) {
    const { name, email, phone, message, user_id } = request.body;

    const service = new CreateContactsService();

    const result = await service.execute({ name, email, phone, message, user_id });

    if (result instanceof Error) {
      return response.status(400).json(result.message);
    }

    return response.json({ result });
  }
}

export class GetContactsController {
  async handle(request: Request, response: Response) {
    const service = new GetContactsService();

    const contacts = await service.execute();

    return response.json(contacts);
  }
}

export class UpdateContactsController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const { name, email, phone, message, user_id } = request.body;

    const service = new UpdateContactsService();

    const result = await service.execute({ id, name, email, phone, message, user_id });

    if (result instanceof Error) {
      return response.status(400).json(result.message);
    }
    return response.json(result);
  }
}

export class DeleteContactsController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;
    const service = new DeleteContactsService();

    const result = await service.execute(id);

    if (result instanceof Error) {
      return response.status(404).json(result.message);
    }

    return response.status(204).end();
  }
}

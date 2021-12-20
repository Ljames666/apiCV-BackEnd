import { Request, Response } from "express";
import {
  CreateAddressService,
  DeleteAddressService,
  GetAddressService,
  UpdateAddressService,
} from "../../core/services/AddressService";

export class CreateAddressController {
  async handle(request: Request, response: Response) {
    const { street, number, city, state, country, user_id } = request.body;

    const service = new CreateAddressService();

    const result = await service.execute({ street, number, city, state, country, user_id });

    if (result instanceof Error) {
      return response.status(400).json(result.message);
    }

    return response.json({ result });
  }
}

export class GetAddressController {
  async handle(request: Request, response: Response) {
    const service = new GetAddressService();

    const address = await service.execute();

    return response.json(address);
  }
}

export class UpdateAddressController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const { street, number, city, state, country, user_id } = request.body;

    const service = new UpdateAddressService();

    const result = await service.execute({ id, street, number, city, state, country, user_id });

    if (result instanceof Error) {
      return response.status(400).json(result.message);
    }
    return response.json(result);
  }
}

export class DeleteAddressController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;
    const service = new DeleteAddressService();

    const result = await service.execute(id);

    if (result instanceof Error) {
      return response.status(404).json(result.message);
    }

    return response.status(204).end();
  }
}

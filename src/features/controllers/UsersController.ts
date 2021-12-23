import { Request, Response } from "express";
import {
  CreateUsersService,
  DeleteUsersService,
  GetIdUsersService,
  GetUsersService,
  UpdateUsersService,
} from "../../core/services/UsersServices";

export class CreateUsersController {
  async handle(request: Request, response: Response) {
    const { name, title, abstract } = request.body;

    const service = new CreateUsersService();

    const result = await service.execute({ name, title, abstract });

    if (result instanceof Error) {
      return response.status(400).json(result.message);
    }

    return response.json({ result });
  }
}

export class GetUsersController {
  async handle(request: Request, response: Response) {
    const service = new GetUsersService();

    const users = await service.execute();

    return response.json(users);
  }
}
export class GetIdUsersController {
  async handle(request: Request, response: Response) {
    const service = new GetIdUsersService();

    const users = await service.execute();

    return response.json(users);
  }
}

export class UpdateUsersController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const { name, title, abstract } = request.body;

    const service = new UpdateUsersService();

    const result = await service.execute({ id, name, title, abstract });

    if (result instanceof Error) {
      return response.status(400).json(result.message);
    }
    return response.json(result);
  }
}

export class DeleteUsersController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;
    const service = new DeleteUsersService();

    const result = await service.execute(id);

    if (result instanceof Error) {
      return response.status(404).json(result.message);
    }

    return response.status(204).end();
  }
}

import { getRepository } from "typeorm";
import { Comments } from "../models/Comments";

type CommentsRequest = {
  name_user: string;
  message: string;
  user_id: string;
};
type UpdateCommentsRequest = {
  id: string;
  name_user: string;
  message: string;
  user_id: string;
};

export class CreateCommentsService {
  async execute({ name_user, message, user_id }: CommentsRequest): Promise<Comments | Error> {
    const repository = getRepository(Comments);

    if (await repository.findOne({ name_user })) {
      return new Error(`Comments already exists`);
    }

    const comments = repository.create({ name_user, message, user_id });

    await repository.save(comments);

    return comments;
  }
}

export class GetCommentsService {
  async execute() {
    const repository = getRepository(Comments);

    const comments = await repository.find();

    return comments;
  }
}

export class UpdateCommentsService {
  async execute({
    id,
    name_user,
    message,
    user_id,
  }: UpdateCommentsRequest): Promise<Comments | Error> {
    const repository = getRepository(Comments);

    const comments = await repository.findOne(id);

    if (!comments) {
      return new Error(`Comments does not exists`);
    }

    comments.name_user = name_user ? name_user : comments.name_user;
    comments.message = message ? message : comments.message;
    comments.user_id = user_id ? user_id : comments.user_id;

    await repository.save(comments);

    return comments;
  }
}

export class DeleteCommentsService {
  async execute(id: string) {
    const repository = getRepository(Comments);

    if (!(await repository.findOne(id))) {
      return new Error("Comments does not exists");
    }

    await repository.delete(id);
  }
}

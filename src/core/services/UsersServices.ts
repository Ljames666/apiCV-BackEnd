import { getRepository } from "typeorm";
import { Users } from "../models/Users";

type UsersRequest = {
  name: string;
  title: string;
  abstract: string;
};
type UpdateUsersRequest = {
  id: string;
  name: string;
  title: string;
  abstract: string;
};

export class CreateUsersService {
  async execute({ name, title, abstract }: UsersRequest): Promise<Users | Error> {
    const repository = getRepository(Users);

    if (await repository.findOne({ name })) {
      return new Error(`User already exists`);
    }

    const user = repository.create({ name, title, abstract });

    await repository.save(user);

    return user;
  }
}

export class GetUsersService {
  async execute() {
    const repository = getRepository(Users);

    const users = await repository.find();

    return users;
  }
}
export class GetIdUsersService {
  async execute() {
    const repository = getRepository(Users);

    const user = await repository.find({
      relations: [
        "address",
        "emailAddress",
        "phone",
        "socialNetworks",
        "educationAndCertifications",
        "professionalExperiences",
        "projects",
        "skills",
        "languages",
        "contacts",
        "comments",
      ],
    });

    return user;
  }
}

export class UpdateUsersService {
  async execute({ id, name, title, abstract }: UpdateUsersRequest): Promise<Users | Error> {
    const repository = getRepository(Users);

    const user = await repository.findOne(id);

    if (!user) {
      return new Error(`user does not exist`);
    }

    user.name = name ? name : user.name;
    user.title = title ? title : user.title;
    user.abstract = abstract ? abstract : user.abstract;

    await repository.save(user);

    return user;
  }
}

export class DeleteUsersService {
  async execute(id: string) {
    const repository = getRepository(Users);

    if (!(await repository.findOne(id))) {
      return new Error("User does not exist");
    }

    await repository.delete(id);
  }
}

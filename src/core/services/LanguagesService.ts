import { getRepository } from "typeorm";
import { Languages } from "../models/Languages";

import { Users } from "../models/Users";

type LanguagesRequest = {
  name: string;
  level: string;
  description: string;
  user_id: string;
};
type UpdateLanguagesRequest = {
  id: string;
  name: string;
  level: string;
  description: string;
  user_id: string;
};

export class CreateLanguagesService {
  async execute({
    name,
    level,
    description,
    user_id,
  }: LanguagesRequest): Promise<Languages | Error> {
    const repository = getRepository(Languages);

    const repoUser = getRepository(Users);

    if (!(await repoUser.findOne(user_id))) {
      return new Error(`User does not exists!`);
    }

    const languages = repository.create({
      name,
      level,
      description,
      user_id,
    });

    await repository.save(languages);

    return languages;
  }
}

export class GetLanguagesService {
  async execute() {
    const repository = getRepository(Languages);

    const languages = await repository.find({ relations: ["users"] });

    return languages;
  }
}

export class UpdateLanguagesService {
  async execute({
    id,
    name,
    level,
    description,
    user_id,
  }: UpdateLanguagesRequest): Promise<Languages | Error> {
    const repository = getRepository(Languages);

    const languages = await repository.findOne(id);

    if (!languages) {
      return new Error(`Languages does not exists`);
    }

    languages.name = name ? name : languages.name;
    languages.level = level ? level : languages.level;
    languages.description = description ? description : languages.description;
    languages.user_id = user_id ? user_id : languages.user_id;

    await repository.save(languages);

    return languages;
  }
}

export class DeleteLanguagesService {
  async execute(id: string) {
    const repository = getRepository(Languages);

    if (!(await repository.findOne(id))) {
      return new Error("Languages does not exists");
    }

    await repository.delete(id);
  }
}

import { getRepository } from "typeorm";
import { Skills } from "../models/Skills";

import { Users } from "../models/Users";

type SkillsRequest = {
  title: string;
  description: string;
  user_id: string;
};
type UpdateSkillsRequest = {
  id: string;
  title: string;
  description: string;
  user_id: string;
};

export class CreateSkillsService {
  async execute({ title, description, user_id }: SkillsRequest): Promise<Skills | Error> {
    const repository = getRepository(Skills);

    const repoUser = getRepository(Users);

    if (!(await repoUser.findOne(user_id))) {
      return new Error(`User does not exists!`);
    }

    const skills = repository.create({
      title,
      description,
      user_id,
    });

    await repository.save(skills);

    return skills;
  }
}

export class GetSkillsService {
  async execute() {
    const repository = getRepository(Skills);

    const skills = await repository.find({ relations: ["users"] });

    return skills;
  }
}

export class UpdateSkillsService {
  async execute({ id, title, description, user_id }: UpdateSkillsRequest): Promise<Skills | Error> {
    const repository = getRepository(Skills);

    const skills = await repository.findOne(id);

    if (!skills) {
      return new Error(`Skill does not exists`);
    }

    skills.title = title ? title : skills.title;
    skills.description = description ? description : skills.description;
    skills.user_id = user_id ? user_id : skills.user_id;

    await repository.save(skills);

    return skills;
  }
}

export class DeleteSkillsService {
  async execute(id: string) {
    const repository = getRepository(Skills);

    if (!(await repository.findOne(id))) {
      return new Error("Skills does not exists");
    }

    await repository.delete(id);
  }
}

import { getRepository } from "typeorm";
import { Files } from "../models/Files";
import { Skills } from "../models/Skills";
import { Skills_Files } from "../models/Skills_Files";

type Skills_FilesRequest = {
  skill_id: string;
  file_id: string;
};

export class CreateSkills_FilesService {
  async execute({ skill_id, file_id }: Skills_FilesRequest): Promise<Skills_Files | Error> {
    const repository = getRepository(Skills_Files);

    const repoSkills = getRepository(Skills);
    const repoFiles = getRepository(Files);

    if (!(await repoSkills.findOne(skill_id)) || !(await repoFiles.findOne(file_id))) {
      return new Error(` not exists!`);
    }

    const skills_Files = repository.create({
      skill_id,
      file_id,
    });

    await repository.save(skills_Files);

    return skills_Files;
  }
}

export class GetSkills_FilesService {
  async execute() {
    const repository = getRepository(Skills_Files);

    const skills_Files = await repository.find({
      relations: ["skills", "files"],
    });

    return skills_Files;
  }
}

export class UpdateSkills_FilesService {
  async execute({ skill_id, file_id }: Skills_FilesRequest): Promise<Skills_Files | Error> {
    const repository = getRepository(Skills_Files);

    const skills = await repository.findOne(skill_id && file_id);

    if (!skills) {
      return new Error(`Skills_Files does not exists`);
    }

    skills.skill_id = skill_id ? skill_id : skills.skill_id;
    skills.file_id = file_id ? file_id : skills.file_id;

    await repository.save(skills);

    return skills;
  }
}

export class DeleteSkills_FilesService {
  async execute(skill_id: string, file_id: string) {
    const repository = getRepository(Skills_Files);

    if (!(await repository.findOne(skill_id && file_id))) {
      return new Error("Skills_Files does not exists");
    }

    await repository.delete(skill_id && file_id);
  }
}

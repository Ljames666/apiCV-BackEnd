import { getRepository } from "typeorm";
import { Comments } from "../models/Comments";
import { Skills } from "../models/Skills";
import { Skills_Comments } from "../models/Skills_Comments";

type Skills_CommentsRequest = {
  skill_id: string;
  comments_id: string;
};

export class CreateSkills_CommentsService {
  async execute({
    skill_id,
    comments_id,
  }: Skills_CommentsRequest): Promise<Skills_Comments | Error> {
    const repository = getRepository(Skills_Comments);

    const repoSkills = getRepository(Skills);
    const repoComments = getRepository(Comments);

    if (!(await repoSkills.findOne(skill_id)) || !(await repoComments.findOne(comments_id))) {
      return new Error(`not exists!`);
    }

    const skills_Comments = repository.create({
      skill_id,
      comments_id,
    });

    await repository.save(skills_Comments);

    return skills_Comments;
  }
}

export class GetSkills_CommentsService {
  async execute() {
    const repository = getRepository(Skills_Comments);

    const skills_Comments = await repository.find({
      relations: ["skills", "comments"],
    });

    return skills_Comments;
  }
}

export class UpdateSkills_CommentsService {
  async execute({
    skill_id,
    comments_id,
  }: Skills_CommentsRequest): Promise<Skills_Comments | Error> {
    const repository = getRepository(Skills_Comments);

    const skills = await repository.findOne(skill_id && comments_id);

    if (!skills) {
      return new Error(`Skills_Comments does not exists`);
    }

    skills.skill_id = skill_id ? skill_id : skills.skill_id;
    skills.comments_id = comments_id ? comments_id : skills.comments_id;

    await repository.save(skills);

    return skills;
  }
}

export class DeleteSkills_CommentsService {
  async execute(skill_id: string, comments_id: string) {
    const repository = getRepository(Skills_Comments);

    if (!(await repository.findOne(skill_id && comments_id))) {
      return new Error("Skills_Comments does not exists");
    }

    await repository.delete(skill_id && comments_id);
  }
}

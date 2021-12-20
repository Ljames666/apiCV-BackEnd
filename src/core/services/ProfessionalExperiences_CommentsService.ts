import { getRepository } from "typeorm";
import { Comments } from "../models/Comments";
import { ProfessionalExperiences } from "../models/ProfessionalExperiences";
import { ProfessionalExperiences_Comments } from "../models/ProfessionalExperiences_Comments";

type ProfessionalExperiences_CommentsRequest = {
  proEx_id: string;
  comments_id: string;
};

export class CreateProfessionalExperiences_CommentsService {
  async execute({
    proEx_id,
    comments_id,
  }: ProfessionalExperiences_CommentsRequest): Promise<ProfessionalExperiences_Comments | Error> {
    const repository = getRepository(ProfessionalExperiences_Comments);

    const repoProfessionalExperiences = getRepository(ProfessionalExperiences);
    const repoComments = getRepository(Comments);

    if (
      !(await repoProfessionalExperiences.findOne(proEx_id)) ||
      !(await repoComments.findOne(comments_id))
    ) {
      return new Error(`not exists!`);
    }

    const professionalExperiences_Comments = repository.create({
      proEx_id,
      comments_id,
    });

    await repository.save(professionalExperiences_Comments);

    return professionalExperiences_Comments;
  }
}

export class GetProfessionalExperiences_CommentsService {
  async execute() {
    const repository = getRepository(ProfessionalExperiences_Comments);

    const professionalExperiences_Comments = await repository.find({
      relations: ["professionalExperiences", "comments"],
    });

    return professionalExperiences_Comments;
  }
}

export class UpdateProfessionalExperiences_CommentsService {
  async execute({
    proEx_id,
    comments_id,
  }: ProfessionalExperiences_CommentsRequest): Promise<ProfessionalExperiences_Comments | Error> {
    const repository = getRepository(ProfessionalExperiences_Comments);

    const professionalExperiences = await repository.findOne(proEx_id && comments_id);

    if (!professionalExperiences) {
      return new Error(`ProfessionalExperiences_Comments does not exists`);
    }

    professionalExperiences.proEx_id = proEx_id ? proEx_id : professionalExperiences.proEx_id;
    professionalExperiences.comments_id = comments_id
      ? comments_id
      : professionalExperiences.comments_id;

    await repository.save(professionalExperiences);

    return professionalExperiences;
  }
}

export class DeleteProfessionalExperiences_CommentsService {
  async execute(proEx_id: string, comments_id: string) {
    const repository = getRepository(ProfessionalExperiences_Comments);

    if (!(await repository.findOne(proEx_id && comments_id))) {
      return new Error("ProfessionalExperiences_Comments does not exists");
    }

    await repository.delete(proEx_id && comments_id);
  }
}

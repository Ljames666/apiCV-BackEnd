import { getRepository } from "typeorm";
import { Comments } from "../models/Comments";
import { EducationAndCertifications } from "../models/EducationAndCertifications";
import { EducationAndCertifications_Comments } from "../models/EducattionAndCertifications_Comments";

type EducationAndCertifications_CommentsRequest = {
  educationCt_id: string;
  comments_id: string;
};

export class CreateEducationAndCertifications_CommentsService {
  async execute({
    educationCt_id,
    comments_id,
  }: EducationAndCertifications_CommentsRequest): Promise<
    EducationAndCertifications_Comments | Error
  > {
    const repository = getRepository(EducationAndCertifications_Comments);

    const repoEducationAndCertifications = getRepository(EducationAndCertifications);
    const repoComments = getRepository(Comments);

    if (
      !(await repoEducationAndCertifications.findOne(educationCt_id)) ||
      !(await repoComments.findOne(comments_id))
    ) {
      return new Error(`not exists!`);
    }

    const educationAndCertifications_Comments = repository.create({
      educationCt_id,
      comments_id,
    });

    await repository.save(educationAndCertifications_Comments);

    return educationAndCertifications_Comments;
  }
}

export class GetEducationAndCertifications_CommentsService {
  async execute() {
    const repository = getRepository(EducationAndCertifications_Comments);

    const educationAndCertifications_Comments = await repository.find({
      relations: ["educationAndCertifications", "comments"],
    });

    return educationAndCertifications_Comments;
  }
}

export class UpdateEducationAndCertifications_CommentsService {
  async execute({
    educationCt_id,
    comments_id,
  }: EducationAndCertifications_CommentsRequest): Promise<
    EducationAndCertifications_Comments | Error
  > {
    const repository = getRepository(EducationAndCertifications_Comments);

    const education = await repository.findOne(educationCt_id && comments_id);

    if (!education) {
      return new Error(`EducationAndCertifications_Comments does not exists`);
    }

    education.educationCt_id = educationCt_id ? educationCt_id : education.educationCt_id;
    education.comments_id = comments_id ? comments_id : education.comments_id;

    await repository.save(education);

    return education;
  }
}

export class DeleteEducationAndCertifications_CommentsService {
  async execute(educationCt_id: string, comments_id: string) {
    const repository = getRepository(EducationAndCertifications_Comments);

    if (!(await repository.findOne(educationCt_id && comments_id))) {
      return new Error("EducationAndCertifications_Comments does not exists");
    }

    await repository.delete(educationCt_id && comments_id);
  }
}

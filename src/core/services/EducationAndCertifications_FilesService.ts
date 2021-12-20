import { getRepository } from "typeorm";
import { Files } from "../models/Files";
import { EducationAndCertifications } from "../models/EducationAndCertifications";
import { EducationAndCertifications_Files } from "../models/EducationAndCertifications_Files";

type EducationAndCertifications_FilesRequest = {
  educationCt_id: string;
  file_id: string;
};

export class CreateEducationAndCertifications_FilesService {
  async execute({
    educationCt_id,
    file_id,
  }: EducationAndCertifications_FilesRequest): Promise<EducationAndCertifications_Files | Error> {
    const repository = getRepository(EducationAndCertifications_Files);

    const repoEducationAndCertifications = getRepository(EducationAndCertifications);
    const repoFiles = getRepository(Files);

    if (
      !(await repoEducationAndCertifications.findOne(educationCt_id)) ||
      !(await repoFiles.findOne(file_id))
    ) {
      return new Error(` not exists!`);
    }

    const educationAndCertifications_Files = repository.create({
      educationCt_id,
      file_id,
    });

    await repository.save(educationAndCertifications_Files);

    return educationAndCertifications_Files;
  }
}

export class GetEducationAndCertifications_FilesService {
  async execute() {
    const repository = getRepository(EducationAndCertifications_Files);

    const educationAndCertifications_Files = await repository.find({
      relations: ["educationAndCertifications", "files"],
    });

    return educationAndCertifications_Files;
  }
}

export class UpdateEducationAndCertifications_FilesService {
  async execute({
    educationCt_id,
    file_id,
  }: EducationAndCertifications_FilesRequest): Promise<EducationAndCertifications_Files | Error> {
    const repository = getRepository(EducationAndCertifications_Files);

    const education = await repository.findOne(educationCt_id && file_id);

    if (!education) {
      return new Error(`EducationAndCertifications_Files does not exists`);
    }

    education.educationCt_id = educationCt_id ? educationCt_id : education.educationCt_id;
    education.file_id = file_id ? file_id : education.file_id;

    await repository.save(education);

    return education;
  }
}

export class DeleteEducationAndCertifications_FilesService {
  async execute(educationCt_id: string, file_id: string) {
    const repository = getRepository(EducationAndCertifications_Files);

    if (!(await repository.findOne(educationCt_id && file_id))) {
      return new Error("EducationAndCertifications_Files does not exists");
    }

    await repository.delete(educationCt_id && file_id);
  }
}

import { getRepository } from "typeorm";
import { Files } from "../models/Files";
import { ProfessionalExperiences } from "../models/ProfessionalExperiences";
import { ProfessionalExperiences_Files } from "../models/ProfessionalExperiences_Files";

type ProfessionalExperiences_FilesRequest = {
  proEx_id: string;
  file_id: string;
};

export class CreateProfessionalExperiences_FilesService {
  async execute({
    proEx_id,
    file_id,
  }: ProfessionalExperiences_FilesRequest): Promise<ProfessionalExperiences_Files | Error> {
    const repository = getRepository(ProfessionalExperiences_Files);

    const repoProfessionalExperiences = getRepository(ProfessionalExperiences);
    const repoFiles = getRepository(Files);

    if (
      !(await repoProfessionalExperiences.findOne(proEx_id)) ||
      !(await repoFiles.findOne(file_id))
    ) {
      return new Error(` not exists!`);
    }

    const professionalExperiences_Files = repository.create({
      proEx_id,
      file_id,
    });

    await repository.save(professionalExperiences_Files);

    return professionalExperiences_Files;
  }
}

export class GetProfessionalExperiences_FilesService {
  async execute() {
    const repository = getRepository(ProfessionalExperiences_Files);

    const professionalExperiences_Files = await repository.find({
      relations: ["professionalExperiences", "files"],
    });

    return professionalExperiences_Files;
  }
}

export class UpdateProfessionalExperiences_FilesService {
  async execute({
    proEx_id,
    file_id,
  }: ProfessionalExperiences_FilesRequest): Promise<ProfessionalExperiences_Files | Error> {
    const repository = getRepository(ProfessionalExperiences_Files);

    const professionalExperiences = await repository.findOne(proEx_id && file_id);

    if (!professionalExperiences) {
      return new Error(`ProfessionalExperiences_Files does not exists`);
    }

    professionalExperiences.proEx_id = proEx_id ? proEx_id : professionalExperiences.proEx_id;
    professionalExperiences.file_id = file_id ? file_id : professionalExperiences.file_id;

    await repository.save(professionalExperiences);

    return professionalExperiences;
  }
}

export class DeleteProfessionalExperiences_FilesService {
  async execute(proEx_id: string, file_id: string) {
    const repository = getRepository(ProfessionalExperiences_Files);

    if (!(await repository.findOne(proEx_id && file_id))) {
      return new Error("ProfessionalExperiences_Files does not exists");
    }

    await repository.delete(proEx_id && file_id);
  }
}

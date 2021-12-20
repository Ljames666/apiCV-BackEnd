import { getRepository } from "typeorm";
import { ProfessionalExperiences } from "../models/ProfessionalExperiences";

import { Users } from "../models/Users";

type ProfessionalExperiencesRequest = {
  company: string;
  position: string;
  description: string;
  city: string;
  country: string;
  Date: string;
  user_id: string;
};
type UpdateProfessionalExperiencesRequest = {
  id: string;
  company: string;
  position: string;
  description: string;
  city: string;
  country: string;
  Date: string;
  user_id: string;
};

export class CreateProfessionalExperiencesService {
  async execute({
    company,
    position,
    description,
    city,
    country,
    Date,
    user_id,
  }: ProfessionalExperiencesRequest): Promise<ProfessionalExperiences | Error> {
    const repository = getRepository(ProfessionalExperiences);

    const repoUser = getRepository(Users);

    if (!(await repoUser.findOne(user_id))) {
      return new Error(`User does not exists!`);
    }

    const professionalExperiences = repository.create({
      company,
      position,
      description,
      city,
      country,
      Date,
      user_id,
    });

    await repository.save(professionalExperiences);

    return professionalExperiences;
  }
}

export class GetProfessionalExperiencesService {
  async execute() {
    const repository = getRepository(ProfessionalExperiences);

    const professionalExperiences = await repository.find({ relations: ["users"] });

    return professionalExperiences;
  }
}

export class UpdateProfessionalExperiencesService {
  async execute({
    id,
    company,
    position,
    description,
    city,
    country,
    Date,
    user_id,
  }: UpdateProfessionalExperiencesRequest): Promise<ProfessionalExperiences | Error> {
    const repository = getRepository(ProfessionalExperiences);

    const professionalExperiences = await repository.findOne(id);

    if (!professionalExperiences) {
      return new Error(`ProfessionalExperiences does not exists`);
    }

    professionalExperiences.company = company ? company : professionalExperiences.company;
    professionalExperiences.position = position ? position : professionalExperiences.position;
    professionalExperiences.description = description
      ? description
      : professionalExperiences.description;
    professionalExperiences.city = city ? city : professionalExperiences.city;
    professionalExperiences.country = country ? country : professionalExperiences.country;
    professionalExperiences.Date = Date ? Date : professionalExperiences.Date;
    professionalExperiences.user_id = user_id ? user_id : professionalExperiences.user_id;

    await repository.save(professionalExperiences);

    return professionalExperiences;
  }
}

export class DeleteProfessionalExperiencesService {
  async execute(id: string) {
    const repository = getRepository(ProfessionalExperiences);

    if (!(await repository.findOne(id))) {
      return new Error("ProfessionalExperiences does not exists");
    }

    await repository.delete(id);
  }
}

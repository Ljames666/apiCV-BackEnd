import { getRepository } from "typeorm";
import { EducationAndCertifications } from "../models/EducationAndCertifications";

import { Users } from "../models/Users";

type EducationAndCertificationsRequest = {
  title: string;
  institute: string;
  city: string;
  country: string;
  description: string;
  Date: string;
  user_id: string;
};
type UpdateEducationAndCertificationsRequest = {
  id: string;
  title: string;
  institute: string;
  city: string;
  country: string;
  description: string;
  Date: string;
  user_id: string;
};

export class CreateEducationAndCertificationsService {
  async execute({
    title,
    institute,
    city,
    country,
    description,
    Date,
    user_id,
  }: EducationAndCertificationsRequest): Promise<EducationAndCertifications | Error> {
    const repository = getRepository(EducationAndCertifications);

    const repoUser = getRepository(Users);

    if (!(await repoUser.findOne(user_id))) {
      return new Error(`User does not exists!`);
    }

    const educationAndCertifications = repository.create({
      title,
      institute,
      city,
      country,
      description,
      Date,
      user_id,
    });

    await repository.save(educationAndCertifications);

    return educationAndCertifications;
  }
}

export class GetEducationAndCertificationsService {
  async execute() {
    const repository = getRepository(EducationAndCertifications);

    const educationAndCertifications = await repository.find({ relations: ["users"] });

    return educationAndCertifications;
  }
}

export class UpdateEducationAndCertificationsService {
  async execute({
    id,
    title,
    institute,
    city,
    country,
    description,
    Date,
    user_id,
  }: UpdateEducationAndCertificationsRequest): Promise<EducationAndCertifications | Error> {
    const repository = getRepository(EducationAndCertifications);

    const educationAndCertifications = await repository.findOne(id);

    if (!EducationAndCertifications) {
      return new Error(`EducationAndCertifications does not exists`);
    }

    educationAndCertifications.title = title ? title : educationAndCertifications.title;
    educationAndCertifications.institute = institute
      ? institute
      : educationAndCertifications.institute;
    educationAndCertifications.city = city ? city : educationAndCertifications.city;
    educationAndCertifications.country = country ? country : educationAndCertifications.country;
    educationAndCertifications.description = description
      ? description
      : educationAndCertifications.description;
    educationAndCertifications.Date = Date ? Date : educationAndCertifications.Date;
    educationAndCertifications.user_id = user_id ? user_id : educationAndCertifications.user_id;

    await repository.save(educationAndCertifications);

    return educationAndCertifications;
  }
}

export class DeleteEducationAndCertificationsService {
  async execute(id: string) {
    const repository = getRepository(EducationAndCertifications);

    if (!(await repository.findOne(id))) {
      return new Error("EducationAndCertifications does not exists");
    }

    await repository.delete(id);
  }
}

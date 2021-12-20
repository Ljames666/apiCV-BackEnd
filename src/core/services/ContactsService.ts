import { getRepository } from "typeorm";
import { Contacts } from "../models/Contacts";

import { Users } from "../models/Users";

type ContactsRequest = {
  name: string;
  email: string;
  phone: number;
  message: string;
  user_id: string;
};
type UpdateContactsRequest = {
  id: string;
  name: string;
  email: string;
  phone: number;
  message: string;
  user_id: string;
};

export class CreateContactsService {
  async execute({
    name,
    email,
    phone,
    message,
    user_id,
  }: ContactsRequest): Promise<Contacts | Error> {
    const repository = getRepository(Contacts);

    const repoUser = getRepository(Users);

    if (!(await repoUser.findOne(user_id))) {
      return new Error(`User does not exists!`);
    }

    const contacts = repository.create({
      name,
      email,
      phone,
      message,
      user_id,
    });

    await repository.save(contacts);

    return contacts;
  }
}

export class GetContactsService {
  async execute() {
    const repository = getRepository(Contacts);

    const contacts = await repository.find({ relations: ["users"] });

    return contacts;
  }
}

export class UpdateContactsService {
  async execute({
    id,
    name,
    email,
    phone,
    message,
    user_id,
  }: UpdateContactsRequest): Promise<Contacts | Error> {
    const repository = getRepository(Contacts);

    const contacts = await repository.findOne(id);

    if (!contacts) {
      return new Error(`Contacts does not exists`);
    }

    contacts.name = name ? name : contacts.name;
    contacts.email = email ? email : contacts.email;
    contacts.phone = phone ? phone : contacts.phone;
    contacts.message = message ? message : contacts.message;
    contacts.user_id = user_id ? user_id : contacts.user_id;

    await repository.save(contacts);

    return contacts;
  }
}

export class DeleteContactsService {
  async execute(id: string) {
    const repository = getRepository(Contacts);

    if (!(await repository.findOne(id))) {
      return new Error("Contacts does not exists");
    }

    await repository.delete(id);
  }
}

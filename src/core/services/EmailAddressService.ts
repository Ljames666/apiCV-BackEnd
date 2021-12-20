import { getRepository } from "typeorm";
import { EmailAddress } from "../models/EmailAddress";

import { Users } from "../models/Users";

type EmailAddressRequest = {
  type: string;
  email: string;
  user_id: string;
};
type UpdateEmailAddressRequest = {
  id: string;
  type: string;
  email: string;
  user_id: string;
};

export class CreateEmailAddressService {
  async execute({ type, email, user_id }: EmailAddressRequest): Promise<EmailAddress | Error> {
    const repository = getRepository(EmailAddress);

    const repoUser = getRepository(Users);

    if (!(await repoUser.findOne(user_id))) {
      return new Error(`User does not exists!`);
    }

    const emailAddress = repository.create({
      type,
      email,
      user_id,
    });

    await repository.save(emailAddress);

    return emailAddress;
  }
}

export class GetEmailAddressService {
  async execute() {
    const repository = getRepository(EmailAddress);

    const emailAddress = await repository.find({ relations: ["users"] });

    return emailAddress;
  }
}

export class UpdateEmailAddressService {
  async execute({
    id,
    type,
    email,
    user_id,
  }: UpdateEmailAddressRequest): Promise<EmailAddress | Error> {
    const repository = getRepository(EmailAddress);

    const emailAddress = await repository.findOne(id);

    if (!emailAddress) {
      return new Error(`EmailAddress does not exists`);
    }

    emailAddress.type = type ? type : emailAddress.type;
    emailAddress.email = email ? email : emailAddress.email;
    emailAddress.user_id = user_id ? user_id : emailAddress.user_id;

    await repository.save(emailAddress);

    return emailAddress;
  }
}

export class DeleteEmailAddressService {
  async execute(id: string) {
    const repository = getRepository(EmailAddress);

    if (!(await repository.findOne(id))) {
      return new Error("EmailAddress does not exists");
    }

    await repository.delete(id);
  }
}

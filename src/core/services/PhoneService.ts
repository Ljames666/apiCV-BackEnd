import { getRepository } from "typeorm";
import { Phone } from "../models/Phone";

import { Users } from "../models/Users";

type PhoneRequest = {
  type: string;
  phoneNumber: number;
  user_id: string;
};
type UpdatePhoneRequest = {
  id: string;
  type: string;
  phoneNumber: number;
  user_id: string;
};

export class CreatePhoneService {
  async execute({ type, phoneNumber, user_id }: PhoneRequest): Promise<Phone | Error> {
    const repository = getRepository(Phone);

    const repoUser = getRepository(Users);

    if (!(await repoUser.findOne(user_id))) {
      return new Error(`User does not exists!`);
    }

    const phone = repository.create({
      type,
      phoneNumber,
      user_id,
    });

    await repository.save(phone);

    return phone;
  }
}

export class GetPhoneService {
  async execute() {
    const repository = getRepository(Phone);

    const phone = await repository.find({ relations: ["users"] });

    return phone;
  }
}

export class UpdatePhoneService {
  async execute({ id, type, phoneNumber, user_id }: UpdatePhoneRequest): Promise<Phone | Error> {
    const repository = getRepository(Phone);

    const phone = await repository.findOne(id);

    if (!phone) {
      return new Error(`Phone does not exists`);
    }

    phone.type = type ? type : phone.type;
    phone.phoneNumber = phoneNumber ? phoneNumber : phone.phoneNumber;
    phone.user_id = user_id ? user_id : phone.user_id;

    await repository.save(phone);

    return phone;
  }
}

export class DeletePhoneService {
  async execute(id: string) {
    const repository = getRepository(Phone);

    if (!(await repository.findOne(id))) {
      return new Error("Phone does not exists");
    }

    await repository.delete(id);
  }
}

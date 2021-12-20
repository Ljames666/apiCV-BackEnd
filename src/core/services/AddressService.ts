import { getRepository } from "typeorm";
import { Address } from "../models/Address";
import { Users } from "../models/Users";

type AddressRequest = {
  street: string;
  number: number;
  city: string;
  state: string;
  country: string;
  user_id: string;
};
type UpdateAddressRequest = {
  id: string;
  street: string;
  number: number;
  city: string;
  state: string;
  country: string;
  user_id: string;
};

export class CreateAddressService {
  async execute({
    street,
    number,
    city,
    state,
    country,
    user_id,
  }: AddressRequest): Promise<Address | Error> {
    const repository = getRepository(Address);

    const repoUser = getRepository(Users);

    if (!(await repoUser.findOne(user_id))) {
      return new Error(`User does not exists!`);
    }

    const address = repository.create({ street, number, city, state, country, user_id });

    await repository.save(address);

    return address;
  }
}

export class GetAddressService {
  async execute() {
    const repository = getRepository(Address);

    const address = await repository.find({ relations: ["users"] });

    return address;
  }
}

export class UpdateAddressService {
  async execute({
    id,
    street,
    number,
    city,
    state,
    country,
    user_id,
  }: UpdateAddressRequest): Promise<Address | Error> {
    const repository = getRepository(Address);

    const address = await repository.findOne(id);

    if (!address) {
      return new Error(`Address does not exists`);
    }

    address.street = street ? street : address.street;
    address.number = number ? number : address.number;
    address.city = city ? city : address.city;
    address.state = state ? state : address.state;
    address.country = country ? country : address.country;
    address.user_id = user_id ? user_id : address.user_id;

    await repository.save(address);

    return address;
  }
}

export class DeleteAddressService {
  async execute(id: string) {
    const repository = getRepository(Address);

    if (!(await repository.findOne(id))) {
      return new Error("File does not exists");
    }

    await repository.delete(id);
  }
}

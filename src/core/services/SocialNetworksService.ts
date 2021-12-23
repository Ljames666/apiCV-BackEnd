import { getRepository } from "typeorm";
import { SocialNetworks } from "../models/SocialNetworks";

import { Users } from "../models/Users";

type SocialNetworksRequest = {
  name: string;
  url: string;
  icon: string;
  user_id: string;
};
type UpdateSocialNetworksRequest = {
  id: string;
  name: string;
  url: string;
  icon: string;
  user_id: string;
};

export class CreateSocialNetworksService {
  async execute({
    name,
    url,
    icon,
    user_id,
  }: SocialNetworksRequest): Promise<SocialNetworks | Error> {
    const repository = getRepository(SocialNetworks);

    const repoUser = getRepository(Users);

    if (!(await repoUser.findOne(user_id))) {
      return new Error(`User does not exists!`);
    }

    const socialNSocialNetworks = repository.create({
      name,
      url,
      icon,
      user_id,
    });

    await repository.save(socialNSocialNetworks);

    return socialNSocialNetworks;
  }
}

export class GetSocialNetworksService {
  async execute() {
    const repository = getRepository(SocialNetworks);

    const socialNSocialNetworks = await repository.find({ relations: ["users"] });

    return socialNSocialNetworks;
  }
}

export class UpdateSocialNetworksService {
  async execute({
    id,
    name,
    url,
    icon,
    user_id,
  }: UpdateSocialNetworksRequest): Promise<SocialNetworks | Error> {
    const repository = getRepository(SocialNetworks);

    const socialNSocialNetworks = await repository.findOne(id);

    if (!socialNSocialNetworks) {
      return new Error(`Skill does not exists`);
    }

    socialNSocialNetworks.name = name ? name : socialNSocialNetworks.name;
    socialNSocialNetworks.url = url ? url : socialNSocialNetworks.url;
    socialNSocialNetworks.icon = icon ? icon : socialNSocialNetworks.icon;
    socialNSocialNetworks.user_id = user_id ? user_id : socialNSocialNetworks.user_id;

    await repository.save(socialNSocialNetworks);

    return socialNSocialNetworks;
  }
}

export class DeleteSocialNetworksService {
  async execute(id: string) {
    const repository = getRepository(SocialNetworks);

    if (!(await repository.findOne(id))) {
      return new Error("SocialNetworks does not exists");
    }

    await repository.delete(id);
  }
}

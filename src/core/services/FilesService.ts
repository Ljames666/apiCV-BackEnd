import { getRepository } from "typeorm";
import { Files } from "../models/Files";

type FilesRequest = {
  title: string;
  description: string;
  type: string;
};
type UpdateFilesRequest = {
  id: string;
  title: string;
  description: string;
  type: string;
};

export class CreateFilesService {
  async execute({ title, description, type }: FilesRequest): Promise<Files | Error> {
    const repository = getRepository(Files);

    if (await repository.findOne({ title })) {
      return new Error(`File already exists`);
    }

    const files = repository.create({ title, description, type });

    await repository.save(files);

    return files;
  }
}

export class GetFilesService {
  async execute() {
    const repository = getRepository(Files);

    const files = await repository.find();

    return files;
  }
}

export class UpdateFilesService {
  async execute({ id, title, description, type }: UpdateFilesRequest): Promise<Files | Error> {
    const repository = getRepository(Files);

    const files = await repository.findOne(id);

    if (!files) {
      return new Error(`File does not exists`);
    }

    files.title = title ? title : files.title;
    files.description = description ? description : files.description;
    files.type = type ? type : files.type;

    await repository.save(files);

    return files;
  }
}

export class DeleteFilesService {
  async execute(id: string) {
    const repository = getRepository(Files);

    if (!(await repository.findOne(id))) {
      return new Error("File does not exists");
    }

    await repository.delete(id);
  }
}

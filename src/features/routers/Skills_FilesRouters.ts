import { Router } from "express";
import {
  CreateSkills_FilesController,
  GetSkills_FilesController,
} from "../controllers/Skills_FilesController";

const routerSkill_Files = Router();

routerSkill_Files.post("/skill-files", new CreateSkills_FilesController().handle);

routerSkill_Files.get("/skill-files", new GetSkills_FilesController().handle);

export { routerSkill_Files };

import { Router } from "express";
import {
  CreateSkillsController,
  DeleteSkillsController,
  GetSkillsController,
  UpdateSkillsController,
} from "../controllers/SkillsController";

const routerSkills = Router();

routerSkills.post("/skills", new CreateSkillsController().handle);

routerSkills.get("/skills", new GetSkillsController().handle);

routerSkills.put("/skills/:id", new UpdateSkillsController().handle);

routerSkills.delete("/skills/:id", new DeleteSkillsController().handle);

export { routerSkills };

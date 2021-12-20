import { Router } from "express";
import {
  CreateSkills_CommentsController,
  GetSkills_CommentsController,
} from "../controllers/Skills_CommentsController";

const routerSkill_Comments = Router();

routerSkill_Comments.post("/skill-comments", new CreateSkills_CommentsController().handle);

routerSkill_Comments.get("/skill-comments", new GetSkills_CommentsController().handle);

export { routerSkill_Comments };

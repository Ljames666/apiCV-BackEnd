import { Router } from "express";
import {
  CreateProjects_CommentsController,
  GetProjects_CommentsController,
} from "../controllers/Projects_CommentsController";

const routerProject_Comments = Router();

routerProject_Comments.post("/project-comments", new CreateProjects_CommentsController().handle);

routerProject_Comments.get("/project-comments", new GetProjects_CommentsController().handle);

export { routerProject_Comments };

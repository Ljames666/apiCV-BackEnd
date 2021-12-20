import { Router } from "express";
import {
  CreateProjects_FilesController,
  GetProjects_FilesController,
} from "../controllers/Projects_FilesController";

const routerProject_Files = Router();

routerProject_Files.post("/project-files", new CreateProjects_FilesController().handle);

routerProject_Files.get("/project-files", new GetProjects_FilesController().handle);

export { routerProject_Files };

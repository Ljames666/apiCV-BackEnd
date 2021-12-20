import { Router } from "express";
import {
  CreateProjectsController,
  DeleteProjectsController,
  GetProjectsController,
  UpdateProjectsController,
} from "../controllers/ProjectsController";

const routerProjects = Router();

routerProjects.post("/projects", new CreateProjectsController().handle);

routerProjects.get("/projects", new GetProjectsController().handle);

routerProjects.put("/projects/:id", new UpdateProjectsController().handle);

routerProjects.delete("/projects/:id", new DeleteProjectsController().handle);

export { routerProjects };

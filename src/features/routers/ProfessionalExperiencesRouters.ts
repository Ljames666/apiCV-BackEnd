import { Router } from "express";
import {
  CreateProfessionalExperiencesController,
  DeleteProfessionalExperiencesController,
  GetProfessionalExperiencesController,
  UpdateProfessionalExperiencesController,
} from "../controllers/ProfessionalExperiencesController";

const routerProfessional = Router();

routerProfessional.post("/professional", new CreateProfessionalExperiencesController().handle);

routerProfessional.get("/professional", new GetProfessionalExperiencesController().handle);

routerProfessional.put("/professional/:id", new UpdateProfessionalExperiencesController().handle);

routerProfessional.delete(
  "/professional/:id",
  new DeleteProfessionalExperiencesController().handle
);

export { routerProfessional };

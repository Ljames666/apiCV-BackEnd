import { Router } from "express";
import {
  CreateProfessionalExperiences_FilesController,
  GetProfessionalExperiences_FilesController,
} from "../controllers/ProfessionalExperiences_FilesController";

const routerPro_Files = Router();

routerPro_Files.post("/pro-files", new CreateProfessionalExperiences_FilesController().handle);

routerPro_Files.get("/pro-files", new GetProfessionalExperiences_FilesController().handle);

export { routerPro_Files };

import { Router } from "express";
import {
  CreateEducationAndCertifications_FilesController,
  GetEducationAndCertifications_FilesController,
} from "../controllers/EducationAndCertifications_FilesController";

const routerEducation_Files = Router();

routerEducation_Files.post(
  "/educationfiles",
  new CreateEducationAndCertifications_FilesController().handle
);

routerEducation_Files.get(
  "/educationfiles",
  new GetEducationAndCertifications_FilesController().handle
);

export { routerEducation_Files };

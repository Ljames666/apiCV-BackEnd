import { Router } from "express";
import {
  CreateEducationAndCertificationsController,
  DeleteEducationAndCertificationsController,
  GetEducationAndCertificationsController,
  UpdateEducationAndCertificationsController,
} from "../controllers/EducationAndCertificationsController";

const routerEducation = Router();

routerEducation.post("/education", new CreateEducationAndCertificationsController().handle);

routerEducation.get("/education", new GetEducationAndCertificationsController().handle);

routerEducation.put("/education/:id", new UpdateEducationAndCertificationsController().handle);

routerEducation.delete("/education/:id", new DeleteEducationAndCertificationsController().handle);

export { routerEducation };

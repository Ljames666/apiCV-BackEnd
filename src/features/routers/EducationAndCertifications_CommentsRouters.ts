import { Router } from "express";
import {
  CreateEducationAndCertifications_CommentsController,
  GetEducationAndCertifications_CommentsController,
} from "../controllers/EducationAndCertifications_CommentsController";

const routerEducation_Comments = Router();

routerEducation_Comments.post(
  "/educationcomments",
  new CreateEducationAndCertifications_CommentsController().handle
);

routerEducation_Comments.get(
  "/educationcomments",
  new GetEducationAndCertifications_CommentsController().handle
);

export { routerEducation_Comments };

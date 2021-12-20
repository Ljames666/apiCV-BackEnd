import { Router } from "express";
import {
  CreateProfessionalExperiences_CommentsController,
  GetProfessionalExperiences_CommentsController,
} from "../controllers/ProfessionalExperiences_CommentsController";

const routerPro_Comments = Router();

routerPro_Comments.post(
  "/pro-comments",
  new CreateProfessionalExperiences_CommentsController().handle
);

routerPro_Comments.get("/pro-comments", new GetProfessionalExperiences_CommentsController().handle);

export { routerPro_Comments };

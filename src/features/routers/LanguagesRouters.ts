import { Router } from "express";
import {
  CreateLanguagesController,
  DeleteLanguagesController,
  GetLanguagesController,
  UpdateLanguagesController,
} from "../controllers/LanguagesController";

const routerLanguages = Router();

routerLanguages.post("/languages", new CreateLanguagesController().handle);

routerLanguages.get("/languages", new GetLanguagesController().handle);

routerLanguages.put("/languages/:id", new UpdateLanguagesController().handle);

routerLanguages.delete("/languages/:id", new DeleteLanguagesController().handle);

export { routerLanguages };

import { Router } from "express";
import {
  CreateFilesController,
  DeleteFilesController,
  GetFilesController,
  UpdateFilesController,
} from "../controllers/FilesController";

const routerFiles = Router();

routerFiles.post("/files", new CreateFilesController().handle);

routerFiles.get("/files", new GetFilesController().handle);

routerFiles.put("/files/:id", new UpdateFilesController().handle);

routerFiles.delete("/files/:id", new DeleteFilesController().handle);

export { routerFiles };

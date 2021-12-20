import { Router } from "express";
import {
  CreateCommentsController,
  DeleteCommentsController,
  GetCommentsController,
  UpdateCommentsController,
} from "../controllers/CommentsController";

const routerComments = Router();

routerComments.post("/comments", new CreateCommentsController().handle);

routerComments.get("/comments", new GetCommentsController().handle);

routerComments.put("/comments/:id", new UpdateCommentsController().handle);

routerComments.delete("/comments/:id", new DeleteCommentsController().handle);

export { routerComments };

import { Router } from "express";
import {
  CreateUsersController,
  DeleteUsersController,
  GetIdUsersController,
  GetUsersController,
  UpdateUsersController,
} from "../controllers/UsersController";

const routerUsers = Router();

routerUsers.post("/users", new CreateUsersController().handle);

routerUsers.get("/users", new GetUsersController().handle);

routerUsers.get("/users/and-all", new GetIdUsersController().handle);

routerUsers.put("/users/:id", new UpdateUsersController().handle);

routerUsers.delete("/users/:id", new DeleteUsersController().handle);

export { routerUsers };

import { Router } from "express";
import {
  CreatePhoneController,
  DeletePhoneController,
  GetPhoneController,
  UpdatePhoneController,
} from "../controllers/PhoneController";

const routerPhone = Router();

routerPhone.post("/phone", new CreatePhoneController().handle);

routerPhone.get("/phone", new GetPhoneController().handle);

routerPhone.put("/phone/:id", new UpdatePhoneController().handle);

routerPhone.delete("/phone/:id", new DeletePhoneController().handle);

export { routerPhone };

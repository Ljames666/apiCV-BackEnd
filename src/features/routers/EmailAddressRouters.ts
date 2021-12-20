import { Router } from "express";
import {
  CreateEmailAddressController,
  DeleteEmailAddressController,
  GetEmailAddressController,
  UpdateEmailAddressController,
} from "../controllers/EmailAddressController";

const routerEmailAddress = Router();

routerEmailAddress.post("/email-address", new CreateEmailAddressController().handle);

routerEmailAddress.get("/email-address", new GetEmailAddressController().handle);

routerEmailAddress.put("/email-address/:id", new UpdateEmailAddressController().handle);

routerEmailAddress.delete("/email-address/:id", new DeleteEmailAddressController().handle);

export { routerEmailAddress };

import { Router } from "express";
import {
  CreateContactsController,
  DeleteContactsController,
  GetContactsController,
  UpdateContactsController,
} from "../controllers/ContactsController";

const routerContacts = Router();

routerContacts.post("/contacts", new CreateContactsController().handle);

routerContacts.get("/contacts", new GetContactsController().handle);

routerContacts.put("/contacts/:id", new UpdateContactsController().handle);

routerContacts.delete("/contacts/:id", new DeleteContactsController().handle);

export { routerContacts };

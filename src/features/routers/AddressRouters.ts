import { Router } from "express";
import {
  CreateAddressController,
  DeleteAddressController,
  GetAddressController,
  UpdateAddressController,
} from "../controllers/AddressController";

const routerAddress = Router();

routerAddress.post("/address", new CreateAddressController().handle);

routerAddress.get("/address", new GetAddressController().handle);

routerAddress.put("/address/:id", new UpdateAddressController().handle);

routerAddress.delete("/address/:id", new DeleteAddressController().handle);

export { routerAddress };

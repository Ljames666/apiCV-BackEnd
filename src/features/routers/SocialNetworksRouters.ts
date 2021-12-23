import { Router } from "express";
import {
  CreateSocialNetworksController,
  DeleteSocialNetworksController,
  GetSocialNetworksController,
  UpdateSocialNetworksController,
} from "../controllers/SocialNetworksController";

const routerSocialNetworks = Router();

routerSocialNetworks.post("/social-networks", new CreateSocialNetworksController().handle);

routerSocialNetworks.get("/social-networks", new GetSocialNetworksController().handle);

routerSocialNetworks.put("/social-networks/:id", new UpdateSocialNetworksController().handle);

routerSocialNetworks.delete("/social-networks/:id", new DeleteSocialNetworksController().handle);

export { routerSocialNetworks };

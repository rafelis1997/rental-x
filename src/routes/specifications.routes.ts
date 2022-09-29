import { Router } from "express";

import { CreateSpecificationsController } from "../modules/cars/useCases/createSpecification/CreateSpecificationController";

const specificationsRoutes = Router();

const createSpecificationController = new CreateSpecificationsController();

specificationsRoutes.post("/", createSpecificationController.handle);

export { specificationsRoutes };

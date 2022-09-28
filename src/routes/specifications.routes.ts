import { Router } from "express";

import { SpecificationRepository } from "../modules/cars/repositories/implementations/SpecificationRepository";
import { createCategoryController } from "../modules/cars/useCases/createCategory";

const specificationsRoutes = Router();

const specificationsRepository = new SpecificationRepository();

specificationsRoutes.post("/", (req, res) => {
  return createCategoryController.handle(req, res);
});

export { specificationsRoutes };

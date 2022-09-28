import { SpecificationRepository } from "../../repositories/implementations/SpecificationRepository";
import { CreateSpecificationsController } from "./CreateSpecificationController";
import { CreateSpecificationsUseCase } from "./CreateSpecificationUseCase";

const specificationsRepository = new SpecificationRepository();

const createSpecificationsUseCase = new CreateSpecificationsUseCase(
  specificationsRepository
);

const createSpecificationsController = new CreateSpecificationsController(
  createSpecificationsUseCase
);

export { createSpecificationsController };

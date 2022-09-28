import { Request, Response } from "express";

import { CreateSpecificationsUseCase } from "./CreateSpecificationUseCase";

class CreateSpecificationsController {
  constructor(
    private createSpecificationsUseCase: CreateSpecificationsUseCase
  ) {}

  handle(request: Request, response: Response): Response {
    const { name, description } = request.body;

    try {
      this.createSpecificationsUseCase.execute({ name, description });

      return response.status(201).send();
    } catch (error) {
      new Error(error.message);
      return response.status(400).send();
    }
  }
}

export { CreateSpecificationsController };

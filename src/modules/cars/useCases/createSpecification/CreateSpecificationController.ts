import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateSpecificationsUseCase } from "./CreateSpecificationUseCase";

class CreateSpecificationsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, description } = request.body;

    try {
      const createSpecificationsUseCase = container.resolve(
        CreateSpecificationsUseCase
      );

      await createSpecificationsUseCase.execute({ name, description });

      return response.status(201).send();
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  }
}

export { CreateSpecificationsController };

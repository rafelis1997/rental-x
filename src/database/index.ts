import { DataSource } from "typeorm";

import { Category } from "../modules/cars/entities/Category";
import { Specification } from "../modules/cars/entities/Specification";
import { CreateCategories1664393571709 } from "./migrations/1664393571709-CreateCategories";
import { CreateSpecifications1664479027367 } from "./migrations/1664479027367-CreateSpecifications";

export const MyDataSource = new DataSource({
  type: "postgres",
  port: 5432,
  username: "docker",
  password: "ignite",
  database: "rentx",
  entities: [Category, Specification],
  migrations: [
    CreateCategories1664393571709,
    CreateSpecifications1664479027367,
  ],
});

export function createConnection(
  host = "database_ignite"
): Promise<DataSource> {
  return MyDataSource.setOptions({ host }).initialize();
}

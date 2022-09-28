import { DataSource } from "typeorm";

import { Category } from "../modules/cars/entities/Category";
import { CreateCategories1664393571709 } from "./migrations/1664393571709-CreateCategories";

export const MyDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5434,
  username: "docker",
  password: "ignite",
  database: "rentx",
  entities: [Category],
  migrations: [CreateCategories1664393571709],
});

MyDataSource.initialize();

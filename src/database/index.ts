import { DataSource } from "typeorm";

import { User } from "../modules/accounts/entities/User";
import { Category } from "../modules/cars/entities/Category";
import { Specification } from "../modules/cars/entities/Specification";
import { CreateCategories1664393571709 } from "./migrations/1664393571709-CreateCategories";
import { CreateSpecifications1664479027367 } from "./migrations/1664479027367-CreateSpecifications";
import { CreateUsers1664496355909 } from "./migrations/1664496355909-CreateUsers";
import { AlterUserDeleteUsername1664499011461 } from "./migrations/1664499011461-AlterUserDeleteUsername";
import { AlterUserAddAvatar1664505444855 } from "./migrations/1664505444855-AlterUserAddAvatar";

export const MyDataSource = new DataSource({
  type: "postgres",
  port: 5432,
  username: "docker",
  password: "ignite",
  database: "rentx",
  entities: [Category, Specification, User],
  migrations: [
    CreateCategories1664393571709,
    CreateSpecifications1664479027367,
    CreateUsers1664496355909,
    AlterUserDeleteUsername1664499011461,
    AlterUserAddAvatar1664505444855,
  ],
});

export function createConnection(
  host = "database_ignite"
): Promise<DataSource> {
  return MyDataSource.setOptions({ host }).initialize();
}

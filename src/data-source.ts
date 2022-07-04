import "reflect-metadata";
import { DataSource } from "typeorm";
import { Post } from "./entity/Post";
import { CreatePostTable1656926770819 } from "./migration/1656926770819-CreatePostTable";

export const AppDataSource = new DataSource({
  type: "sqlite",
  database: "local.sqlite",
  synchronize: true,
  logging: false,
  entities: [Post],
  migrations: [CreatePostTable1656926770819],
  subscribers: [],
});

import "reflect-metadata";
import { DataSource } from "typeorm";
import { Post } from "./entity/Post";
import { Author } from "./entity/Author";
import { CreatePostTable1656926770819 } from "./migration/1656926770819-CreatePostTable";
import { CreateAuthorTable1656939116999 } from "./migration/1656939116999-CreateAuthorTable";

export const AppDataSource = new DataSource({
  type: "sqlite",
  database: "local.sqlite",
  synchronize: true,
  logging: false,
  entities: [Post, Author],
  migrations: [CreatePostTable1656926770819, CreateAuthorTable1656939116999],
  subscribers: [],
});

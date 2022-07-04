import "reflect-metadata";
import { DataSource } from "typeorm";
import { Post } from "./entity/Post";
import { Author } from "./entity/Author";
import { CreatePostTable1656926770819 } from "./migration/1656926770819-CreatePostTable";
import { CreateAuthorTable1656939116999 } from "./migration/1656939116999-CreateAuthorTable";
import { AddAuthorIdColumn1656939646470 } from "./migration/1656939646470-AddAuthorIdColumn";

export const AppDataSource = new DataSource({
  type: "sqlite",
  database: "local.sqlite",
  synchronize: true,
  logging: true,
  entities: [Post, Author],
  migrations: [
    CreatePostTable1656926770819,
    CreateAuthorTable1656939116999,
    AddAuthorIdColumn1656939646470,
  ],
  subscribers: [],
});

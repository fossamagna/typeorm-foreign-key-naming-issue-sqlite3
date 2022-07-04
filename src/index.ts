import { AppDataSource } from "./data-source"
import { Post } from "./entity/Post"

AppDataSource.initialize().then(async () => {

    console.log("Inserting a new post into the database...")
    const post = new Post()
    post.title = "New Blog title"
    post.text = "..."
    await AppDataSource.manager.save(post);
    console.log("Saved a new post with id: " + post.id)

    console.log("Loading Posts from the database...")
    const posts = await AppDataSource.manager.find(Post)
    console.log("Loaded posts: ", posts)

    console.log("Here you can setup and run express / fastify / any other framework.")

}).catch(error => console.log(error))

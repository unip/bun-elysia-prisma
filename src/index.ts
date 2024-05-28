import { Elysia } from "elysia";
import swagger from "@elysiajs/swagger";
import root from "./routes";

const app = new Elysia();

app
  .use(
    swagger({
      documentation: {
        tags: [
          { name: "Post", description: `Endpoints for POSTS` },
          { name: "User", description: `Endpoints for USERS` },
        ],
      },
      exclude: "/",
    })
  )
  .use(root)
  .listen(process.env.PORT ?? 3000);

console.log(
  `🦊 Elysia is running at http://${app.server?.hostname}:${app.server?.port}`
);

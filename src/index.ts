import { Elysia } from "elysia";
import postsRoutes from "./routes/posts";
import swagger from "@elysiajs/swagger";

const app = new Elysia();

app
  .use(swagger())
  .group("/api", (app) => app.use(postsRoutes))
  .listen(process.env.PORT ?? 3000);

console.log(
  `🦊 Elysia is running at http://${app.server?.hostname}:${app.server?.port}`
);

import { Elysia } from "elysia";
import postsRoutes from "./routes/posts";
import swagger from "@elysiajs/swagger";
import { html } from "@elysiajs/html";
import Landing from "./landing";

const app = new Elysia();

app
  .use(html())
  .get("/", () => <Landing />)
  .use(swagger())
  .group("/api", (app) => app.use(postsRoutes))
  .listen(process.env.PORT ?? 3000);

console.log(
  `🦊 Elysia is running at http://${app.server?.hostname}:${app.server?.port}`
);

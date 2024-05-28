import Elysia from "elysia";
import { html } from "@elysiajs/html";
import postsRoutes from "./posts";
import Landing from "../components/landing";
import usersRoutes from "./users";

const root = new Elysia()
  .use(html())
  .get("/", () => <Landing title="Welcome to Elysia" />)
  .group("/api", (app) => app.use(postsRoutes).use(usersRoutes));

export default root;

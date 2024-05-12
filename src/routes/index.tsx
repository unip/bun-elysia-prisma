import Elysia from "elysia";
import { html } from "@elysiajs/html";
import postsRoutes from "./posts";
import Landing from "../components/landing";

const root = new Elysia()
  .use(html())
  .get("/", () => <Landing title="Welcome to Elysia" />)
  .group("/api", (app) => app.use(postsRoutes));

export default root;

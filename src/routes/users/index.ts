import { Elysia, t } from "elysia";
import {
  createUser,
  deleteUser,
  getUser,
  getUsers,
  updateUser,
} from "./handlers";
import { Role } from "@prisma/client";

const usersRoutes = new Elysia({ prefix: "/users", tags: ["User"] })
  // get all posts
  .get("/", () => getUsers())

  // get post by id
  .get("/:id", ({ params: { id } }) => getUser(id), {
    params: t.Object({
      id: t.Numeric(),
    }),
  })

  // create post
  .post("/", ({ body }) => createUser(body), {
    body: t.Object({
      firstName: t.String(),
      lastName: t.String(),
      email: t.String(),
      dob: t.String(),
      address: t.String(),
      role: t.Enum(Role),
      biodata: t.Nullable(t.String()),
    }),
  })

  // update post
  .patch("/:id", ({ params: { id }, body }) => updateUser(id, body), {
    params: t.Object({ id: t.Numeric() }),
    body: t.Object({
      firstName: t.String(),
      lastName: t.String(),
      email: t.String(),
      dob: t.String(),
      address: t.String(),
      role: t.Enum(Role),
      biodata: t.Nullable(t.String()),
    }),
  })

  // delete post
  .delete("/", ({ body }) => deleteUser(body), {
    body: t.Object({ id: t.Numeric() }),
  });

export default usersRoutes;

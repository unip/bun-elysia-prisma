import { Elysia, t } from "elysia";
import {
  createPost,
  deletePost,
  getPost,
  getPosts,
  updatePost,
} from "./handlers";

const postsRoutes = new Elysia({ prefix: "/posts" })
  // get all posts
  .get("/", () => getPosts())

  // get post by id
  .get("/:id", ({ params: { id } }) => getPost(id), {
    params: t.Object({
      id: t.Numeric(),
    }),
  })

  // create post
  .post("/", ({ body }) => createPost(body), {
    body: t.Object({
      title: t.String({ minLength: 3, maxLength: 50 }),
      content: t.String({ minLength: 3, maxLength: 50 }),
    }),
  })

  // update post
  .patch("/:id", ({ params: { id }, body }) => updatePost(id, body), {
    params: t.Object({ id: t.Numeric() }),
    body: t.Object(
      {
        title: t.Optional(t.String({ minLength: 3, maxLength: 50 })),
        conent: t.Optional(t.String({ minLength: 3, maxLength: 50 })),
      },
      {
        minProperties: 1,
      }
    ),
  })

  // delete post
  .delete("/", ({ body }) => deletePost(body), {
    body: t.Object({ id: t.Numeric() }),
  });

export default postsRoutes;

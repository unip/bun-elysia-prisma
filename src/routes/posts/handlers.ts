import { NotFoundError } from "elysia";
import db from "@/src/db";

export async function getPosts() {
  try {
    return await db.post.findMany({ orderBy: { createdAt: "asc" } });
  } catch (error: unknown) {
    console.error(`Error getting posts: ${error}`);
  }
}

export async function getPost(id: number) {
  try {
    const post = await db.post.findUnique({ where: { id } });

    if (!post) {
      throw new NotFoundError("Post not found");
    }

    return post;
  } catch (error: unknown) {
    console.error(`Error finding post: ${error}`);
  }
}

export async function createPost(options: { title: string; content: string }) {
  try {
    const { title, content } = options;
    return await db.post.create({ data: { title, content } });
  } catch (error: unknown) {
    console.error(`Error creating post: ${error}`);
  }
}

export async function updatePost(
  id: number,
  options: { title?: string; content?: string }
) {
  try {
    const { title, content } = options;

    return await db.post.update({
      where: { id },
      data: {
        ...(title ? { title } : {}),
        ...(content ? { content } : {}),
      },
    });
  } catch (error: unknown) {
    console.error(`Error updating post: ${error}`);
  }
}

export async function deletePost(options: { id: number }) {
  try {
    const { id } = options;
    return await db.post.delete({ where: { id } });
  } catch (error: unknown) {
    console.error(`Error deleting post: ${error}`);
  }
}

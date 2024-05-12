import { NotFoundError } from "elysia";
import db from "@/src/db";
import { createResponse } from "@/src/lib/helper";

export async function getPosts() {
  try {
    const posts = await db.post.findMany({ orderBy: { createdAt: "asc" } });
    return createResponse({
      status: 200,
      message: "Successful get all post",
      data: posts,
    });
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

    return createResponse({
      status: 200,
      message: "Successful get post",
      data: post,
    });
  } catch (error: unknown) {
    console.error(`Error finding post: ${error}`);
    return createResponse({
      status: 400,
      message: `Error finding post: ${error}`,
      data: null,
    });
  }
}

export async function createPost(options: { title: string; content: string }) {
  try {
    const { title, content } = options;
    return createResponse({
      status: 200,
      message: "Successful create post",
      data: await db.post.create({ data: { title, content } }),
    });
  } catch (error: unknown) {
    console.error(`Error creating post: ${error}`);
    return createResponse({
      status: 400,
      message: `Error creating post: ${error}`,
      data: null,
    });
  }
}

export async function updatePost(
  id: number,
  options: { title?: string; content?: string }
) {
  try {
    const { title, content } = options;

    const updatedPost = await db.post.update({
      where: { id },
      data: {
        ...(title ? { title } : {}),
        ...(content ? { content } : {}),
      },
    });

    return createResponse({
      status: 200,
      message: "Successful update post",
      data: updatedPost,
    });
  } catch (error: unknown) {
    console.error(`Error updating post: ${error}`);
    return createResponse({
      status: 400,
      message: `Error updating post: ${error}`,
      data: null,
    });
  }
}

export async function deletePost(options: { id: number }) {
  try {
    const { id } = options;
    const deletedPost = await db.post.delete({ where: { id } });
    return createResponse({
      status: 400,
      message: `Successful delete post`,
      data: deletedPost,
    });
  } catch (error: unknown) {
    console.error(`Error deleting post: ${error}`);
    return createResponse({
      status: 400,
      message: `Error deleting post: ${error}`,
      data: null,
    });
  }
}

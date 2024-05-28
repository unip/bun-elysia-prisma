import { Post, User } from "@prisma/client";

export interface PostResponse {
  status: number;
  message: string;
  data: Post | Post[] | null;
}

export interface UserResponse {
  status: number;
  message: string;
  data: User | User[] | null;
}

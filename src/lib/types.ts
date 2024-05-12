import { Post } from "@prisma/client";

export interface Res {
  status: number;
  message: string;
  data: Post | Post[] | null;
}

import { PostResponse, UserResponse } from "./types";

export function createResponse({
  status,
  message,
  data,
}: UserResponse | PostResponse): Response {
  return Response.json(
    { status, message, data },
    { headers: { "Content-Type": "application/json" }, status }
  );
}

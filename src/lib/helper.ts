import { Res } from "./types";

export function createResponse({ status, message, data }: Res): Response {
  return Response.json(
    { status, message, data },
    { headers: { "Content-Type": "application/json" }, status }
  );
}

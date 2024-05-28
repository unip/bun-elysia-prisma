import { NotFoundError } from "elysia";
import db from "@/src/db";
import { createResponse } from "@/src/lib/helper";
import { Role, User } from "@prisma/client";

export async function getUsers() {
  try {
    const users = await db.user.findMany({ orderBy: { createdAt: "asc" } });
    return createResponse({
      status: 200,
      message: "Successful get all user",
      data: users,
    });
  } catch (error: unknown) {
    console.error(`Error getting users: ${error}`);
  }
}

export async function getUser(id: number) {
  try {
    const user = await db.user.findUnique({ where: { id } });

    if (!user) {
      throw new NotFoundError("User not found");
    }

    return createResponse({
      status: 200,
      message: "Successful get user",
      data: user,
    });
  } catch (error: unknown) {
    console.error(`Error finding user: ${error}`);
    return createResponse({
      status: 400,
      message: `Error finding user: ${error}`,
      data: null,
    });
  }
}

export async function createUser(options: {
  firstName: string;
  lastName: string;
  email: string;
  dob: string;
  address: string;
  biodata?: string | null;
  role: Role;
}) {
  try {
    const { firstName, lastName, email, dob, address, biodata, role } = options;
    return createResponse({
      status: 200,
      message: "Successful create user",
      data: await db.user.create({
        data: { firstName, lastName, email, dob, address, biodata, role },
      }),
    });
  } catch (error: unknown) {
    console.error(`Error creating user: ${error}`);
    return createResponse({
      status: 400,
      message: `Error creating user: ${error}`,
      data: null,
    });
  }
}

export async function updateUser(
  id: number,
  options: {
    firstName: string;
    lastName: string;
    email: string;
    dob: string;
    address: string;
    biodata?: string | null;
    role: Role;
  }
) {
  try {
    const updatedUser = await db.user.update({
      where: { id },
      data: options,
    });

    return createResponse({
      status: 200,
      message: "Successful update user",
      data: updatedUser,
    });
  } catch (error: unknown) {
    console.error(`Error updating user: ${error}`);
    return createResponse({
      status: 400,
      message: `Error updating user: ${error}`,
      data: null,
    });
  }
}

export async function deleteUser(options: { id: number }) {
  try {
    const { id } = options;
    const deletedUser = await db.user.delete({ where: { id } });
    return createResponse({
      status: 400,
      message: `Successful delete user`,
      data: deletedUser,
    });
  } catch (error: unknown) {
    console.error(`Error deleting user: ${error}`);
    return createResponse({
      status: 400,
      message: `Error deleting user: ${error}`,
      data: null,
    });
  }
}

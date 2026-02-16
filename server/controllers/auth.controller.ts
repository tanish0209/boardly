import prisma from "@/lib/prisma";
import bcrypt from "bcryptjs";
import { SignupInput } from "@/server/validators/auth.validator";

export async function signupController(data: SignupInput) {
  const existing = await prisma.user.findUnique({
    where: { email: data.email },
  });

  if (existing) {
    throw new Error("User already exists");
  }

  const hashedPassword = await bcrypt.hash(data.password, 10);

  return prisma.user.create({
    data: {
      name: data.name,
      email: data.email,
      password: hashedPassword,
    },
  });
}

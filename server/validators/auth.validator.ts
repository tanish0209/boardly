import { z } from "zod";

export const SignupSchema = z.object({
  name: z.string().min(2, "Name is too short"),
  email: z.string().email("Invalid email"),
  password: z.string().min(6, "Password too short"),
});

export type SignupInput = z.infer<typeof SignupSchema>;

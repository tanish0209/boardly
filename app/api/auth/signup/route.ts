import { SignupSchema } from "@/server/validators/auth.validator";
import { signupController } from "@/server/controllers/auth.controller";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const parsed = SignupSchema.parse(body);

    const user = await signupController(parsed);

    return Response.json(
      {
        id: user.id,
        name: user.name,
        email: user.email,
      },
      { status: 201 },
    );
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Signup failed";

    return Response.json({ error: message }, { status: 400 });
  }
}

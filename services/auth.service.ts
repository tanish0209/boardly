import { signIn, signOut } from "next-auth/react";

export function login(email: string, password: string) {
  return signIn("credentials", {
    email,
    password,
    redirect: false,
  });
}
export function logout() {
  return signOut({ redirect: false });
}

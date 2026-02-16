"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);

    const res = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    setLoading(false);

    if (res?.error) {
      setError("Invalid email or password");
      return;
    }
    router.push("/boards");
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 sm:p-10 shadow-xl rounded-2xl w-full max-w-md border-2 border-orange-400"
      >
        <h1 className="text-3xl sm:text-4xl font-extrabold mb-2 text-center text-orange-600">
          Welcome Back!
        </h1>

        <p className="text-sm sm:text-base text-center text-gray-600 mb-6">
          Login to continue managing your boards
        </p>

        {error && (
          <p className="text-red-600 mb-4 text-center text-sm">{error}</p>
        )}

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full mb-4 px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 transition"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="w-full mb-6 px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 transition"
        />

        <div className="flex flex-col gap-3">
          <button
            type="submit"
            disabled={loading}
            className="py-2 rounded-full bg-orange-600 text-white font-semibold hover:bg-orange-700 transition disabled:opacity-50"
          >
            {loading ? "Logging in..." : "Login"}
          </button>

          <Link
            href="/"
            className="text-center py-2 rounded-full border border-gray-300 text-gray-700 hover:bg-gray-100 transition"
          >
            Go Back
          </Link>
        </div>
      </form>
    </div>
  );
}

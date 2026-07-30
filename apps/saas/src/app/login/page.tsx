"use client";

import Link from "next/link";
import { signIn } from "next-auth/react";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { GlassSignInCard } from "@openpages/uitripled/auth";
import { PlatformShell } from "@/components/PlatformShell";

export default function LoginPage() {
  const router = useRouter();
  const [error, setError] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const res = await signIn("credentials", {
      email: String(fd.get("email")),
      password: String(fd.get("password")),
      redirect: false,
    });
    if (res?.error) {
      setError("Invalid email or password");
      return;
    }
    router.push("/dashboard");
  }

  return (
    <PlatformShell
      actions={
        <Link
          href="/signup"
          className="rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground"
        >
          Sign up
        </Link>
      }
    >
      <div className="flex min-h-[calc(100vh-73px)] items-center justify-center px-4 py-12">
        <GlassSignInCard
          onSubmit={onSubmit}
          error={error}
          title="Welcome back"
          subtitle="Sign in to your OpenPages AI workspace."
          submitLabel="Log in"
          footer={
            <p className="mt-6 text-center text-xs text-muted-foreground">
              No account yet?{" "}
              <Link href="/signup" className="text-primary underline-offset-4 hover:underline">
                Create workspace
              </Link>
            </p>
          }
        />
      </div>
    </PlatformShell>
  );
}

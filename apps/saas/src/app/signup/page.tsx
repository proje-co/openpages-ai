"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { GlassSignUpCard } from "@openpages/uitripled/auth";
import { PlatformShell } from "@/components/PlatformShell";

export default function SignupPage() {
  const router = useRouter();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");
    const fd = new FormData(e.currentTarget);
    const first = String(fd.get("firstName") || "");
    const last = String(fd.get("lastName") || "");
    const res = await fetch("/api/auth/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: `${first} ${last}`.trim(),
        email: fd.get("email"),
        password: fd.get("password"),
        workspaceName: fd.get("workspaceName") || "My workspace",
      }),
    });
    setLoading(false);
    if (!res.ok) {
      const data = await res.json();
      setError(data.error || "Signup failed");
      return;
    }
    router.push("/login");
  }

  return (
    <PlatformShell
      actions={
        <Link
          href="/login"
          className="rounded-full border border-border/60 px-4 py-2 text-sm text-foreground"
        >
          Log in
        </Link>
      }
    >
      <div className="flex min-h-[calc(100vh-73px)] items-center justify-center px-4 py-12">
        <div className="w-full max-w-2xl">
          <GlassSignUpCard
            onSubmit={onSubmit}
            error={error}
            loading={loading}
            footer={
              <p className="mt-6 text-center text-xs text-muted-foreground">
                Already have an account?{" "}
                <Link href="/login" className="text-primary underline-offset-4 hover:underline">
                  Sign in
                </Link>
              </p>
            }
          />
        </div>
      </div>
    </PlatformShell>
  );
}

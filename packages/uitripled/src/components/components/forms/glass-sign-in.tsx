"use client";

import { Button } from "../../../ui/button";
import { Checkbox } from "../../../ui/checkbox";
import { Input } from "../../../ui/input";
import { Label } from "../../../ui/label";
import { motion, useReducedMotion } from "framer-motion";
import { Chrome, Github, Twitter } from "lucide-react";
import { FormEvent, ReactNode } from "react";

const socialProviders = [
  { name: "Google", icon: Chrome },
  { name: "Twitter", icon: Twitter },
  { name: "GitHub", icon: Github },
];

export type GlassSignInCardProps = {
  onSubmit?: (event: FormEvent<HTMLFormElement>) => void | Promise<void>;
  error?: string;
  footer?: ReactNode;
  title?: string;
  subtitle?: string;
  submitLabel?: string;
};

export function GlassSignInCard({
  onSubmit,
  error,
  footer,
  title = "Access your workspace",
  subtitle = "Choose a social account or continue with email and password.",
  submitLabel = "Continue with Email",
}: GlassSignInCardProps = {}) {
  const shouldReduceMotion = useReducedMotion();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    if (onSubmit) {
      void onSubmit(event);
      return;
    }
    event.preventDefault();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.45,
        ease: shouldReduceMotion ? "linear" : [0.16, 1, 0.3, 1],
      }}
      className="group relative w-full max-w-lg overflow-hidden rounded-3xl border border-border/60 bg-card/85 p-8 backdrop-blur-xl sm:p-10"
      role="form"
      aria-labelledby="glass-sign-in-title"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-br from-foreground/[0.04] via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      />
      <div className="mb-8 space-y-2 text-center">
        <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-border/60 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.28em] text-muted-foreground">
          Sign In
        </div>
        <h1
          id="glass-sign-in-title"
          className="text-2xl font-semibold text-foreground sm:text-3xl"
        >
          {title}
        </h1>
        <p className="text-sm text-muted-foreground">{subtitle}</p>
      </div>

      <div className="mb-8 grid gap-3 sm:grid-cols-3">
        {socialProviders.map((provider) => (
          <Button
            key={provider.name}
            type="button"
            variant="outline"
            className="flex items-center justify-center gap-2 rounded-full border-border/60 bg-card/70 text-sm text-foreground transition-transform duration-300 hover:-translate-y-1 hover:text-primary"
            aria-label={`Continue with ${provider.name}`}
          >
            <provider.icon className="h-4 w-4" aria-hidden />
            <span className="hidden sm:inline">{provider.name}</span>
          </Button>
        ))}
      </div>

      <div className="mb-6 flex items-center gap-3">
        <div className="h-px flex-1 bg-border/70" />
        <span className="text-xs uppercase tracking-[0.34em] text-muted-foreground">
          or
        </span>
        <div className="h-px flex-1 bg-border/70" />
      </div>

      <form className="space-y-6" onSubmit={handleSubmit}>
        <div className="space-y-2">
          <Label htmlFor="email">Email address</Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="you@example.com"
            autoComplete="email"
            required
            className="h-11 rounded-2xl border-border/60 bg-background/60 px-4"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            name="password"
            type="password"
            placeholder="Enter your password"
            autoComplete="current-password"
            required
            className="h-11 rounded-2xl border-border/60 bg-background/60 px-4"
          />
        </div>

        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <label className="flex items-center gap-2">
            <Checkbox id="remember-me" />
            <span>Remember me</span>
          </label>
          <button
            type="button"
            className="text-xs font-medium text-primary underline-offset-4 hover:underline"
          >
            Forgot password?
          </button>
        </div>

        {error ? <p className="text-sm text-destructive">{error}</p> : null}

        <Button
          type="submit"
          className="w-full rounded-full bg-primary px-6 py-3 text-primary-foreground shadow-[0_20px_60px_-30px_rgba(79,70,229,0.75)] transition-transform duration-300 hover:-translate-y-1"
        >
          {submitLabel}
        </Button>
      </form>

      {footer ?? (
        <p className="mt-6 text-center text-xs text-muted-foreground">
          By continuing you agree to our terms of service and privacy policy.
        </p>
      )}
    </motion.div>
  );
}

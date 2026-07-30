"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { LazyBlock } from "@/components/LazyBlock";
import { PlatformShell } from "@/components/PlatformShell";

type Plan = {
  code: string;
  name: string;
  monthlyPrice: number;
  aiCredits: number;
};

export default function PricingPage() {
  const [plans, setPlans] = useState<Plan[]>([]);
  const [note, setNote] = useState("");

  useEffect(() => {
    fetch("/api/billing/plan")
      .then((r) => r.json())
      .then((d) => setPlans(d.plans || []));
  }, []);

  async function choose(planCode: string) {
    const res = await fetch("/api/billing/plan", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ planCode }),
    });
    const data = await res.json();
    setNote(res.ok ? `Switched to ${planCode}. ${data.note || ""}` : data.error);
  }

  return (
    <PlatformShell
      actions={
        <Link
          href="/dashboard"
          className="rounded-full border border-border/60 px-4 py-2 text-sm"
        >
          Dashboard
        </Link>
      }
    >
      <LazyBlock id="glassmorphism-pricing-block" />
      <section className="mx-auto max-w-5xl px-6 py-10">
        <h2 className="mb-4 text-2xl font-semibold">Activate a plan</h2>
        {note ? <p className="mb-4 text-sm text-muted-foreground">{note}</p> : null}
        <div className="grid gap-4 md:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.code}
              className="rounded-3xl border border-border/60 bg-card/70 p-6 backdrop-blur-xl"
            >
              <h3 className="text-lg font-medium">{plan.name}</h3>
              <p className="mt-2 text-3xl font-semibold">
                ${(plan.monthlyPrice / 100).toFixed(0)}
                <span className="text-sm text-muted-foreground">/mo</span>
              </p>
              <p className="mt-2 text-sm text-muted-foreground">{plan.aiCredits} AI credits</p>
              <button
                type="button"
                onClick={() => choose(plan.code)}
                className="mt-4 rounded-full bg-primary px-4 py-2 text-sm text-primary-foreground"
              >
                Choose {plan.name}
              </button>
            </div>
          ))}
        </div>
      </section>
      <LazyBlock id="feature-comparison-block" />
      <LazyBlock id="faq-accordion-block" />
      <LazyBlock id="glassmorphism-cta-block" />
      <LazyBlock id="footer-block" />
    </PlatformShell>
  );
}

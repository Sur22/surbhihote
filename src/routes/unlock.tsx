import { createFileRoute, useRouter, useSearch } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useState } from "react";
import { z } from "zod";
import { SiteLayout } from "@/components/SiteLayout";
import { Button } from "@/components/ui/button";
import { unlockSite } from "@/lib/gate.functions";

const searchSchema = z.object({
  redirect: z.string().optional(),
});

export const Route = createFileRoute("/unlock")({
  validateSearch: searchSchema,
  head: () => ({
    meta: [
      { title: "Protected — Surbhi Hote" },
      { name: "description", content: "Enter password to view case studies." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: UnlockPage,
});

function UnlockPage() {
  const router = useRouter();
  const search = useSearch({ from: "/unlock" });
  const unlock = useServerFn(unlockSite);
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [pending, setPending] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setPending(true);
    setError(false);
    try {
      const { ok } = await unlock({ data: { password } });
      if (ok) {
        const dest = search.redirect ?? "/";
        window.location.href = dest;
      } else {
        setError(true);
      }
    } finally {
      setPending(false);
    }
  }

  return (
    <SiteLayout>
      <div className="mx-auto max-w-md px-6 py-32">
        <p className="eyebrow mb-4">Protected</p>
        <h1 className="font-serif text-4xl mb-3">Case studies are private</h1>
        <p className="text-muted-foreground mb-8">
          Enter the password to continue.
        </p>
        <form onSubmit={onSubmit} className="flex flex-col gap-4">
          <input
            type="password"
            name="password"
            autoComplete="current-password"
            autoFocus
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded-md border border-border bg-background px-4 py-3 text-foreground outline-none focus:border-foreground/60"
            placeholder="Password"
          />
          {error && (
            <p className="text-sm text-red-500">Incorrect password.</p>
          )}
          <Button type="submit" disabled={pending || !password}>
            {pending ? "Checking…" : "Enter"}
          </Button>
        </form>
      </div>
    </SiteLayout>
  );
}

"use client";

import { useState } from "react";
import { Input } from "@/app/components/ui/input";
import { Textarea } from "@/app/components/ui/textarea";
import { Button } from "@/app/components/ui/button";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setSuccess(null);
    setError(null);

    const formData = new FormData(event.currentTarget);
    const payload = Object.fromEntries(formData.entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });

      if (!res.ok) {
        throw new Error("Failed to send message.");
      }

      setSuccess("Your message has been sent. We’ll get back to you shortly.");
      event.currentTarget.reset();
    } catch (err) {
      setError("Something went wrong. Please try again or call us directly.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="glass-panel rounded-2xl p-6 space-y-4"
    >
      <h2 className="font-heading text-lg font-semibold">
        Send us a message.
      </h2>
      <div className="grid gap-3">
        <div className="space-y-1">
          <label className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
            Name
          </label>
          <Input name="name" required placeholder="Full name" />
        </div>
        <div className="space-y-1">
          <label className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
            Email
          </label>
          <Input
            name="email"
            type="email"
            required
            placeholder="you@example.com"
          />
        </div>
        <div className="space-y-1">
          <label className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
            Phone
          </label>
          <Input name="phone" required placeholder="Contact number" />
        </div>
        <div className="space-y-1">
          <label className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
            Message
          </label>
          <Textarea
            name="message"
            required
            placeholder="Share your truck details, fleet size, and what you need help with."
          />
        </div>
      </div>
      {success && (
        <p className="text-xs text-emerald-400 bg-emerald-400/5 border border-emerald-400/30 rounded-md px-3 py-2">
          {success}
        </p>
      )}
      {error && (
        <p className="text-xs text-red-400 bg-red-400/5 border border-red-400/30 rounded-md px-3 py-2">
          {error}
        </p>
      )}
      <Button type="submit" disabled={loading} className="w-full">
        {loading ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
}


"use client";

import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/app/components/ui/card";

const testimonials = [
  {
    quote:
      "AutoGate repaired our fleet trucks quickly and professionally. Downtime dropped and our dispatch team finally trusts the schedule again.",
    name: "Logistics Operations Manager",
    company: "Regional Freight Carrier"
  },
  {
    quote:
      "Best truck repair shop we’ve worked with. Their diagnostics are precise and they always explain exactly what was done.",
    name: "Owner-Operator",
    company: "Independent Hauler"
  },
  {
    quote:
      "They manage our preventative maintenance program across the fleet. Fewer roadside issues, more predictable operating costs.",
    name: "Fleet Director",
    company: "Construction & Heavy Equipment"
  }
];

export function TestimonialsSection() {
  return (
    <section className="section-padding border-b border-border bg-background">
      <div className="container-max space-y-8">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground mb-2">
            Testimonials
          </p>
          <h2 className="font-heading text-2xl md:text-3xl font-semibold">
            Trusted by Fleet Operators & Owner-Operators.
          </h2>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.quote}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.35, delay: index * 0.05 }}
            >
              <Card className="h-full flex flex-col justify-between">
                <CardHeader>
                  <CardTitle className="text-base mb-1">⭐⭐⭐⭐⭐</CardTitle>
                  <CardDescription className="text-sm">
                    “{t.quote}”
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em]">
                    {t.name}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    {t.company}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


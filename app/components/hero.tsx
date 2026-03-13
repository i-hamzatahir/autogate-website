"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/app/components/ui/button";
import { Card } from "@/app/components/ui/card";
import { siteConfig } from "@/lib/utils";

const stats = [
  { label: "Years Experience", value: "15+" },
  { label: "Trucks Repaired", value: "5000+" },
  { label: "Certified Diesel Mechanics", value: "Certified" },
  { label: "Fleet Maintenance", value: "Experts" }
];

export function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b border-border bg-gradient-to-b from-black to-background">
      <div className="container-max section-padding grid gap-10 md:grid-cols-2 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="space-y-6"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-secondary/60 px-3 py-1 text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            Heavy-Duty Diesel & Fleet
          </div>
          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
            Heavy-Duty Truck Repair{" "}
            <span className="text-accent">You Can Trust.</span>
          </h1>
          <p className="text-sm md:text-base text-muted-foreground max-w-xl">
            {siteConfig.name} specializes in professional diagnostics, repair,
            and maintenance for diesel trucks, semi-trucks, and commercial
            fleets. Industrial-grade equipment. Certified diesel technicians.
            Fleet-focused turnaround.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <Button asChild size="lg">
              <Link href="/book-appointment">Book Appointment</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/services">View Services</Link>
            </Button>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-3">
            {stats.map((stat) => (
              <Card
                key={stat.label}
                className="glass-panel rounded-xl p-3 border-border/80"
              >
                <div className="text-xs text-muted-foreground uppercase tracking-[0.18em]">
                  {stat.label}
                </div>
                <div className="text-lg font-semibold mt-1">{stat.value}</div>
              </Card>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          className="relative"
        >
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl border border-border/80 bg-secondary/60">
            <Image
              src="/images/hero-truck-workshop.jpg"
              alt="Heavy-duty truck inside a modern repair workshop"
              fill
              className="object-cover object-center"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-black/70 via-black/10 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 flex flex-wrap items-center justify-between gap-3 text-xs text-muted-foreground">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-green-500" />
                Live Fleet Monitoring Ready
              </div>
              <div className="flex items-center gap-3">
                <span className="uppercase tracking-[0.18em]">
                  Diesel • Heavy Duty • Fleet
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="pointer-events-none absolute -left-20 top-10 h-56 w-56 rounded-full bg-accent/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-10 bottom-0 h-56 w-56 rounded-full bg-accent/10 blur-3xl" />
    </section>
  );
}


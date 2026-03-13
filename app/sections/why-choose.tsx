"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Cpu, Clock, BadgeCheck, Truck, AlertTriangle } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/app/components/ui/card";

const reasons = [
  {
    icon: <ShieldCheck className="h-5 w-5" />,
    title: "Certified Diesel Mechanics",
    description:
      "Factory-trained and certified technicians specializing in heavy-duty diesel platforms and commercial fleets."
  },
  {
    icon: <Cpu className="h-5 w-5" />,
    title: "Advanced Computer Diagnostics",
    description:
      "Dealer-level diagnostic tools and software for modern diesel engines, emissions, and control modules."
  },
  {
    icon: <Clock className="h-5 w-5" />,
    title: "Fast Turnaround",
    description:
      "Fleet-focused scheduling and workflow built to reduce downtime without compromising repair quality."
  },
  {
    icon: <BadgeCheck className="h-5 w-5" />,
    title: "Genuine Parts",
    description:
      "High-quality OEM and premium aftermarket components sourced for durability and long service intervals."
  },
  {
    icon: <Truck className="h-5 w-5" />,
    title: "Fleet Specialists",
    description:
      "Custom maintenance programs for operators managing multiple trucks, trailers, and equipment assets."
  },
  {
    icon: <AlertTriangle className="h-5 w-5" />,
    title: "Emergency Service",
    description:
      "Priority support and rapid-response repairs to keep mission-critical vehicles safely on the road."
  }
];

export function WhyChooseSection() {
  return (
    <section className="section-padding border-b border-border bg-secondary/40">
      <div className="container-max space-y-8">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground mb-2">
            Why Choose AutoGate
          </p>
          <h2 className="font-heading text-2xl md:text-3xl font-semibold">
            Built for Heavy-Duty, Designed for Fleets.
          </h2>
          <p className="text-sm text-muted-foreground mt-2">
            AutoGate Truck Repair combines technical depth, industrial tooling, and disciplined
            processes to deliver premium commercial truck service you can rely on.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.35, delay: index * 0.05 }}
            >
              <Card className="h-full hover:border-accent/60 transition-colors">
                <CardHeader className="flex flex-row items-center gap-3 mb-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-md bg-secondary border border-border/80 text-accent">
                    {reason.icon}
                  </div>
                  <CardTitle className="text-base">{reason.title}</CardTitle>
                </CardHeader>
                <CardDescription>{reason.description}</CardDescription>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


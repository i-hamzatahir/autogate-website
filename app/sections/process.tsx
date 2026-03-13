"use client";

import { motion } from "framer-motion";

const steps = [
  {
    step: "01",
    title: "Book Appointment",
    description:
      "Request an appointment online or by phone with your truck details and concern."
  },
  {
    step: "02",
    title: "Truck Diagnostics",
    description:
      "We perform visual checks and advanced computer diagnostics to identify the issue."
  },
  {
    step: "03",
    title: "Repair Estimate",
    description:
      "You receive a clear, itemized estimate with options and lead times before work begins."
  },
  {
    step: "04",
    title: "Professional Repair",
    description:
      "Certified technicians complete the repair using industrial tooling and quality parts."
  },
  {
    step: "05",
    title: "Final Quality Check",
    description:
      "Every repair passes a multi-point checklist and, when appropriate, a road test."
  },
  {
    step: "06",
    title: "Delivery",
    description:
      "We review the work performed, share findings, and schedule follow-up maintenance if needed."
  }
];

export function ProcessSection() {
  return (
    <section className="section-padding border-b border-border bg-background">
      <div className="container-max space-y-8">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground mb-2">
            Our Process
          </p>
          <h2 className="font-heading text-2xl md:text-3xl font-semibold">
            A Clear, Disciplined Repair Workflow.
          </h2>
        </div>

        <div className="space-y-5">
          {steps.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.35, delay: index * 0.05 }}
              className="relative flex gap-4 md:gap-6"
            >
              <div className="flex flex-col items-center">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-secondary border border-border text-[11px] font-semibold tracking-[0.18em]">
                  {step.step}
                </div>
                {index < steps.length - 1 && (
                  <div className="mt-1 h-full w-px bg-border/60 hidden md:block" />
                )}
              </div>
              <div className="pb-6">
                <h3 className="font-heading text-base md:text-lg font-semibold">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground mt-1 max-w-2xl">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


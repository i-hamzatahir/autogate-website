"use client";

import { motion } from "framer-motion";

export function AboutPreviewSection() {
  return (
    <section className="section-padding border-b border-border bg-secondary/40">
      <div className="container-max grid gap-8 md:grid-cols-2 items-center">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.4 }}
        >
          <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground mb-2">
            About AutoGate
          </p>
          <h2 className="font-heading text-2xl md:text-3xl font-semibold mb-3">
            Professional Heavy-Duty Truck Repair & Fleet Maintenance.
          </h2>
          <p className="text-sm text-muted-foreground mb-3">
            AutoGate Truck Repair is a professional heavy-duty truck service center specializing in
            diesel engine repair, fleet maintenance, and advanced truck diagnostics.
          </p>
          <p className="text-sm text-muted-foreground">
            Our certified technicians use state-of-the-art diagnostic equipment and high-quality
            parts to keep commercial trucks running safely and efficiently. Whether servicing a
            single truck or an entire fleet, AutoGate focuses on reliability, speed, and expert
            craftsmanship.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-3 gap-4"
        >
          <div className="glass-panel rounded-2xl p-4 text-center">
            <div className="text-2xl font-semibold text-accent">15+</div>
            <div className="text-xs text-muted-foreground uppercase tracking-[0.18em] mt-1">
              Years Experience
            </div>
          </div>
          <div className="glass-panel rounded-2xl p-4 text-center">
            <div className="text-2xl font-semibold text-accent">5000+</div>
            <div className="text-xs text-muted-foreground uppercase tracking-[0.18em] mt-1">
              Trucks Serviced
            </div>
          </div>
          <div className="glass-panel rounded-2xl p-4 text-center">
            <div className="text-2xl font-semibold text-accent">Certified</div>
            <div className="text-xs text-muted-foreground uppercase tracking-[0.18em] mt-1">
              Technicians
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}


"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { services } from "@/lib/utils";
import { Card, CardHeader, CardTitle, CardDescription } from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button";
import { Wrench, ScanLine, Cog, Disc, Cable, Snowflake, Ruler, Activity, Truck, Layers } from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  engine: <Wrench className="h-5 w-5" />,
  scan: <ScanLine className="h-5 w-5" />,
  settings: <Cog className="h-5 w-5" />,
  disc: <Disc className="h-5 w-5" />,
  cable: <Cable className="h-5 w-5" />,
  snowflake: <Snowflake className="h-5 w-5" />,
  ruler: <Ruler className="h-5 w-5" />,
  activity: <Activity className="h-5 w-5" />,
  truck: <Truck className="h-5 w-5" />,
  layers: <Layers className="h-5 w-5" />
};

export function ServicesPreviewSection() {
  return (
    <section className="section-padding border-b border-border bg-background">
      <div className="container-max space-y-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground mb-2">
              Services
            </p>
            <h2 className="font-heading text-2xl md:text-3xl font-semibold">
              Heavy-Duty Truck & Fleet Services
            </h2>
            <p className="text-sm text-muted-foreground max-w-2xl mt-2">
              Industrial-grade diagnostics, repair, and maintenance services designed exclusively
              for diesel trucks, semi-trucks, and commercial fleets.
            </p>
          </div>
          <Button asChild variant="outline">
            <Link href="/services">View All Services</Link>
          </Button>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {services.slice(0, 6).map((service, index) => (
            <motion.div
              key={service.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <Link href={`/services/${service.slug}`}>
                <Card className="h-full hover:translate-y-[-2px] hover:border-accent/60 transition-transform">
                  <CardHeader className="flex flex-row items-center gap-3 mb-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-md bg-secondary border border-border/80 text-accent">
                      {iconMap[service.icon]}
                    </div>
                    <div>
                      <CardTitle className="text-base">{service.name}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardDescription>{service.shortDescription}</CardDescription>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


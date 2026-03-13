import type { Metadata } from "next";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Service Packages | AutoGate Truck Repair",
  description:
    "Choose from basic truck service, comprehensive service, or premium fleet maintenance packages tailored to heavy-duty trucks and commercial fleets."
};

const packages = [
  {
    name: "Basic Truck Service",
    price: "Contact for pricing",
    highlight: "Best for single trucks and routine visits.",
    features: ["Inspection", "Oil change", "Brake check", "Fluid check"]
  },
  {
    name: "Comprehensive Service",
    tag: "Most Popular",
    price: "Fleet-optimized pricing",
    highlight: "Balanced coverage for trucks with higher utilization.",
    features: [
      "Full diagnostics",
      "Oil change",
      "Filter replacement",
      "Brake inspection",
      "Minor adjustments"
    ]
  },
  {
    name: "Premium Fleet Package",
    price: "Custom fleet pricing",
    highlight: "Designed for fleets that cannot afford downtime.",
    features: [
      "Everything in Comprehensive",
      "Engine tuning",
      "AC service",
      "Wheel alignment",
      "Priority repair"
    ]
  }
];

export default function ServicePackagesPage() {
  return (
    <div className="section-padding border-b border-border bg-background">
      <div className="container-max space-y-10">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground mb-2">
            Service Packages
          </p>
          <h1 className="font-heading text-3xl font-semibold">
            Structured Maintenance Packages for Heavy-Duty Trucks.
          </h1>
          <p className="text-sm text-muted-foreground mt-3">
            Select from clear, purpose-built packages for single trucks and commercial fleets, or
            work with AutoGate to design a custom maintenance program.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {packages.map((pkg) => (
            <Card
              key={pkg.name}
              className={`relative h-full flex flex-col justify-between ${
                pkg.tag ? "border-accent/80 shadow-glow-orange" : ""
              }`}
            >
              {pkg.tag && (
                <span className="absolute -top-3 right-4 rounded-full bg-accent px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em]">
                  {pkg.tag}
                </span>
              )}
              <div>
                <CardHeader>
                  <CardTitle className="text-lg">{pkg.name}</CardTitle>
                  <CardDescription>{pkg.highlight}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-sm font-semibold text-accent">
                    {pkg.price}
                  </div>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {pkg.features.map((feature) => (
                      <li key={feature} className="flex gap-2">
                        <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-accent" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </div>
              <CardContent className="pt-4">
                <Button asChild className="w-full">
                  <Link href="/book-appointment">Book Package</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}


import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { services } from "@/lib/utils";
import { Button } from "@/app/components/ui/button";
import Link from "next/link";

type Params = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export function generateMetadata({ params }: Params): Metadata {
  const service = services.find((s) => s.slug === params.slug);
  if (!service) {
    return {
      title: "Service | AutoGate Truck Repair"
    };
  }

  return {
    title: `${service.name} | AutoGate Truck Repair`,
    description: service.shortDescription
  };
}

export default function ServiceDetailPage({ params }: Params) {
  const service = services.find((s) => s.slug === params.slug);
  if (!service) return notFound();

  return (
    <div className="section-padding border-b border-border bg-background">
      <div className="container-max space-y-10">
        <div className="max-w-2xl space-y-3">
          <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground mb-1">
            Service Detail
          </p>
          <h1 className="font-heading text-3xl font-semibold">{service.name}</h1>
          <p className="text-sm text-muted-foreground">{service.description}</p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="glass-panel rounded-2xl p-6 space-y-3">
            <h2 className="font-heading text-lg font-semibold mb-2">
              What&apos;s Included
            </h2>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {service.highlights.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-accent" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="glass-panel rounded-2xl p-6 space-y-4">
            <h2 className="font-heading text-lg font-semibold mb-1">
              Ideal For
            </h2>
            <p className="text-sm text-muted-foreground">
              This service is designed for operators running heavy-duty trucks, semi-trucks, and
              commercial fleets who require reliable uptime, predictable performance, and
              professional documentation of repair history.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <Button asChild size="lg">
                <Link href="/book-appointment">Book This Service</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/contact">Talk to Service Advisor</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


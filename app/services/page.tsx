import type { Metadata } from "next";
import Link from "next/link";
import { services } from "@/lib/utils";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button";

export const metadata: Metadata = {
  title: "Services | AutoGate Truck Repair",
  description:
    "Explore heavy-duty truck repair, diesel diagnostics, transmission, brakes, electrical, AC, alignment, suspension, trailer repair, and fleet maintenance services."
};

export default function ServicesPage() {
  return (
    <div className="section-padding border-b border-border bg-background">
      <div className="container-max space-y-10">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground mb-2">
            Services
          </p>
          <h1 className="font-heading text-3xl font-semibold">
            Heavy-Duty Truck & Fleet Services
          </h1>
          <p className="text-sm text-muted-foreground mt-3">
            AutoGate Truck Repair focuses exclusively on commercial vehicles, diesel trucks, and
            fleets. Every service is engineered to minimize downtime and extend asset life.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {services.map((service) => (
            <Card key={service.slug} className="flex flex-col justify-between">
              <div>
                <CardHeader>
                  <CardTitle className="text-lg">{service.name}</CardTitle>
                </CardHeader>
                <CardDescription className="px-6">
                  {service.shortDescription}
                </CardDescription>
              </div>
              <CardContent className="pt-4">
                <Button asChild variant="outline" size="sm">
                  <Link href={`/services/${service.slug}`}>View Service Detail</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}


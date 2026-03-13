import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | AutoGate Truck Repair",
  description:
    "Learn about AutoGate Truck Repair, a professional heavy-duty truck service center focused on diesel engine repair, fleet maintenance, and advanced diagnostics."
};

export default function AboutPage() {
  return (
    <div className="section-padding border-b border-border bg-background">
      <div className="container-max space-y-10">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground mb-2">
            About
          </p>
          <h1 className="font-heading text-3xl font-semibold">
            AutoGate Truck Repair.
          </h1>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          <div className="md:col-span-2 space-y-4 text-sm text-muted-foreground">
            <p>
              AutoGate Truck Repair is a professional heavy-duty truck service center specializing
              in diesel engine repair, fleet maintenance, and advanced truck diagnostics. We were
              built from the ground up for commercial vehicles—not passenger cars.
            </p>
            <p>
              Our certified technicians use state-of-the-art diagnostic equipment, calibrated
              tooling, and high-quality parts to keep commercial trucks running safely and
              efficiently. From single owner-operator rigs to complex mixed fleets, AutoGate focuses
              on uptime, predictability, and clear communication.
            </p>
            <p>
              Every truck that enters our facility follows a disciplined workflow—from intake and
              diagnostics through repair, quality checks, and documented delivery. The result is a
              premium service experience that fleet managers and drivers can trust.
            </p>
          </div>
          <div className="space-y-4">
            <div className="glass-panel rounded-2xl p-5">
              <h2 className="font-heading text-lg font-semibold mb-3">
                By the Numbers
              </h2>
              <dl className="space-y-3 text-sm">
                <div className="flex items-baseline justify-between">
                  <dt className="text-muted-foreground">Years in operation</dt>
                  <dd className="text-accent font-semibold">15+</dd>
                </div>
                <div className="flex items-baseline justify-between">
                  <dt className="text-muted-foreground">Trucks serviced</dt>
                  <dd className="text-accent font-semibold">5000+</dd>
                </div>
                <div className="flex items-baseline justify-between">
                  <dt className="text-muted-foreground">Technician status</dt>
                  <dd className="text-accent font-semibold">Certified</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


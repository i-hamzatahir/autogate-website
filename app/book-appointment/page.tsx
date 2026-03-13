import type { Metadata } from "next";
import AppointmentForm from "./appointment-form";

export const metadata: Metadata = {
  title: "Book Appointment | AutoGate Truck Repair",
  description:
    "Book an appointment with AutoGate Truck Repair for heavy-duty truck repair, diesel diagnostics, and fleet maintenance services."
};

export default function BookAppointmentPage() {
  return (
    <div className="section-padding border-b border-border bg-background">
      <div className="container-max grid gap-10 lg:grid-cols-2">
        <div className="space-y-5">
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground mb-2">
              Book Appointment
            </p>
            <h1 className="font-heading text-3xl font-semibold">
              Schedule your heavy-duty truck service.
            </h1>
            <p className="text-sm text-muted-foreground mt-3">
              Tell us about your truck or fleet, what you&apos;re experiencing, and when you would
              like to come in. A service advisor will confirm your booking and review details.
            </p>
          </div>

          <div className="glass-panel rounded-2xl p-5 space-y-3 text-sm text-muted-foreground">
            <h2 className="font-heading text-sm font-semibold text-foreground">
              What to expect
            </h2>
            <ol className="list-decimal list-inside space-y-1">
              <li>We review your request and confirm availability.</li>
              <li>You drop off the truck at the agreed time.</li>
              <li>We perform diagnostics and share a clear estimate.</li>
              <li>Repairs are completed and quality-checked.</li>
            </ol>
          </div>
        </div>

        <AppointmentForm />
      </div>
    </div>
  );
}


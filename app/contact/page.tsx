import type { Metadata } from "next";
import ContactForm from "./contact-form";

export const metadata: Metadata = {
  title: "Contact | AutoGate Truck Repair",
  description:
    "Contact AutoGate Truck Repair for heavy-duty truck repair, diesel diagnostics, fleet maintenance, and service appointments."
};

export default function ContactPage() {
  return (
    <div className="section-padding border-b border-border bg-background">
      <div className="container-max grid gap-10 lg:grid-cols-2">
        <div className="space-y-5">
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground mb-2">
              Contact
            </p>
            <h1 className="font-heading text-3xl font-semibold">
              Get in touch with AutoGate.
            </h1>
            <p className="text-sm text-muted-foreground mt-3">
              Share your truck details, fleet size, or repair needs and a service advisor will
              respond with next steps.
            </p>
          </div>

          <div className="space-y-3 text-sm">
            <div>
              <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                Address
              </h2>
              <p className="mt-1">
                AutoGate Truck Repair
                <br />
                Industrial Area, Commercial Truck Zone
              </p>
            </div>
            <div>
              <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                Phone
              </h2>
              <p className="mt-1">
                <a href="tel:+10000000000" className="hover:text-accent">
                  +1 (000) 000-0000
                </a>
              </p>
            </div>
            <div>
              <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                Email
              </h2>
              <p className="mt-1">
                <a
                  href="mailto:service@autogatetruckrepair.com"
                  className="hover:text-accent"
                >
                  service@autogatetruckrepair.com
                </a>
              </p>
            </div>
            <div>
              <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                Working Hours
              </h2>
              <p className="mt-1 text-muted-foreground">
                Mon – Sat · 9:00 AM – 7:00 PM
              </p>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden border border-border bg-secondary/60">
            <iframe
              title="AutoGate Truck Repair Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509374!2d144.95565131584433!3d-37.817323979751955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sIndustrial%20Truck%20Repair!5e0!3m2!1sen!2s!4v1600000000000!5m2!1sen!2s"
              className="w-full h-64 border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        <ContactForm />
      </div>
    </div>
  );
}


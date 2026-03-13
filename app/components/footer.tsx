import Link from "next/link";
import { siteConfig } from "@/lib/utils";
import {
  Facebook,
  Instagram,
  Linkedin,
  Phone,
  Mail,
  MapPin
} from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-black">
      <div className="container-max py-10 md:py-14 grid gap-8 md:grid-cols-4">
        <div className="space-y-3 md:col-span-2">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-md bg-accent text-sm font-bold tracking-tight">
              AG
            </div>
            <div className="flex flex-col leading-tight">
              <span className="font-heading text-sm font-semibold tracking-wide uppercase">
                {siteConfig.name}
              </span>
              <span className="text-[11px] text-muted-foreground">
                {siteConfig.tagline}
              </span>
            </div>
          </div>
          <p className="text-sm text-muted-foreground max-w-lg">
            Professional heavy-duty truck and fleet repair facility specializing
            in diesel diagnostics, advanced repairs, and preventative
            maintenance for commercial vehicles.
          </p>
        </div>

        <div className="space-y-3">
          <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            Quick Links
          </h4>
          <div className="flex flex-col gap-2 text-sm">
            <Link href="/services" className="hover:text-accent">
              Services
            </Link>
            <Link href="/service-packages" className="hover:text-accent">
              Service Packages
            </Link>
            <Link href="/gallery" className="hover:text-accent">
              Gallery
            </Link>
            <Link href="/about" className="hover:text-accent">
              About
            </Link>
            <Link href="/contact" className="hover:text-accent">
              Contact
            </Link>
          </div>
        </div>

        <div className="space-y-3">
          <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            Contact
          </h4>
          <div className="space-y-2 text-sm">
            <p className="flex items-start gap-2">
              <MapPin className="h-4 w-4 mt-[2px] text-accent" />
              <span>
                AutoGate Truck Repair
                <br />
                Industrial Area, Commercial Truck Zone
              </span>
            </p>
            <p className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-accent" />
              <a href="tel:+10000000000" className="hover:text-accent">
                +1 (000) 000-0000
              </a>
            </p>
            <p className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-accent" />
              <a
                href="mailto:service@autogatetruckrepair.com"
                className="hover:text-accent"
              >
                service@autogatetruckrepair.com
              </a>
            </p>
            <p className="text-xs text-muted-foreground pt-1">
              Mon – Sat: 9:00 AM – 7:00 PM
            </p>
          </div>
          <div className="flex gap-3 pt-2">
            <a href="#" aria-label="Facebook" className="text-muted-foreground hover:text-accent">
              <Facebook className="h-4 w-4" />
            </a>
            <a href="#" aria-label="Instagram" className="text-muted-foreground hover:text-accent">
              <Instagram className="h-4 w-4" />
            </a>
            <a href="#" aria-label="LinkedIn" className="text-muted-foreground hover:text-accent">
              <Linkedin className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-border/60">
        <div className="container-max py-4 flex flex-col md:flex-row items-center justify-between gap-3 text-[11px] text-muted-foreground">
          <span>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</span>
          <span className="uppercase tracking-[0.18em]">
            Heavy-Duty • Diesel • Fleet
          </span>
        </div>
      </div>
    </footer>
  );
}


import type { Metadata } from "next";
import "./../styles/globals.css";
import { siteConfig } from "@/lib/utils";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import { WhatsAppFloatingButton } from "@/app/components/whatsapp-floating";
import { StickyAppointmentCta } from "@/app/components/sticky-appointment-cta";
import { Header } from "@/app/components/header";
import { Footer } from "@/app/components/footer";

export const metadata: Metadata = {
  title: "AutoGate Truck Repair | Heavy Duty Truck Service & Fleet Maintenance",
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    type: "website",
    title: "AutoGate Truck Repair | Heavy Duty Truck Service & Fleet Maintenance",
    description: siteConfig.description,
    url: siteConfig.url
  }
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background text-foreground flex flex-col"
        )}
      >
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppFloatingButton />
        <StickyAppointmentCta />
      </body>
    </html>
  );
}


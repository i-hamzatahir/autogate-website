"use client";

import Link from "next/link";
import { Button } from "@/app/components/ui/button";

export function StickyAppointmentCta() {
  return (
    <div className="fixed bottom-4 right-4 z-40 md:hidden">
      <Button asChild size="lg" className="rounded-full px-6 shadow-glow-orange">
        <Link href="/book-appointment">Book Appointment</Link>
      </Button>
    </div>
  );
}


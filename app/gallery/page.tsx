import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Gallery | AutoGate Truck Repair",
  description:
    "View the AutoGate Truck Repair workshop, heavy-duty equipment, engine diagnostics, wheel alignment, and commercial truck service environment."
};

const galleryItems = [
  {
    src: "/images/gallery-engine-diagnostics.jpg",
    alt: "Mechanic performing engine diagnostics on a heavy-duty truck"
  },
  {
    src: "/images/gallery-wheel-alignment.jpg",
    alt: "Truck wheel alignment machine in a modern workshop"
  },
  {
    src: "/images/gallery-workshop-floor.jpg",
    alt: "Clean, organized heavy-duty truck repair workshop"
  },
  {
    src: "/images/gallery-engine-bay.jpg",
    alt: "Open engine bay of a diesel truck under repair"
  },
  {
    src: "/images/gallery-brake-service.jpg",
    alt: "Commercial truck on lift for brake service"
  },
  {
    src: "/images/gallery-fleet-yard.jpg",
    alt: "Commercial trucks parked outside the repair facility"
  }
];

export default function GalleryPage() {
  return (
    <div className="section-padding border-b border-border bg-background">
      <div className="container-max space-y-8">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground mb-2">
            Gallery
          </p>
          <h1 className="font-heading text-3xl font-semibold">
            Inside the AutoGate Truck Repair Facility.
          </h1>
          <p className="text-sm text-muted-foreground mt-3">
            Professional-grade environment, equipment, and workflows designed specifically for
            heavy-duty diesel and commercial trucks.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {galleryItems.map((item) => (
            <div
              key={item.src}
              className="group relative overflow-hidden rounded-2xl border border-border/80 bg-secondary/60"
            >
              <div className="relative aspect-video w-full">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}


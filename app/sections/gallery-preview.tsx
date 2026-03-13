"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/app/components/ui/button";

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
  }
];

export function GalleryPreviewSection() {
  return (
    <section className="section-padding border-b border-border bg-secondary/40">
      <div className="container-max space-y-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground mb-2">
              Workshop Gallery
            </p>
            <h2 className="font-heading text-2xl md:text-3xl font-semibold">
              Built Like a Premium Truck Facility.
            </h2>
            <p className="text-sm text-muted-foreground max-w-2xl mt-2">
              See the environment your trucks are serviced in—industrial, organized, and purpose-built for heavy-duty commercial vehicles.
            </p>
          </div>
          <Button asChild variant="outline">
            <Link href="/gallery">View Full Gallery</Link>
          </Button>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.src}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.35, delay: index * 0.05 }}
              className="relative overflow-hidden rounded-2xl border border-border/80 bg-secondary/60"
            >
              <div className="relative aspect-video w-full">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover object-center hover:scale-105 transition-transform duration-500"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


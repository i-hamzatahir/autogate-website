"use client";

import { MessageCircle } from "lucide-react";
import { Button } from "@/app/components/ui/button";

export function WhatsAppFloatingButton() {
  return (
    <a
      href="https://wa.me/10000000000"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 left-4 z-40"
      aria-label="Chat on WhatsApp"
    >
      <Button
        size="icon"
        variant="secondary"
        className="rounded-full shadow-lg bg-[#25D366] hover:bg-[#1eb255]"
      >
        <MessageCircle className="h-5 w-5" />
      </Button>
    </a>
  );
}


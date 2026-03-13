import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const siteConfig = {
  name: "AutoGate Truck Repair",
  tagline: "Professional Heavy-Duty Truck Repair & Fleet Maintenance",
  description:
    "AutoGate Truck Repair provides professional heavy-duty truck repair, diesel diagnostics, and fleet maintenance in a premium, industrial-grade workshop.",
  url: "https://autogatetruckrepair.com"
};

export type Service = {
  slug: string;
  name: string;
  shortDescription: string;
  description: string;
  highlights: string[];
  icon: string;
};

export const services: Service[] = [
  {
    slug: "truck-engine-repair",
    name: "Truck Engine Repair",
    shortDescription: "Complete heavy-duty diesel engine repair and overhaul.",
    description:
      "From minor engine issues to full overhauls, AutoGate’s certified diesel mechanics restore heavy-duty engines to peak performance with OEM-grade parts and rigorous testing.",
    highlights: [
      "In-frame and out-of-frame overhauls",
      "OEM-spec torque and calibration",
      "Coolant, fuel, and oil system repairs",
      "Aftertreatment & emissions system integration checks"
    ],
    icon: "engine"
  },
  {
    slug: "diesel-engine-diagnostics",
    name: "Diesel Engine Diagnostics",
    shortDescription: "Advanced computer diagnostics for modern diesel engines.",
    description:
      "We use dealer-level diagnostic tools to quickly pinpoint issues in modern diesel engines and electronic control systems, minimizing downtime for single trucks and fleets.",
    highlights: [
      "OEM-level scan tools and software",
      "Live data logging and analysis",
      "Fault code tracing and resolution",
      "Preventative diagnostic reports"
    ],
    icon: "scan"
  },
  {
    slug: "transmission-repair",
    name: "Transmission Repair",
    shortDescription: "Manual and automatic heavy-duty transmission repair.",
    description:
      "Precision transmission diagnostics, repairs, and rebuilds for heavy-duty trucks, ensuring smooth shifting, pulling power, and reliable performance under load.",
    highlights: [
      "Clutch and flywheel service",
      "Gear and bearing replacement",
      "Hydraulic and electronic controls",
      "Road testing under real conditions"
    ],
    icon: "settings"
  },
  {
    slug: "brake-system-service",
    name: "Brake System Service",
    shortDescription: "Air brake and hydraulic brake inspection & repair.",
    description:
      "Safety-first brake inspections and repairs for air and hydraulic brake systems, keeping your heavy-duty trucks compliant and safe on the road.",
    highlights: [
      "Air brake diagnostics and repair",
      "Drum, disc, and lining replacement",
      "ABS and electronic brake systems",
      "DOT-compliant inspections"
    ],
    icon: "disc"
  },
  {
    slug: "electrical-system-repair",
    name: "Electrical System Repair",
    shortDescription: "Wiring, sensors, lighting, and control modules.",
    description:
      "We track down complex electrical issues in commercial trucks, from intermittent shorts to module failures, using methodical testing and high-quality components.",
    highlights: [
      "Battery and charging system testing",
      "Wiring harness repairs",
      "Body control and engine control modules",
      "Lighting and accessory circuits"
    ],
    icon: "cable"
  },
  {
    slug: "truck-ac-repair",
    name: "Truck AC Repair",
    shortDescription: "Cab climate control and AC system diagnostics.",
    description:
      "Keep drivers comfortable and focused with properly maintained HVAC systems, from compressors and condensers to electronic climate controls.",
    highlights: [
      "AC performance diagnostics",
      "Compressor and component replacement",
      "Refrigerant recovery and recharge",
      "Climate control calibration"
    ],
    icon: "snowflake"
  },
  {
    slug: "wheel-alignment",
    name: "Wheel Alignment",
    shortDescription: "Precision alignment for heavy-duty trucks and trailers.",
    description:
      "Advanced alignment equipment ensures straight tracking, even tire wear, and fuel efficiency across your commercial trucks and trailers.",
    highlights: [
      "Heavy-duty alignment equipment",
      "Axle and chassis inspections",
      "Steering and suspension checks",
      "Before-and-after alignment reports"
    ],
    icon: "ruler"
  },
  {
    slug: "suspension-repair",
    name: "Suspension Repair",
    shortDescription: "Ride, handling, and load stability repairs.",
    description:
      "We repair and upgrade heavy-duty suspension components to improve stability, driver comfort, and cargo protection in demanding conditions.",
    highlights: [
      "Leaf spring and air suspension service",
      "Shocks, bushings, and linkages",
      "Ride height and leveling systems",
      "Load-rated component upgrades"
    ],
    icon: "activity"
  },
  {
    slug: "trailer-repair",
    name: "Trailer Repair",
    shortDescription: "Complete trailer inspection and repair services.",
    description:
      "From lighting and brakes to structural components, we keep commercial trailers roadworthy and ready for heavy use.",
    highlights: [
      "Trailer brake and lighting systems",
      "Suspension and axle service",
      "Flooring and structural repairs",
      "Landing gear and coupler service"
    ],
    icon: "truck"
  },
  {
    slug: "fleet-maintenance",
    name: "Fleet Maintenance",
    shortDescription: "Preventative maintenance programs for fleets.",
    description:
      "Custom maintenance programs that reduce breakdowns, control costs, and extend the life of every truck in your fleet.",
    highlights: [
      "Custom PM schedules",
      "Service history tracking",
      "Downtime and cost reporting",
      "Priority booking and support"
    ],
    icon: "layers"
  }
];


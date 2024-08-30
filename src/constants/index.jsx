import { BotMessageSquare } from "lucide-react";
import { BatteryCharging } from "lucide-react";
import { Fingerprint } from "lucide-react";
import { ShieldHalf } from "lucide-react";
import { PlugZap } from "lucide-react";
import { GlobeLock } from "lucide-react";

export const navLinks = [
  { label: "Home", href: "#" },
  { label: "Workflow", href: "#" },
  { label: "Pricing", href: "#" },
  { label: "Contact Us", href: "#" },
];

export const features = [
  {
    icon: <BotMessageSquare />,
    title: "Drag-and-Drop Interface",
    description:
      "Easily create and customize VR environments using an intuitive drag-and-drop interface.",
  },
  {
    icon: <BatteryCharging />,
    title: "Real-Time Preview",
    description:
      "Develop VR experiences that function smoothly on various platforms, including mobile, desktop, and VR headsets.",
  },
  {
    icon: <PlugZap />,
    title: "Collaboration Tools",
    description:
      "Collaborate effortlessly with your team on VR projects in real-time, ensuring smooth workflow and idea exchange.",
  },
  {
    icon: <GlobeLock />,
    title: "Analytics Dashboard",
    description:
      "Access critical insights on user engagement within your VR applications via a comprehensive analytics dashboard.",
  },
  {
    icon: <ShieldHalf />,
    title: "Built-in Templates",
    description:
      "Kickstart your VR projects with pre-designed templates for diverse applications and virtual settings.",
  },
  {
    icon: <Fingerprint />,
    title: "Multi-Platform Compatibility",
    description:
      "Develop VR experiences that function smoothly on various platforms, including mobile, desktop, and VR headsets.",
  },
];

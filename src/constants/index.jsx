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

export const checklistElements = [
  {
    title: "Seamless Code Integration",
    description:
      "Effortlessly integrate code changes with automated conflict resolution and merge tools.",
  },
  {
    title: "Thorough Code Reviews",
    description:
      "Ensure high-quality code through detailed reviews and collaborative feedback processes.",
  },
  {
    title: "AI-Powered Code Suggestions",
    description:
      "Utilize AI tools to get intelligent code suggestions and optimize development efficiency.",
  },
  {
    title: "Instant Work Sharing",
    description:
      "Quickly share your work with team members or stakeholders with just a few clicks.",
  },
];

export const pricingOptions = [
  {
    title: "Free",
    price: "$0",
    features: [
      "Basic board interaction",
      "5 GB cloud storage",
      "Fundamental analytics reports",
      "Standard data protection",
    ],
  },
  {
    title: "Pro",
    price: "$10",
    features: [
      "Extended board interaction",
      "10 GB cloud storage",
      "Detailed analytics insights",
      "Advanced data encryption",
    ],
  },
  {
    title: "Enterprise",
    price: "$200",
    features: [
      "Comprehensive board interaction",
      "Unlimited cloud storage",
      "In-depth analytics and reporting",
      "Private Mood",
    ],
  },
];

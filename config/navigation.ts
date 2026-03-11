import { Inbox, Users, Sparkles, Workflow, Target } from "lucide-react";

export interface NavItemType {
  name: string;
  href: string;
  icon: any;
}

export const navigation: NavItemType[] = [
  {
    name: "Inbox",
    href: "/dashboard/extracting",
    icon: Inbox,
  },
  {
    name: "Contacts",
    href: "/contacts",
    icon: Users,
  },
  {
    name: "AI Employees",
    href: "/ai-employees",
    icon: Sparkles,
  },
  {
    name: "Workflows",
    href: "/workflows",
    icon: Workflow,
  },
  {
    name: "Campaigns",
    href: "/campaigns",
    icon: Target,
  },
];
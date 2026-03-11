"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NavItemType } from "@/config/navigation";

type NavItemProps = NavItemType & {
  mobile?: boolean;
  onClick?: () => void;
};

export default function NavItem({ name, href, icon: Icon, mobile, onClick }: NavItemProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  if (mobile) {
    return (
      <Link
        href={href}
        onClick={onClick}
        className={`flex items-center gap-3 px-3 py-[10px] rounded-[5.61px] font-[556] text-[11px] leading-[100%] tracking-[0] transition-colors duration-150
          ${
            isActive
              ? "bg-gray-200 text-black border-[0.7px] border-[#D8DEE4]"
              : "text-gray-600 hover:bg-gray-50 hover:text-black"
          }`}
      >
        <Icon size={16} className={isActive ? "text-pink-500" : "text-gray-400"} />
        {name}
      </Link>
    );
  }

  return (
    <Link
      href={href}
      className={`flex items-center gap-2 px-3 py-2 rounded-[5.61px] font-[556] text-[9.82px] text-[black] leading-[100%] tracking-[0]
        ${
          isActive
            ? "bg-gray-200 text-black border-[0.7px] border-[#D8DEE4]"
            : "text-[#EFF2F2] hover:text-black"
        }`}
    >
      <Icon size={16} />
      {name}
    </Link>
  );
}

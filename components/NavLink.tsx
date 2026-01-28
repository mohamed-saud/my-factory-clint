"use client"; // This is a client component

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavLink = ({
  href,
  children,
  className,
  activeClassName,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
  activeClassName?: string;
}) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  // Combine default, active, and any other passed class names
  const combinedClassName =
    `${className} ${isActive ? activeClassName : ""}`.trim();

  return (
    <Link href={href} className={combinedClassName}>
      {children}
    </Link>
  );
};

export default NavLink;

"use client";
import { cn } from "@/lib/utils";
import { Home, Plus, Settings, Users, Wallet } from "lucide-react";
import { usePathname } from "next/dist/client/components/navigation";
import Link from "next/link";
import NavLink from "../NavLink";

export default function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[480px] bg-white/95 dark:bg-background-dark/95 backdrop-blur-md border-t border-gray-100 dark:border-gray-800 flex justify-around items-center py-3 px-6 z-50">
      <NavLink
        activeClassName="text-primary dark:text-white"
        href="/"
        className="flex flex-col items-center gap-1 text-[#616f89] dark:text-gray-400"
      >
        <span className="material-symbols-outlined">
          <Home />
        </span>
        <span className="text-[10px] font-bold uppercase sr-only">Home</span>
      </NavLink>
      <NavLink
        activeClassName="text-primary dark:text-white"
        href="/Wallet"
        className="flex flex-col items-center gap-1 text-[#616f89] dark:text-gray-400"
      >
        <span className="material-symbols-outlined">
          <Wallet />
        </span>
        <span className="text-[10px] font-bold uppercase sr-only">Finance</span>
      </NavLink>
      <div className="relative -top-8">
        <button className="bg-primary text-white h-14 w-14 rounded-full shadow-lg shadow-primary/40 flex items-center justify-center border-4 border-white dark:border-background-dark">
          <span className="material-symbols-outlined text-3xl">
            <Plus />
          </span>
        </button>
      </div>
      <NavLink
        activeClassName="text-primary dark:text-white"
        href="/customers"
        className="flex flex-col items-center gap-1 text-[#616f89] dark:text-gray-400"
      >
        <span className="material-symbols-outlined">
          <Users />
        </span>
        <span className="text-[10px] font-bold uppercase sr-only">Clients</span>
      </NavLink>
      <NavLink
        activeClassName="text-primary dark:text-white"
        href="/settings"
        className="flex flex-col items-center gap-1 text-[#616f89] dark:text-gray-400"
      >
        <span className="material-symbols-outlined">
          <Settings />
        </span>
        <span className="text-[10px] font-bold uppercase sr-only">
          Settings
        </span>
      </NavLink>
    </nav>
    // <nav className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[480px] bg-white/95 dark:bg-background-dark/95 backdrop-blur-md border-t flex justify-around py-3 z-50">
    //   {["dashboard", "account_balance_wallet"].map((i) => (
    //     <NavItem key={i} icon={i} />
    //   ))}

    //   <button className="relative -top-8 bg-primary text-white h-14 w-14 rounded-full shadow-lg flex items-center justify-center">
    //     <span className="material-symbols-outlined text-3xl">add</span>
    //   </button>

    //   {["group", "settings"].map((i) => (
    //     <NavItem key={i} icon={i} />
    //   ))}
    // </nav>
  );
}

function NavItem({ icon }: { icon: string }) {
  return (
    <button className="flex flex-col items-center gap-1 text-muted-foreground">
      <span className="material-symbols-outlined">{icon}</span>
      <span className="text-[10px] font-bold uppercase">
        {icon.split("_")[0]}
      </span>
    </button>
  );
}

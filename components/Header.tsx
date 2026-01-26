import { Bell, Menu } from "lucide-react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
export default function Header() {
  return (
    <header className="sticky top-0 z-50 flex items-center bg-white/80 dark:bg-background-dark/80 backdrop-blur-md p-4 pb-2 justify-between border-b border-gray-100 dark:border-gray-800">
      <div className="text-[#111318] dark:text-white flex size-10 shrink-0 items-center justify-start">
        <span className="material-symbols-outlined text-2xl">
          <Sheet>
            <SheetTrigger>
              <Menu />
            </SheetTrigger>
            <SheetContent side="left">
              <SheetHeader>
                <SheetTitle>Are you absolutely sure?</SheetTitle>
                <SheetDescription>
                  This action cannot be undone.
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </span>
      </div>
      <h2 className="text-[#111318] dark:text-white text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center">
        Factory Overview
      </h2>
      <div className="flex w-10 items-center justify-end">
        <button className="flex cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 w-10 bg-transparent text-[#111318] dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800">
          <span className="material-symbols-outlined text-2xl">
            <Bell />
          </span>
        </button>
      </div>
    </header>
  );
}

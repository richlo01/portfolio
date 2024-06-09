"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  return (
    <header className="uppercase grid grid-cols-12 gap-x-3 w-full h-20 text-sm font-medium tracking-wide items-center p-5">
      <Link href="/" className="col-span-2">
        Richard Lopez
      </Link>
      <Link
        href="/projects"
        className={cn(
          pathname === "/projects" ? "underline underline-offset-4" : null
        )}
      >
        Works
      </Link>
      <Link
        href="/resume"
        className={cn(
          "col-start-11",
          pathname === "/resume" ? "underline underline-offset-4" : null
        )}
      >
        Resume
      </Link>
      <Link
        href="/contacts"
        className={cn(
          "col-start-12",
          pathname === "/contacts" ? "underline underline-offset-4" : null
        )}
      >
        Get in touch.
      </Link>
    </header>
  );
};

export default Navbar;

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function NavbarMobile() {
  const pathname = usePathname();

  return (
    <div className="flex justify-between items-center px-5 h-20 sm:hidden uppercase tracking-wide font-medium">
      <div className="flex flex-col justify-between">
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
      </div>
      <div className="flex flex-col">
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
      </div>
    </div>
  );
}

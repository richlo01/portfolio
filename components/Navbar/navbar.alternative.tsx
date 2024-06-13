import React, { useState } from "react";
import { cn } from "../../lib/utils";
import { GridContainer } from "../GridContainer";
import Link from "next/link";

const pages = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Works",
    href: "/projects",
  },
  {
    title: "Resume",
    href: "/resume",
  },
  {
    title: "Contact Me.",
    href: "/contacts",
  },
];

export function NavbarAlt({ className }: { className?: string }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div
        className={cn(
          "fixed w-full top-0 z-50 -translate-y-full transition-all",
          className
        )}
      >
        <div
          className={cn(
            "w-full bg-black text-neutral-50 px-5 flex items-center justify-between text-xs tracking-widest transition-all h-10"
          )}
        >
          <Link href={"/"} className="col-span-2 uppercase tracking-widest">
            Richard Lopez
          </Link>
          <button
            className="col-start-12 uppercase text-end"
            onClick={() => setIsOpen(!isOpen)}
          >
            Menu
          </button>
        </div>
      </div>

      <div
        className={cn(
          "w-full h-full -translate-y-full fixed top-0 transition-all duration-700 cubic-transition z-[51]",
          isOpen && "translate-y-0"
        )}
      >
        <GridContainer className="bg-black text-neutral-50 pb-16">
          <div className="col-span-full h-10 flex items-center justify-between">
            <span className="uppercase text-xs tracking-widest">
              Richard Lopez
            </span>
            <button
              onClick={() => setIsOpen(false)}
              className="uppercase text-xs"
            >
              Close
            </button>
          </div>
          <div className="order-last lg:order-none col-span-full lg:col-start-9 flex flex-col">
            <span className="text-xs uppercase mb-3 lg:mb-10 tracking-widest">
              Socials
            </span>
            <Link href="/" className="col-start-3">
              LinkedIn
            </Link>
            <Link href="/" className="col-start-3">
              GitHub
            </Link>
            <Link href="/" className="col-start-3">
              Instagram
            </Link>
            <Link href="/" className="col-start-3">
              lopezrs1201@gmail.com
            </Link>
          </div>
          <div className="col-span-full lg:col-start-11 lg:col-span-2 flex flex-col mt-auto">
            <span className="text-xs uppercase mb-3 lg:mb-10 tracking-widest">
              Pages
            </span>
            {pages.map((p, i) => (
              <Link
                key={"globalLinks" + i}
                href={p.href}
                className="text-5xl lg:text-3xl font-medium hover:text-neutral-400 capitalize"
                onClick={() => setIsOpen(!isOpen)}
              >
                {p.title}
              </Link>
            ))}
          </div>
        </GridContainer>
      </div>
    </>
  );
}

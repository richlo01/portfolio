"use client";

import "../globals.css";
import { neueMontreal } from "../fonts";
import { Providers } from "../providers";
import { NavbarAlt } from "@/components/Navbar/navbar.alternative";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";
import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar/navbar";
import { Footer } from "@/components/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [showAltNav, setShowAltNav] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 80) {
      setShowAltNav(true);
    } else {
      setShowAltNav(false);
    }
  });

  return (
    <html lang="en">
      <body className={[neueMontreal.className].join(" ")}>
        <Navbar />
        <NavbarAlt className={cn(showAltNav && "translate-y-0")} />
        <Providers>
          <main>{children}</main>
        </Providers>
        <Footer />
      </body>
    </html>
  );
}

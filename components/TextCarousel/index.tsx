import React from "react";
import { cn } from "../../lib/utils";
import Marquee from "react-fast-marquee";

export function TextCarousel({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  return (
    <div className={cn("w-full", className)}>
      <Marquee className={cn("text-[125px] lg:text-[185px]")} speed={150}>
        {text}
        {text}
      </Marquee>
    </div>
  );
}

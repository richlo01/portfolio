import React from "react";
import { cn } from "../../lib/utils";

export function HR({
  title,
  className,
}: {
  title?: string;
  className?: string;
}) {
  return (
    <div className={cn("flex flex-col px-3 lg:px-5 my-12", className)}>
      <div className="h-px bg-neutral-300 w-full mb-10" />
      <h5 className="uppercase text-xs tracking-widest">{title}</h5>
    </div>
  );
}

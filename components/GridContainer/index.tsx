import { cn } from "@/lib/utils";
import React from "react";

export function GridContainer({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "grid grid-cols-4 lg:grid-cols-12 gap-x-3 gap-y-5 px-5",
        className
      )}
    >
      {children}
    </div>
  );
}

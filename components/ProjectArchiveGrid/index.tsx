import { GridContainer } from "../GridContainer";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Project } from "@/sanity.types";
import { decodeAssetId, urlFor } from "@/sanity/sanity-utils";
import { VerticalSeparator } from "../VerticalSeparator";
import { ImageFeature } from "../ImageFeature";

export function ProjectArchiveGrid({
  projects,
  limit,
  className,
}: {
  projects?: Project[];
  limit?: number;
  className?: string;
}) {
  return (
    <div className={cn("mt-5 mb-10 flex flex-wrap px-4 gap-y-10", className)}>
      {projects?.slice(0, limit || projects?.length).map((p, i) => (
        <Link
          href={`/projects/${p.slug}`}
          key={p._id}
          className={cn(
            "flex flex-col lg:basis-1/3 px-1 hover:brightness-95 transition"
          )}
        >
          <div className="flex gap-x-2 roboto-mono uppercase tracking-tighter">
            {String(i + 1).padStart(2, "0")}
            <VerticalSeparator />
            {p.name}
            <VerticalSeparator />
            {p.tag}
          </div>
          {p.images && p.images.length > 0 ? (
            <ImageFeature
              projectImage={p.images[0]}
              className="w-full aspect-square"
            />
          ) : (
            <div className="bg-neutral-200 flex h-full p-5">
              <span className="mt-auto text-3xl">{p.name}</span>
            </div>
          )}
        </Link>
      ))}
    </div>
  );
}

import { GridContainer } from "../GridContainer";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Project } from "@/sanity.types";
import { decodeAssetId, urlFor } from "@/sanity/sanity-utils";
import { VerticalSeparator } from "../VerticalSeparator";

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
    <GridContainer className={cn("mt-5 mb-10", className)}>
      {projects?.slice(0, limit || projects?.length).map((p, i) => (
        <Link
          href={`/projects/${p.slug}`}
          key={p._id}
          className={cn("col-span-2 lg:col-span-4 flex flex-col gap-y-3")}
        >
          <div className="flex gap-x-2 roboto-mono uppercase tracking-tighter">
            {String(i + 1).padStart(2, "0")}
            <VerticalSeparator />
            {p.name}
            <VerticalSeparator />
            {p.tag}
          </div>
          {p.images && p.images.length > 0 ? (
            <Image
              src={urlFor(p.images[0]).url()}
              alt={p?.images[0]?.alt ?? ""}
              width={
                decodeAssetId(p.images[0]!.asset!._ref).dimensions.width ?? 3000
              }
              height={
                decodeAssetId(p.images[0]!.asset!._ref).dimensions.height ??
                3000
              }
              className="object-cover w-full max-h-[75vh]"
            />
          ) : (
            <div className="bg-neutral-200 flex h-full p-5">
              <span className="mt-auto text-3xl">{p.name}</span>
            </div>
          )}
        </Link>
      ))}
    </GridContainer>
  );
}

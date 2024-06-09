import { cn } from "@/lib/utils";
import { Project } from "@/sanity.types";
import Link from "next/link";
import Image from "next/image";
import { decodeAssetId, urlFor } from "@/sanity/sanity-utils";

export function ProjectArchiveList({
  projects,
  limit,
  className,
}: {
  projects?: Project[];
  limit?: number;
  className?: string;
}) {
  return (
    <ul
      className={cn(
        "flex flex-col px-5 *:border-b *:border-b-neutral-700 mb-10",
        className
      )}
    >
      {projects?.slice(0, limit ?? projects.length).map((p, i) => (
        <li key={p._id} className="group py-1 relative">
          <Link
            href={`/projects/${p.slug}`}
            className={"grid grid-cols-12 group-hover:text-neutral-50"}
          >
            <span className="col-span-2">{String(i + 1).padStart(2, "0")}</span>
            <span className="col-span-4">{p.name}</span>
            <span className="col-span-2">{p.tag}</span>
          </Link>
          <div
            className={cn(
              "absolute hidden right-0 top-0 group-hover:block aspect-video w-96 z-10"
            )}
          >
            {p.images && p.images.length > 0 && (
              <Image
                src={urlFor(p.images[0]).url()}
                alt={p?.images[0]?.alt ?? ""}
                width={
                  decodeAssetId(p.images[0]!.asset!._ref).dimensions.width ??
                  3000
                }
                height={
                  decodeAssetId(p.images[0]!.asset!._ref).dimensions.height ??
                  3000
                }
                className="w-full h-full object-cover"
              />
            )}
          </div>
          <div
            className={cn(
              "w-full h-full max-h-0 absolute left-0 bottom-0 group-hover:max-h-full bg-black transition-all -z-10"
            )}
          />
        </li>
      ))}
    </ul>
  );
}

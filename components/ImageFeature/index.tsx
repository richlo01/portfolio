import { cn } from "@/lib/utils";
import { Project } from "@/sanity.types";
import { decodeAssetId, urlFor } from "@/sanity/sanity-utils";
import Image from "next/image";

export type ProjectImages = Exclude<Project["images"], null | undefined>[0];

export function ImageFeature({
  projectImage,
  className,
}: {
  projectImage: ProjectImages;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "h-full w-full relative flex items-center justify-center overflow-hidden",
        className
      )}
    >
      <Image
        src={urlFor(projectImage).url()}
        alt={projectImage?.alt ?? ""}
        width={100}
        height={100}
        className="h-full w-full object-cover -z-10 absolute top-0 blur-lg scale-110"
      />
      <Image
        src={urlFor(projectImage).url()}
        alt={projectImage?.alt ?? ""}
        width={
          decodeAssetId(projectImage!.asset!._ref).dimensions.width ?? 3000
        }
        height={
          decodeAssetId(projectImage!.asset!._ref).dimensions.height ?? 3000
        }
        className="h-3/4 w-3/4 object-contain"
      />
    </div>
  );
}

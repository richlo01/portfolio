"use client";

import { ButtonHightlight } from "@/components/ButtonHighlight";
import { GridContainer } from "@/components/GridContainer";
import { HR } from "@/components/HR";
import { ProjectArchiveGrid } from "@/components/ProjectArchiveGrid";
import { ProjectArchiveList } from "@/components/ProjectArchiveList";
import TextReveal from "@/components/TextReveal";
import { cn } from "@/lib/utils";
import { Project } from "@/sanity.types";
import { urlFor } from "@/sanity/sanity-utils";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense, useState } from "react";

function ProjectBlock({ projects }: { projects: Project[] }) {
  const searchParams = useSearchParams();
  const view = searchParams.get("view");
  const [isGrid, useIsGrid] = useState<boolean>(view === "grid");
  return (
    <>
      <div className="flex w-full justify-end px-3 lg:px-5">
        <div className="flex items-center gap-x-5 ml-auto">
          <Link href={{ pathname: "/projects", query: { view: "list" } }}>
            <ButtonHightlight
              highlight={!isGrid}
              onClick={() => useIsGrid(false)}
            >
              List
            </ButtonHightlight>
          </Link>
          <span>/</span>
          <Link href={{ pathname: "/projects", query: { view: "grid" } }}>
            <ButtonHightlight
              highlight={isGrid}
              onClick={() => useIsGrid(true)}
            >
              Grid
            </ButtonHightlight>{" "}
          </Link>
        </div>
      </div>

      {!isGrid ? (
        <ProjectArchiveList projects={projects} />
      ) : (
        <ProjectArchiveGrid projects={projects} />
      )}
    </>
  );
}

export function ProjectClient({ projects }: { projects: Project[] }) {
  const searchParams = useSearchParams();
  const view = searchParams.get("view");
  const [isGrid, useIsGrid] = useState<boolean>(view === "grid");

  return (
    <>
      <GridContainer>
        <div className="col-span-full flex items-start relative">
          <TextReveal
            className="text-8xl lg:text-9xl uppercase"
            text={"All Works"}
            as="h1"
          />
          <span className="text-xl absolute right-0 top-0 lg:static">
            [ {projects.length} ]
          </span>
        </div>
      </GridContainer>
      <HR title={"Works"} />

      <Suspense>
        <ProjectBlock projects={projects} />
      </Suspense>
    </>
  );
}

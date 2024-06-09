"use client";

import { ButtonHightlight } from "@/components/ButtonHighlight";
import { GridContainer } from "@/components/GridContainer";
import { HR } from "@/components/HR";
import { ProjectArchiveGrid } from "@/components/ProjectArchiveGrid";
import { ProjectArchiveList } from "@/components/ProjectArchiveList";
import { cn } from "@/lib/utils";
import { Project } from "@/sanity.types";
import { urlFor } from "@/sanity/sanity-utils";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

export function ProjectClient({ projects }: { projects: Project[] }) {
  const searchParams = useSearchParams();
  const view = searchParams.get("view");
  const [isGrid, useIsGrid] = useState<boolean>(view === "grid");

  return (
    <>
      <GridContainer>
        <div className="col-span-full flex items-start">
          <h1 className="text-9xl uppercase">All Works</h1>
          <span className="text-xl">[ {projects.length} ]</span>
        </div>
      </GridContainer>
      <HR title={"Works"} />

      <GridContainer>
        <div className="col-start-12 flex items-center gap-x-5 ml-auto">
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
      </GridContainer>

      {!isGrid ? (
        <ProjectArchiveList projects={projects} />
      ) : (
        <ProjectArchiveGrid projects={projects} />
      )}
    </>
  );
}

"use client";

import ButtonUnderline from "@/components/ButtonUnderline";
import { GridContainer } from "@/components/GridContainer";
import { ImageFeature } from "@/components/ImageFeature";
import TextReveal from "@/components/TextReveal";
import { VerticalSeparator } from "@/components/VerticalSeparator";
import { Project } from "@/sanity.types";
import { PortableText } from "@portabletext/react";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export function ProjectItemClient({ project }: { project: Project }) {
  return (
    <>
      <GridContainer className="relative">
        <div className="lg:col-span-6 flex flex-col justify-between pb-5">
          <TextReveal
            className="text-8xl uppercase col-span-full"
            text={project?.name ?? ""}
            as="h1"
          />
          <GridContainer className="px-0">
            <div className="px-0 col-span-6">
              <div className="flex flex-col gap-y-5 w-full">
                <div className="flex gap-x-2 font-medium  text-lg">
                  {project.name}
                  <VerticalSeparator />
                  {project.tag}
                </div>
                {project.content && (
                  <PortableText value={project.content}></PortableText>
                )}
              </div>
              <div className="px-0 lg:col-span-6 mt-10">
                <Link href={project?.url ?? "/"} className="h-full w-full">
                  <ButtonUnderline
                    className="py-6"
                    icon={<ArrowUpRight strokeWidth={1} />}
                  >
                    Visit Project
                  </ButtonUnderline>
                </Link>
              </div>
            </div>
          </GridContainer>
        </div>
        <div className="lg:col-span-6 h-[calc(100vh-5rem)] pb-5 lg:sticky top-10">
          {project.images && project.images.length > 0 && (
            <ImageFeature projectImage={project.images[0]} />
          )}
        </div>
      </GridContainer>
      <GridContainer className="mb-10">
        {project.images &&
          project.images.length > 0 &&
          project.images.map((p, i) => {
            if (i === 0) {
              return null;
            } else if (i % 3 === 0) {
              return (
                <ImageFeature
                  projectImage={p}
                  className={"col-span-full aspect-video"}
                />
              );
            }
            return (
              <ImageFeature
                projectImage={p}
                className={"lg:col-span-6 lg:aspect-square"}
              />
            );
          })}
      </GridContainer>
    </>
  );
}

/*
<div>
            <header className="flex flex-wrap overflow-hidden w-full gap-4 py-6">
                <h1 className="text-7xl font-extrabold">{project.name}</h1>

                <a 
                    href={project.url}
                    title="View Project"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-full my-auto group transition duration-300"
                >
                    View Project
                    <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-indigo-600"></span>
                </a>
            </header>
            <Image
                src={project.image}
                alt={project.alt}
                height={750}
                width={1200}
                className="object-cover h-full w-full rounded-lg aspect-video"
            />
            <div className="mx-4 py-4 mx-auto prose dark:prose-invert">
                <PortableText value={project.content}></PortableText>
            </div>
        </div>
    )
    */

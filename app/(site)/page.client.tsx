"use client";

import React from "react";
import profilepic from "../../public/profilepic.jpg";
import { HR } from "../../components/HR";
import { TextCarousel } from "@/components/TextCarousel";
import { GridContainer } from "@/components/GridContainer";
import Image from "next/image";
import richardlopez from "../../public/richardlopez.svg";
import ButtonUnderline from "@/components/ButtonUnderline";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { urlFor } from "@/sanity/sanity-utils";
import { Project } from "@/sanity.types";
import { cn } from "@/lib/utils";
import { ProjectArchiveGrid } from "@/components/ProjectArchiveGrid";

export function HomeClient({ projects }: { projects: Project[] }) {
  return (
    <>
      <div className="overflow-hidden">
        <div className="h-[calc(100dvh-5rem)] relative">
          <div className="flex justify-between px-5 pt-8">
            <p className="uppercase max-w-96">
              Richard is a full-stack developer based in Las Vegas, NV, USA.
              Currently a programmer at Clark County.
            </p>
            <Image
              alt="profile picture"
              src={profilepic}
              width={275}
              height={275}
              className="grayscale w-96 h-96 object-cover"
            />
          </div>

          <Image
            src={richardlopez}
            alt="Homescreen splash text"
            className="w-full absolute bottom-0 p-5 py-3"
            priority
          />
        </div>
      </div>

      <HR title={"technologies"} />

      <TextCarousel
        text={"Javascript/Typescript - HTML/CSS - .NET - C# - Python - "}
      />

      <HR title={"Background"} />

      <GridContainer>
        <p className="lg:col-start-5 col-span-full text-xl columns-3 ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Molestie a
          iaculis at erat pellentesque adipiscing commodo elit at. Est velit
          egestas dui id. Nisi est sit amet facilisis magna etiam tempor. Id
          donec ultrices tincidunt arcu. Eget est lorem ipsum dolor sit amet.
          Sed felis eget velit aliquet sagittis id consectetur purus ut.
          Suspendisse interdum consectetur libero id faucibus nisl. Est sit amet
          facilisis magna etiam tempor orci eu lobortis. Tortor dignissim
          convallis aenean et tortor at risus. Ac ut consequat semper viverra
          nam. Aliquet enim tortor at auctor. Sed cras ornare arcu dui. Eu
          volutpat odio facilisis mauris sit amet massa vitae. Egestas fringilla
          phasellus faucibus scelerisque eleifend. Ac turpis egestas maecenas
          pharetra convallis. Sem nulla pharetra diam sit amet nisl suscipit
          adipiscing bibendum. Arcu vitae elementum curabitur vitae nunc sed
          velit dignissim sodales. Massa sed elementum tempus egestas sed sed
          risus. Enim blandit volutpat maecenas volutpat blandit aliquam. Morbi
          blandit cursus risus at ultrices mi tempus imperdiet. Velit sed
          ullamcorper morbi tincidunt ornare massa. Ipsum faucibus vitae aliquet
          nec ullamcorper sit. Amet consectetur adipiscing elit duis tristique.
          Facilisi morbi tempus iaculis urna id volutpat lacus. Rhoncus urna
          neque viverra justo nec ultrices dui sapien. Rhoncus urna neque
          viverra justo nec ultrices dui sapien. Purus in mollis nunc sed id
          semper. Velit euismod in pellentesque massa placerat duis. Egestas
          fringilla phasellus faucibus scelerisque eleifend donec pretium
          vulputate sapien.
        </p>
      </GridContainer>

      <HR title={"Sneak Peak"} />

      <GridContainer className="pb-20">
        <p className="px-0 uppercase text-3xl col-span-8 indent-40 mb-12">
          Take a sneak peak at recent projects finished by me. There are
          websites, machine learning models, and demos. Feel free to snoop
          around!
        </p>
        <p className="col-start-8 col-span-3">
          My designs are inspired by straight lines and rigid grid systems. This
          way, I feel the content (images and/or text), can best be displayed.
          This can be seen through the portfolio itself. While this content
          block may only contain a sneak peak of my work, be sure to check them
          all out on my works page!
        </p>
        <Link href={"/projects"} className="col-start-6 col-span-2">
          <ButtonUnderline icon={<ArrowUpRight strokeWidth="1" />}>
            Works
          </ButtonUnderline>
        </Link>
        <ButtonUnderline
          className="col-span-2"
          icon={<ArrowUpRight strokeWidth="1" />}
        >
          Contact me.
        </ButtonUnderline>

        <ProjectArchiveGrid
          projects={projects}
          limit={6}
          className="col-span-full px-0"
        />
      </GridContainer>
    </>
  );
}

"use client";

import React, { useRef } from "react";
import profilepic from "../../public/profilepic.jpg";
import profilepicAlt from "../../public/profilepic2.jpg";
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
import { TraceContainer } from "@/components/TraceContainer";
import { Slideshow } from "@/components/Slideshow";

export function HomeClient({ projects }: { projects: Project[] }) {
  const heroRef = useRef(null);
  return (
    <>
      <div className="overflow-hidden">
        <TraceContainer
          className="h-[calc(100dvh-5rem)] relative flex flex-col justify-end"
          tooltip={<Slideshow />}
          ref={heroRef}
        >
          <div className="flex flex-col lg:h-full lg:flex-row lg:justify-between px-3 lg:px-5 pb-5 lg:pb-0 lg:pt-8 gap-y-3">
            <p className="uppercase max-w-96 font-medium">
              Richard is a full-stack developer based in Las Vegas, NV, USA.
              Currently a programmer at Clark County.
            </p>
            <Image
              alt="profile picture"
              src={profilepic}
              width={275}
              height={275}
              className="grayscale w-full lg:w-96 h-96 object-cover order-first lg:order-last"
            />
          </div>

          <Image
            src={richardlopez}
            alt="Homescreen splash text"
            className="w-full order-first mt-auto lg:absolute bottom-0 px-3 lg:px-5 p-5 py-3"
            priority
          />
        </TraceContainer>
      </div>

      <HR title={"technologies"} />

      <TextCarousel
        text={"Javascript/Typescript - HTML/CSS - .NET - C# - Python - "}
      />

      <HR title={"Background"} />

      <GridContainer>
        <GridContainer className="lg:col-start-5 lg:col-span-5 md:col-start-7 md:col-span-3 col-span-full px-0 gap-y-4">
          <h4 className="uppercase font-medium col-span-full">
            Hello, I'm Richard, a{" "}
            <span className="relative">
              Full-Stack Web Developer
              <div className="bottom-0 bg-black opacity-50 h-full absolute left-0">
                <div className="bg-black h-1/2" />
              </div>
            </span>{" "}
            for Clark County.
          </h4>
          <p className="col-span-full">
            I've spent every year since graduating from the University of
            California, Irvine in 2021 interacting with customers and
            stakeholders through software. I have created and designed websites
            telling stories, conveying trust and providing means of interactions
            through landing sites, intranets, web apps, etc. Now, I'm a
            Programmer Analyst for Clark County based in Las Vegas, NV. Outside
            of the office, you'll catch me hanging out with family and friends,
            playing guitar, singing, and making other people laugh. I'm a man on
            a mission to make the world a better place with software and
            technology.
          </p>
          <Link href={"/resume"} className="col-span-full">
            <ButtonUnderline
              className="py-6"
              icon={<ArrowUpRight strokeWidth="1" />}
            >
              Resume
            </ButtonUnderline>
          </Link>
        </GridContainer>
        <Image
          src={profilepicAlt}
          alt={"Alternative profile pic"}
          width={3072}
          height={4080}
          className="col-span-full md:col-start-10 md:col-span-3 aspect-square h-full object-cover grayscale"
        />
      </GridContainer>

      <HR title={"Sneak Peak"} />

      <GridContainer className="pb-20">
        <p className="px-0 uppercase text-3xl col-span-full lg:col-span-8 indent-20 lg:indent-40 mb-3 lg:mb-8">
          Take a sneak peak at recent projects finished by me. There are
          websites, machine learning models, and demos. Feel free to snoop
          around!
        </p>
        <p className="col-span-3 col-start-2 lg:col-start-8 lg:col-span-4">
          My designs are inspired by straight lines, rigid grid systems, and
          typography. This way, content is delivered in a clear and concise way
          while leaving an empression. This can be seen through the portfolio
          itself. While this content block may only contain a sneak peak of my
          work, be sure to check them all out on my works page!
        </p>
        <Link
          href={"/projects"}
          className="lg:col-start-6 col-span-2 lg:col-span-3"
        >
          <ButtonUnderline
            icon={<ArrowUpRight strokeWidth="1" />}
            className="py-6"
          >
            Works
          </ButtonUnderline>
        </Link>

        <Link href={"/contacts"} className="col-span-2 lg:col-span-3">
          <ButtonUnderline
            className="py-6"
            icon={<ArrowUpRight strokeWidth="1" />}
          >
            Contact me.
          </ButtonUnderline>
        </Link>

        <ProjectArchiveGrid
          projects={projects}
          limit={6}
          className="col-span-full px-0"
        />
      </GridContainer>
    </>
  );
}

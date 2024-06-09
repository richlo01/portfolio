import { GridContainer } from "@/components/GridContainer";
import profilepic from "../../../public/profilepic.jpg";
import Image from "next/image";
import { HR } from "@/components/HR";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Marquee from "react-fast-marquee";
import javascriptIcon from "../../../public/javascriptIcon.svg";
import typescriptIcon from "../../../public/typescriptIcon.svg";
import dotnetIcon from "../../../public/dotnetIcons.svg";
import postgresIcon from "../../../public/postgresIcon.svg";
import mysqlIcon from "../../../public/mysqlIcon.svg";
import nextjsIcon from "../../../public/nextjsIcon.svg";
import sanityIcon from "../../../public/sanityIcon.svg";
import payloadIcon from "../../../public/payloadIcon.svg";

const experiences = [
  {
    title: "Programmer Analyst",
    company: "Clark County",
    time: "2022-Present",
    meta: "Full-Time",
  },
  {
    title: "Software Developer",
    company: "Outsiiider Entertainment",
    time: "2022-2022",
    meta: "Freelancer",
  },
  {
    title: "Software Developer",
    company: "Effect LLC",
    time: "2021-2022",
    meta: "Freelancer",
  },
  {
    title: "CovidLies",
    company: "UCI Hackathon",
    time: "2021-2022",
    meta: "Competitor",
  },
  {
    title: "Software Engineer",
    company: "CareCognitics",
    time: "2019-2019",
    meta: "Intern",
  },
];

const skillIcons = [
  javascriptIcon,
  typescriptIcon,
  dotnetIcon,
  postgresIcon,
  mysqlIcon,
  nextjsIcon,
  sanityIcon,
  payloadIcon,
];

export default function Resume() {
  return (
    <>
      <GridContainer className="mt-10">
        <p className="col-span-10 indent-40 text-7xl uppercase">
          I combine my experience in design and engineering to solve problems,
          tell stories, and create compelling experiences.
        </p>
      </GridContainer>
      <GridContainer className="mt-8">
        <GridContainer className="col-start-8 col-span-4">
          <div className="col-span-10 flex flex-col gap-y-8">
            <p>
              I am Richard Lopez, a full-stack web developer based in Las Vegas,
              NV, USA. With experience in the public sector and private sector,
              both healthcare and environment. Currently a Programmer Analyst at
              Clark County, Nevada.
            </p>
            <Image
              src={profilepic}
              width={3072}
              height={4000}
              alt="Profile Picture"
              className="grayscale"
            />
          </div>
        </GridContainer>
      </GridContainer>
      <HR title="Experience" />

      <ul
        className={cn(
          "flex flex-col px-5 *:border-b *:border-b-neutral-700 mb-10"
        )}
      >
        {experiences?.map((e, i) => (
          <li key={i + e.company + e.time} className="group py-1 relative">
            <div className={"grid grid-cols-12 group-hover:text-neutral-50"}>
              <span className="col-span-2">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="col-span-4">{e.title}</span>
              <span className="col-span-2">{e.meta}</span>
              <span className="col-span-2">{e.company}</span>
              <span className="col-span-2 text-end">{e.time}</span>
            </div>
            <div
              className={cn(
                "w-full h-full max-h-0 absolute left-0 bottom-0 group-hover:max-h-full bg-black transition-all -z-10"
              )}
            />
          </li>
        ))}
      </ul>

      <HR title="Skills" />
      <Marquee className="text-9xl my-20">
        {skillIcons.map((i, index) => (
          <Image
            src={i}
            key={index + "skillIcon"}
            alt={"Icon of skill"}
            className="mr-16 h-20 w-20 text-white"
          />
        ))}
        {skillIcons.map((i, index) => (
          <Image
            src={i}
            key={index + "skillIconCopy"}
            alt={"Icon of skill"}
            className="mr-16 h-20 w-20 text-white"
          />
        ))}
      </Marquee>
    </>
  );
}

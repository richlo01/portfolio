import { GridContainer } from "@/components/GridContainer";
import { ImageFeature } from "@/components/ImageFeature";
import TextReveal from "@/components/TextReveal";
import { Project } from "@/sanity.types";
import Link from "next/link";
import Marquee from "react-fast-marquee";

export function ContactClient({ projects }: { projects: Project[] }) {
  const images = projects.map((p) => {
    if (p.images && p.images.length > 0) {
      return p.images[0];
    }
  });

  return (
    <>
      <GridContainer>
        <TextReveal
          text="Let's work together."
          className="text-6xl lg:text-9xl uppercase col-span-full lg:col-start-3 lg:col-span-9"
          as="h1"
        />
        <p className="col-span-full sm:col-span-2 lg:col-start-3 lg:col-span-3 font-medium uppercase">
          Create a website rich in storytelling and leave an impression for your
          audience. Rebrand with me and never look back.
        </p>
        <p className="col-span-full sm:col-span-2 lg:col-start-3 lg:col-span-3 font-medium uppercase">
          Collaborate on a project. I'll help you finish your projects and give
          it the twist it deserves.
        </p>
        <div className="col-span-full lg:col-start-3 lg:col-span-3 flex gap-x-3 flex-wrap">
          <Link
            href="https://www.linkedin.com/in/richard-lopez-6ab1b0207/"
            className="underline"
          >
            LinkedIn
          </Link>
          <Link href="https://github.com/richlo01" className="underline">
            GitHub
          </Link>
          <Link href="mailto:lopezrs1201@gmail.com" className="underline">
            lopezrs1201@gmail.com
          </Link>
        </div>
      </GridContainer>

      <Marquee className="mt-10" speed={100}>
        <div className="h-full grid place-items-center uppercase text-4xl text-medium whitespace-nowrap px-5 italic">
          Your Project
        </div>
        {images.map((i, index) => (
          <ImageFeature
            projectImage={i!}
            key={index + "projectPreview"}
            className="aspect-video max-w-72"
          />
        ))}
        <div className="h-full bg-neutral-900 aspect-video">
          <span className="h-full w-72 flex items-center justify-center uppercase text-4xl text-medium whitespace-nowrap italic text-neutral-50">
            Your Project
          </span>
        </div>
        {images.map((i, index) => (
          <ImageFeature
            projectImage={i!}
            key={index + "projectPreviewCopy"}
            className="aspect-video max-w-72"
          />
        ))}
      </Marquee>
    </>
  );
}

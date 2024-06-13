import { GridContainer } from "../GridContainer";
import Link from "next/link";
import { CornerDownRight } from "lucide-react";
import { TraceContainer } from "../TraceContainer";
import { Slideshow } from "../Slideshow";
import { useRef } from "react";
import RSL from "../../public/rsl.svg";
import Image from "next/image";

export function Footer() {
  const footerRef = useRef(null);
  return (
    <footer className="bg-neutral-900 text-neutral-100 pt-10 lg:pb-10 overflow-hidden">
      <GridContainer>
        <div className="col-span-full lg:col-span-8 flex flex-col">
          <span className="uppercase tracking-widest text-xs roboto-mono">
            Footer
          </span>
          <p className="text-3xl lg:text-5xl mt-10 font-medium">
            I am committed
            <span className="text-neutral-400">
              {" "}
              to working together and creating the best product under your
              ideas. Reach out to explore what is possible.
            </span>
          </p>
          <div className="my-16 mb-24 lg:my-auto">
            <TraceContainer tooltip={<Slideshow />} ref={footerRef}>
              <Link
                href="mailto:lopezrs1201@gmail.com?subject=Let's Create A Project!"
                className="text-4xl lg:text-5xl underline underline-offset-8 flex flex-col lg:flex-row lg:items-center "
              >
                <CornerDownRight className="mr-5" /> Let{"'"}s create your
                project.
              </Link>
            </TraceContainer>
          </div>
        </div>
        <div className="hidden lg:block col-start-11 writing-vertical-rl rotate-180 mt-auto">
          <span className="text-9xl lg:text-[425px] leading-[250px]">RSL</span>
        </div>
        <GridContainer className="px-0 col-span-full">
          <span className="col-span-full lg:col-span-auto lg:col-span-5 mt-auto">
            @{new Date().getFullYear().toString()} Richard Lopez. All Rights
            Reserved
          </span>
          <ul className="grid col-span-2 grid-cols-2 order-first lg:order-last">
            <Link
              href="https://www.linkedin.com/in/richard-lopez-6ab1b0207/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </Link>
            <Link
              href="https://github.com/richlo01"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </Link>
            <div className="col-span-2 lg:mt-10">
              <Link href="mailto:lopezrs1201@gmail.com">
                lopezrs1201@gmail.com
              </Link>
            </div>
          </ul>
        </GridContainer>
      </GridContainer>
      <div className="lg:hidden col-span-full overflow-hidden mt-5">
        <Image src={RSL} alt={"Alternate Logo"} className="w-full" />
      </div>
    </footer>
  );
}

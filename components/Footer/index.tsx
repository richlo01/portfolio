import { GridContainer } from "../GridContainer";
import Link from "next/link";
import { CornerDownRight } from "lucide-react";
import { TraceContainer } from "../TraceContainer";
import { Slideshow } from "../Slideshow";
import { useRef } from "react";

export function Footer() {
  const footerRef = useRef(null);
  return (
    <footer className="bg-neutral-900 text-neutral-100 py-10 overflow-hidden">
      <GridContainer>
        <div className="lg:col-span-8 flex flex-col">
          <span className="uppercase tracking-widest text-xs roboto-mono">
            Footer
          </span>
          <p className="text-5xl mt-10 font-medium">
            I am committed
            <span className="text-neutral-400">
              {" "}
              to working together and creating the best product under your
              ideas. Reach out to explore what is possible.
            </span>
          </p>
          <div className="my-auto">
            <TraceContainer tooltip={<Slideshow />} ref={footerRef}>
              <Link
                href="/"
                className="text-5xl underline underline-offset-8 flex items-center "
              >
                <CornerDownRight className="mr-5" /> Let{"'"}s create your
                project.
              </Link>
            </TraceContainer>
          </div>
        </div>
        <div className="col-start-11 writing-vertical-rl rotate-180 mt-auto">
          <span className="text-9xl lg:text-[425px] leading-[250px]">RSL</span>
        </div>
        <GridContainer className="px-0 col-span-full">
          <span className="col-span-auto lg:col-span-5 mt-auto">
            @{new Date().getFullYear().toString()} Richard Lopez. All Rights
            Reserved
          </span>
          <ul className="grid col-span-2 grid-cols-2">
            <li>LinkedIn</li>
            <li>Instagram</li>
            <Link href="/">GitHub</Link>
            <div className="col-span-2 mt-10">
              <Link href="/">lopezrs1201@gmail.com</Link>
            </div>
          </ul>
        </GridContainer>
      </GridContainer>
    </footer>
  );
}

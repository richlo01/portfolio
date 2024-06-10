"use client";
import React, { useMemo } from "react";
import {
  cubicBezier,
  motion,
  stagger,
  useAnimate,
  useInView,
} from "framer-motion";
import { cn } from "@/lib/utils";

interface Props {
  text: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "span" | "p";
  callback?: () => void;
}
const TextReveal: React.FC<Props> = ({
  text,
  className,
  as: Element = "span",
  callback,
  ...props
}) => {
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope);
  const easing = cubicBezier(0.165, 0.84, 0.44, 1);

  const textArray = useMemo(() => {
    if (text === "") return [];
    return text
      .trim()
      .replace("-", "‑")
      .replace(/&#8232;/g, " ") // Replaces figma inserted character, see: https://forum.figma.com/t/creating-new-line-via-shift-enter-adds-a-l-sep-symbol/2856/4
      .split(" ");
  }, [text]);

  React.useEffect(() => {
    if (isInView) {
      animate(
        `.text-reveal`,
        { y: "0%", rotate: 0 },
        { duration: 1.125, delay: stagger(0.075), ease: easing }
      ).then(() => {
        if (callback) callback();
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isInView, callback]);

  return (
    <Element ref={scope} className={cn(className)} {...props}>
      {textArray.map((text, index) => {
        const isLast = index + 1 === textArray.length;
        return (
          <span
            className="inline-flex overflow-hidden min-h-[1.1em] mb-[-1.1em] mr-[-2px]"
            key={index}
          >
            <motion.span
              initial={{ y: "150%", rotate: 10 }}
              className="mr-[2px] inline-block whitespace-pre text-reveal"
            >
              {isLast ? text : text + " "}
            </motion.span>
          </span>
        );
      })}
    </Element>
  );
};

export default TextReveal;

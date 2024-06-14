// Core component that receives mouse positions and renders pointer and content

import React, {
  MutableRefObject,
  forwardRef,
  useEffect,
  useState,
} from "react";

import { motion, AnimatePresence, useMotionValue } from "framer-motion";
import { cn } from "@/lib/utils";

type TraceContainerProps = {
  children: React.ReactNode;
  className?: string;
  tooltip?: string | React.ReactNode;
};

export const TraceContainer = forwardRef<HTMLDivElement, TraceContainerProps>(
  (props, ref) => {
    const { children, className, tooltip } = props;
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const innerRef = ref as MutableRefObject<HTMLDivElement>;
    const [rect, setRect] = useState<DOMRect | null>(null);
    const [isInside, setIsInside] = useState<boolean>(false); // Add this line

    useEffect(() => {
      if (innerRef.current) {
        setRect(innerRef.current.getBoundingClientRect());
        console.log(innerRef.current.getBoundingClientRect());
      }
    }, []);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
      if (rect) {
        const scrollX = window.scrollX;
        const scrollY = window.scrollY;
        x.set(e.clientX - rect.left + scrollX); // 192px = 1/2*(width of slideshow)
        y.set(e.clientY - rect.top + scrollY); // 108 = 196*(9/16)
      }
    };
    const handleMouseLeave = () => {
      setIsInside(false);
    };

    const handleMouseEnter = () => {
      setIsInside(true);
    };
    return (
      <div
        onMouseLeave={handleMouseLeave}
        onMouseEnter={handleMouseEnter}
        onMouseMove={handleMouseMove}
        ref={innerRef}
        className={cn("relative", className)}
      >
        <AnimatePresence>
          {isInside && <FollowPointer x={x} y={y} children={tooltip} />}
        </AnimatePresence>
        {children}
      </div>
    );
  }
);

export const FollowPointer = ({
  x,
  y,
  children,
}: {
  x: any;
  y: any;
  children?: string | React.ReactNode;
}) => {
  return (
    <motion.div
      className="absolute mix-blend-difference invert z-50"
      style={{
        top: y,
        left: x,
      }}
      initial={{
        scale: 1,
        opacity: 1,
      }}
      animate={{
        scale: 1,
        opacity: 1,
      }}
      exit={{
        scale: 0,
        opacity: 0,
      }}
    >
      <motion.div
        initial={{
          scale: 0.5,
          opacity: 0,
        }}
        animate={{
          scale: 1,
          opacity: 1,
        }}
        exit={{
          scale: 0.5,
          opacity: 0,
        }}
        className={"hidden lg:block aspect-video overflow-hidden w-96"}
      >
        {children || `Hello world!`}
      </motion.div>
    </motion.div>
  );
};

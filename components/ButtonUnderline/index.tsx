import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

const ButtonUnderline = ({
  className,
  icon,
  children,
}: {
  className?: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
}) => {
  return (
    <Button
      variant="ghost"
      className={cn(
        "group w-full items-center justify-start relative px-0 hover:bg-transparent border-b rounded-none max-w-[33vw] overflow-hidden",
        className
      )}
    >
      <div className="absolute group-hover:-translate-y-[150%] transition-all  pl-3">
        {children}
      </div>
      <div className="absolute translate-y-[150%] group-hover:-translate-y-0 transition-all  text-neutral-50 pl-3">
        {children}
      </div>
      <div className="absolute right-3 grid place-items-center h-full group-hover:-translate-y-[150%] transition-all ">
        {icon}
      </div>
      <div className="absolute right-3 grid place-items-center h-full text-neutral-50 translate-y-[150%] group-hover:-translate-y-0 transition-all ">
        {icon}
      </div>
      {/* <span className="block max-w-0 group-hover:max-w-full w-full transition-all ease-out  h-px bg-black dark:bg-slate-400 absolute bottom-0" /> */}
      <div className="h-full w-full max-h-0 group-hover:max-h-full bg-black absolute bottom-0  transition-all -z-10" />
    </Button>
  );
};

export default ButtonUnderline;

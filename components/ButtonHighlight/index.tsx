import { cn } from "@/lib/utils";

interface ButtonHightlightProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  highlight?: boolean;
}

export const ButtonHightlight: React.FC<ButtonHightlightProps> = ({
  className,
  children,
  highlight = false,
  ...props
}) => {
  return (
    <button
      className={cn(
        "relative text-sm uppercase tracking-widest",
        highlight && "font-bold",
        className
      )}
      {...props}
    >
      <div
        className={cn(
          "bg-neutral-300 h-1/2 w-full max-w-0 absolute top-2 mix-blend-difference transition-all",
          highlight && "max-w-full"
        )}
      />
      {children}
    </button>
  );
};

import { TICON } from "@/types";
import { DetailedHTMLProps, HTMLAttributes } from "react";

export type CardProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> & {
  symbol: TICON;
  isActive?: boolean;
};

const Card = ({ symbol, isActive = false, ...props }: CardProps) => {
  return (
    <div
      className={`bg-sky-100 w-1/3 lg:w-[220px] border-4 border-sky-800 aspect-square rounded-lg flex flex-col items-center justify-center text-xs relative hover:shadow-lg duration-500 shadow-none transition-shadow cursor-pointer select-none group max-w-[160px] ${
        isActive && "!bg-sky-400"
      }`}
      {...props}
    >
      <span
        className={`display w-full text-center aspect-square text-[800%] mb-3 sm:mb-0 leading-normal group-hover:scale-110 scale-100 transform transition-all ${
          isActive && "scale-110"
        }`}
      >
        {symbol.icon}
      </span>
      <span className="text-[1.5em] font-semibold text-sky-800 absolute bottom-2">
        {symbol.title}
      </span>
    </div>
  );
};

export default Card;

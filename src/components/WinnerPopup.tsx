import { WINNER } from "@/types";
import { DetailedHTMLProps, HTMLAttributes } from "react";
import { motion } from "framer-motion";
import { cx } from "@emotion/css";

type WinnerPopupProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> & {
  winner: WINNER;
};

const WinnerPopup = ({ winner, ...props }: WinnerPopupProps) => {
  const wrapper = cx(
    "px-4 py-4 text-6xl font-bold text-center",
    winner === WINNER.DRAW && "bg-white",
    winner === WINNER.PLAYER && "bg-green-700 text-white",
    winner === WINNER.CPU && "bg-red-700 text-white"
  );

  return (
    <div
      className="absolute w-screen h-screen z-30 bg-black bg-opacity-70 flex justify-center items-center"
      {...props}
    >
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className={wrapper}
      >
        {winner !== WINNER.DRAW ? (
          <>
            <span className="uppercase">{winner}</span> is the winner.
          </>
        ) : (
          <>
            <span className="uppercase">{winner}</span>
          </>
        )}
      </motion.div>
    </div>
  );
};

export default WinnerPopup;

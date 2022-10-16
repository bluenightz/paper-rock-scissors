import { ScoreType } from "@/types";
import React, { DetailedHTMLProps, HTMLAttributes } from "react";

type ScorePanelProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> & {
  score: ScoreType;
};

const ScorePanel = ({ score, className }: ScorePanelProps) => {
  const { win, lose, draw } = score;
  return (
    <div className={`font-semibold text-2xl ${className}`}>
      <ul className="flex space-x-5">
        <li className="px-4 py-2 shadow bg-green-700 text-white">Win: {win}</li>
        <li className="px-4 py-2 shadow bg-red-700 text-white">Lose: {lose}</li>
        <li className="px-4 py-2 shadow bg-white">Draw: {draw}</li>
      </ul>
    </div>
  );
};

export default ScorePanel;

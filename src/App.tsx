import { useEffect, useState } from "react";
import { Card, CardCPU, ScorePanel, WinnerPopup } from "@/components";
import { WINNER, TICON, ScoreType } from "./types";
import { addScore, getWeapon, getWinner } from "./utils/core";
import { ICONS } from "./const";

const keys = Object.keys(ICONS);

const initScore = {
  win: 0,
  lose: 0,
  draw: 0,
};

function App() {
  const [score, setScore] = useState<ScoreType>(initScore);
  const [cpuChoiced, setCpuChoiced] = useState<TICON | null>(null);
  const [playerChoiced, setPlayerChoiced] = useState<TICON | null>(null);
  const [winner, setWinner] = useState<WINNER | null>(null);

  const handleOnClick = (icon: TICON) => () => setPlayerChoiced(icon);

  const handleStart = () => {
    setCpuChoiced(getWeapon(keys[Math.floor(Math.random() * keys.length)]));
  };

  const handleDismiss = () => {
    setCpuChoiced(null);
    setPlayerChoiced(null);
    setWinner(null);
  };

  useEffect(() => {
    if (playerChoiced && cpuChoiced) {
      const winner = getWinner(cpuChoiced, playerChoiced);
      setScore((curr) => {
        return addScore(winner, curr);
      });
      setWinner(winner);
    }
  }, [playerChoiced, cpuChoiced]);

  return (
    <div className="container mx-auto flex flex-col space-y-2 min-h-screen justify-center items-center">
      <ScorePanel className="mb-4" score={score} />
      <CardCPU symbol={cpuChoiced} />
      <div className="flex space-x-4 w-full px-4 justify-center max-w-[545px] mx-auto">
        {keys.map((key, index) => {
          const icon: TICON = getWeapon(key);

          return (
            <Card
              key={`card-${index}`}
              symbol={icon}
              onClick={handleOnClick(icon)}
              isActive={playerChoiced === icon}
            />
          );
        })}
      </div>
      <div className="h-10">
        {playerChoiced && (
          <button
            onClick={handleStart}
            className="bg-green-700 text-white font-semibold rounded-lg px-4 py-2 text-3xl"
          >
            Let's Start
          </button>
        )}
      </div>
      {winner && <WinnerPopup winner={winner} onClick={handleDismiss} />}
    </div>
  );
}

export default App;

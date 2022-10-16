import { ICONS } from "@/const";
import { TICON, WINNER, GAME_SYMBOL, ScoreType } from "@/types";

export const getWeapon = (type: string): TICON => {
  return ICONS[type];
};

export const getWinner = (cpu: TICON, player: TICON): WINNER => {
  if (cpu.icon === player.icon) {
    return WINNER.DRAW;
  }

  if (
    (cpu.icon === GAME_SYMBOL.SCISSORS && player.icon === GAME_SYMBOL.PAPER) ||
    (cpu.icon === GAME_SYMBOL.PAPER && player.icon === GAME_SYMBOL.ROCK) ||
    (cpu.icon === GAME_SYMBOL.ROCK && player.icon === GAME_SYMBOL.SCISSORS)
  ) {
    return WINNER.CPU;
  }

  return WINNER.PLAYER;
};

export const addScore = (
  winner: WINNER,
  currentScore: ScoreType
): ScoreType => {
  let score: { [key: string]: number } = {};

  if (winner === WINNER.CPU) score.lose = currentScore.lose + 1;
  if (winner === WINNER.PLAYER) score.win = currentScore.win + 1;
  if (winner === WINNER.DRAW) score.draw = currentScore.draw + 1;

  return { ...currentScore, ...score };
};

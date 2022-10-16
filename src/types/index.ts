export enum GAME_SYMBOL {
  SCISSORS = "✌️",
  ROCK = "✊",
  PAPER = "✋",
}

export enum WINNER {
  CPU = "cpu",
  PLAYER = "player",
  DRAW = "draw",
}

export type TICON = {
  title: string;
  icon: GAME_SYMBOL.SCISSORS | GAME_SYMBOL.PAPER | GAME_SYMBOL.ROCK;
};

export type ScoreType = {
  win: number;
  lose: number;
  draw: number;
};

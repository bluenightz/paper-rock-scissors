import { GAME_SYMBOL, WINNER, TICON } from "@/types";
import { test, expect } from "vitest";
import { getWinner } from "./core";

test("getWinner() - Draw", () => {
  const cpu: TICON = {
    icon: GAME_SYMBOL.SCISSORS,
    title: "Scissors",
  };
  const player: TICON = {
    icon: GAME_SYMBOL.SCISSORS,
    title: "Scissors",
  };

  const winner = getWinner(cpu, player);
  expect(winner).toEqual(WINNER.DRAW);
});

test("getWinner() - Cpu", () => {
  const cpu: TICON = {
    icon: GAME_SYMBOL.SCISSORS,
    title: "Scissors",
  };
  const player: TICON = {
    icon: GAME_SYMBOL.PAPER,
    title: "Paper",
  };

  const winner = getWinner(cpu, player);
  console.log(winner, WINNER.CPU);
  expect(winner).toEqual(WINNER.CPU);
});

test("getWinner() - Cpu", () => {
  const cpu: TICON = {
    icon: GAME_SYMBOL.ROCK,
    title: "Rock",
  };
  const player: TICON = {
    icon: GAME_SYMBOL.SCISSORS,
    title: "Scissors",
  };

  const winner = getWinner(cpu, player);
  expect(winner).toEqual(WINNER.CPU);
});

test("getWinner() - Player", () => {
  const cpu: TICON = {
    icon: GAME_SYMBOL.SCISSORS,
    title: "Scissors",
  };
  const player: TICON = {
    icon: GAME_SYMBOL.ROCK,
    title: "Rock",
  };

  const winner = getWinner(cpu, player);
  expect(winner).toEqual(WINNER.PLAYER);
});

test("getWinner() - Player", () => {
  const cpu: TICON = {
    icon: GAME_SYMBOL.ROCK,
    title: "Rock",
  };
  const player: TICON = {
    icon: GAME_SYMBOL.PAPER,
    title: "Paper",
  };

  const winner = getWinner(cpu, player);
  expect(winner).toEqual(WINNER.PLAYER);
});

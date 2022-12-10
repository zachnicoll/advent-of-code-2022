import { readInputFile } from "../util";

enum Game {
  Rock = "R",
  Paper = "P",
  Scissors = "S",
}

enum Result {
  Win = "W",
  Loss = "L",
  Draw = "D",
}

const GAME_CHAR_MAP = {
  A: Game.Rock,
  B: Game.Paper,
  C: Game.Scissors,
  X: Result.Loss,
  Y: Result.Draw,
  Z: Result.Win,
};

const GAME_SCORE_MAP = {
  [Result.Win]: 6,
  [Result.Draw]: 3,
  [Result.Loss]: 0,
  [Game.Rock]: 1,
  [Game.Paper]: 2,
  [Game.Scissors]: 3,
};

const WIN_MAP = {
  [Game.Rock]: Game.Scissors,
  [Game.Paper]: Game.Rock,
  [Game.Scissors]: Game.Paper,
};

const LOSE_MAP = {
  [Game.Scissors]: Game.Rock,
  [Game.Rock]: Game.Paper,
  [Game.Paper]: Game.Scissors,
};

type CharMapKey = keyof typeof GAME_CHAR_MAP;

const determineGameResult = (me: Game, opponent: Game): Result => {
  if (me === opponent) return Result.Draw;
  if (WIN_MAP[me] === opponent) return Result.Win;
  return Result.Loss;
};

const determineGameMoveForResult = (me: Result, opponent: Game): Game => {
  if (me === Result.Draw) return opponent;
  if (me === Result.Win) return LOSE_MAP[opponent];
  return WIN_MAP[opponent];
};

const input = readInputFile("day2");

const totalScore = input
  .split("\n")
  .map((line) => line.split(" "))
  .map(([opponent, me]) => ({
    opponent: GAME_CHAR_MAP[opponent as CharMapKey],
    me: GAME_CHAR_MAP[me as CharMapKey],
  }))
  .map(
    ({ opponent, me }) =>
      GAME_SCORE_MAP[me as Result] +
      GAME_SCORE_MAP[determineGameMoveForResult(me as Result, opponent as Game)]
  )
  .reduce((a, b) => a + b, 0);

console.log(totalScore);

import { readFileSync } from "fs";

export const readInputFile = (day: string) => {
  return readFileSync(`${process.cwd()}/${day}/input.txt`).toString();
};

export const splitLines = (str: string) => str.split("\n");

export const sumArr = (arr: number[]): number => arr.reduce((a, b) => a + b);

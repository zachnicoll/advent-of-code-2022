import { readFileSync } from "fs";
import { readInputFile } from "../util";

const input = readInputFile("day1");

const lines = input.split("\n");
let sum = 0;
let maxes: number[] = [];

lines.forEach((line, i) => {
  if (line === "") {
    sum = 0;
  } else {
    sum += Number.parseInt(line);
  }

  maxes.push(sum);
});

maxes.sort((a, b) => b - a);
console.log(maxes.slice(0, 3).reduce((a, b) => a + b, 0));

/**
 * Takes a single argument for a string that represents the current day
 * of the challenged, and creates a directory containing two files
 * to jumpstart the beginning of a day's challenge.
 *
 * Example script execution:
 * ts-node newDay.ts day1
 */

import fs from "fs";

const indexContent = (
  dayStr: string
) => `import { readInputFile, splitLines } from "../util";
const input = readInputFile("dayStr");
const lines = splitLines(input);
`;

const dayStr = process.argv[2];

if (!fs.existsSync(dayStr)) {
  fs.mkdirSync(dayStr);
}

fs.writeFileSync(`${dayStr}/index.ts`, indexContent(dayStr));
fs.writeFileSync(`${dayStr}/input.txt`, "");

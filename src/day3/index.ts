import { readInputFile, splitLines, sumArr } from "../util";
const input = readInputFile("day3");
const lines = splitLines(input);

const ASCII_CODE_a = 97;
const ASCII_CODE_A = 65;
const ASCII_DIFF_A_TO_Z = ASCII_CODE_A - 27;

const calculatePriority = (char: string | undefined) => {
  if (char === undefined) return 0;

  const charCode = char.charCodeAt(0);

  return charCode >= ASCII_CODE_a
    ? charCode - ASCII_CODE_a + 1
    : charCode - ASCII_DIFF_A_TO_Z;
};

// Part 1
const sumOfPriorities = sumArr(
  lines
    .map((line) => [
      line.slice(0, line.length / 2),
      line.slice(line.length / 2),
    ])
    .map(([compartment1, compartment2]) => [
      compartment1.split(""),
      compartment2.split(""),
    ])
    .map(([compartment1Chars, compartment2Chars]) =>
      compartment1Chars.find((c) => compartment2Chars.includes(c))
    )
    .map(calculatePriority)
);
console.log("Part 1:", sumOfPriorities);

// Part 2
let sum = 0;

for (let i = 0; i < lines.length; i += 3) {
  const [l1, l2, l3] = [...lines].splice(i, 3).map((line) => line.split(""));

  const commonChar = l1.find(
    (char1) => l2.includes(char1) && l3.includes(char1)
  );

  sum += calculatePriority(commonChar);
}
console.log("Part 2:", sum);

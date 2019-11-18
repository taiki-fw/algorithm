const mdays: number[][] = [
  [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
  [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
];

// 閏年: 1, 平年: 0
export const isLeap = (year: number): number => {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0 ? 1 : 0;
};

export const dayOfYear = (year: number, month: number, day: number) => {
  let days = day;
  while (--month !== 0) {
    days += mdays[isLeap(year)][month - 1];
  }
  return days;
};

// 2019 3 15
function main(input: string): void {
  const [year, month, days]: number[] = input.split(" ").map(i => parseInt(i));
  console.log(`年内で${dayOfYear(year, month, days)}日目です。`);
}

main(require("fs").readFileSync("/dev/stdin", "UTF-8"));

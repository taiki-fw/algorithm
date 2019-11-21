// 番兵方
// 引数keyと同じ値であるarray内要素のindexを返却する。もしないなら-1を返却
export function sqlSearchGuard(
  array: number[],
  length: number,
  key: number
): number {
  let i: number = 0;
  array[length] = key; //番兵
  for (i; i <= length; i++) {
    showCalc(array, i);
    if (array[i] === key) {
      break;
    }
  }
  return i !== length ? i : -1;
}

// (現状の配列,現在調べているindex,操作回数)
function showCalc(array: number[], index: number) {
  let asterisk = new Array(array.length).fill(" ");
  asterisk[index] = "*";
  console.log(`  | ${asterisk.join(" ")}`);
  console.log(` ${index}| ${array.join(" ")}`);
  console.log("  |");
}

const sample = [1, 5, 7, 2, 7, 8, 5, 8, 9];
sqlSearchGuard(sample, sample.length, 7);

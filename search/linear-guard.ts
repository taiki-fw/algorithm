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
    if (array[i] === key) {
      break;
    }
  }
  return i !== length ? i : -1;
}

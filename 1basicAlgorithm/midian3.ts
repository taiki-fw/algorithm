// 3値の中央値を求めるメソッド
export function midian3(a: number, b: number, c: number): number {
  if (a > b) {
    if (b >= c) return b;
    else if (a <= c) return a;
    else return c;
  } else if (a < b) {
    if (a >= c) return a;
    else if (b <= c) return b;
    else return c;
  } else {
    return a;
  }
}

export function midian3BySort(a: number, b: number, c: number): number {
  const num: number[] = [a, b, c];
  num.sort((p, n) => p - n);
  return num[1];
}

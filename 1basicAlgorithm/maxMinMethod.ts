export function maxInt(a: number, b: number, c: number, d: number): number {
  let max: number = a;
  if (max < b) max = b;
  if (max < c) max = c;
  if (max < d) max = d;
  return max;
}

export function min3(a: number, b: number, c: number): number {
  let min = a;
  if (min > b) min = b;
  if (min > c) min = c;
  return min;
}

export function min4(a: number, b: number, c: number, d: number): number {
  let min = a;
  if (min > b) min = b;
  if (min > c) min = c;
  if (min > d) min = d;
  return min;
}

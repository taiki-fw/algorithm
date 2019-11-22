export function searchIdx(
  a: number[],
  length: number,
  key: number,
  idx: number[]
) {
  for (let i = 0; i < length; i++) {
    if (a[i] === key) {
      idx.push(i);
    }
  }
  return idx.length;
}

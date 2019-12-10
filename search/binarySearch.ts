export function binarySearch(array: number[], key: number) {
  let pl = 0;
  let pr = array.length - 1;
  do {
    let pc = Math.floor((pl + pr) / 2);
    if (array[pc] === key) {
      return pc;
    } else if (array[pc] > key) {
      pr = pc - 1;
    } else {
      pl = pc + 1;
    }
  } while (pl <= pr);
  return -1;
}

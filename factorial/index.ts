export function factorial(num: number): number {
  if (num > 0) {
    return num * factorial(num - 1);
  } else {
    return 1;
  }
}

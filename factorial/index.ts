export function factorial(num: number): number {
  if (num > 0) {
    return num * factorial(num - 1);
  } else {
    return 1;
  }
}

export function factorial2(num: number): number {
  let result = 1;
  // for (let i = num; i > 0; i--) {
  //   result *= i;
  // }
  while (num > 0) {
    result *= num--;
  }
  return result;
}

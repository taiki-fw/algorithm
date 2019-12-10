export function gcd(l: number, s: number): number {
  if (s === 0) return l;
  else return gcd(s, l % s);
}

export function gcd2(l: number, s: number): number {
  while (s !== 0) {
    let tmp = l;
    l = s;
    s = tmp % s;
  }
  return l;
}

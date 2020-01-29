/**
 * フィボナッチ数列とは？
 * F1 = 0, F2 = 1, Fn = F(n-1) + F(n-2)
 * インデックス：0 1 2 3 4 5 6 7
 * 数値　　　　：0 1 1 2 3 5 8 13
 *
 * 引数にインデックスを取り、その時の数値を返す関数。
 */

export function Fibonacci(index: number): number {
  if (index === 0) return 0;
  else if (index === 1) return 1;
  else return Fibonacci(index - 1) + Fibonacci(index - 2);
}

export function FibonacciV2(index: number, memo = [0, 1]): number {
  if (memo[index] || memo[index] === 0) return memo[index];
  memo[index] = FibonacciV2(index - 1) + FibonacciV2(index - 2);
  return memo[index];
}
console.time("v1");
Fibonacci(7);
console.timeEnd("v1");

console.time("v2");
FibonacciV2(7);
console.timeEnd("v2");

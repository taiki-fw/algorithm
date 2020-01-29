import { Fibonacci, FibonacciV2 } from "./Fibonacci";

describe("引数に渡された番号におけるフィボナッチ数列の値を返す関数", () => {
  test("6 => 5", () => {
    expect(Fibonacci(6)).toBe(8);
    expect(FibonacciV2(6)).toBe(8);
  });
  test("15 => 377", () => {
    expect(Fibonacci(15)).toBe(610);
    expect(FibonacciV2(15)).toBe(610);
  });
});

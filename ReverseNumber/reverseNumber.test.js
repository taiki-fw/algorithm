import { ReverseNum } from "./reverseNumber";

describe("入力された数値を反対にして返す関数", () => {
  test("123456 => 654321", () => {
    expect(ReverseNum(123456)).toBe(654321);
  });
  test("10000 => 00001", () => {
    expect(ReverseNum(10001)).toBe(10001);
  });
});

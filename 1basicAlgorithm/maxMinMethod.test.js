import { maxInt, min3, min4 } from "./maxMinMethod";

describe("4つの最大数を求めるメソッド", () => {
  test("4 is biggest in 4, 3, 2 and 1", () => {
    expect(maxInt(4, 3, 2, 1)).toBe(4);
  });
});

describe("3値の最小値を求めるメソッド", () => {
  test("1 is smallest in 3, 2 and 1", () => {
    expect(min3(3, 2, 1)).toBe(1);
  });
});

describe("4値の最小値を求めるメソッド", () => {
  test("1 is smallest in 4, 3, 2 and 1", () => {
    expect(min4(4, 3, 2, 1)).toBe(1);
  });
});

import { isLeap } from "./index.ts";

describe("閏年の判断メソッドのテスト", () => {
  it("閏年であるので１を返す", () => {
    expect(isLeap(2020)).toBe(1);
  });
  it("閏年でない平年である0を返す", () => {
    expect(isLeap(202)).toBe(0);
  });
});

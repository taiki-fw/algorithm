import { midian3, midian3BySort } from "./midian3.ts";

const funcA = [midian3, midian3BySort];

funcA.forEach(f => {
  describe("中央値を求めるメソッド", () => {
    test("3 2 1", () => {
      expect(f(3, 2, 1)).toBe(2);
    });
    test("3 2 2", () => {
      expect(f(3, 2, 2)).toBe(2);
    });
    test("3 1 2", () => {
      expect(f(3, 1, 2)).toBe(2);
    });
    test("3 1 3", () => {
      expect(f(3, 1, 3)).toBe(3);
    });

    test("2 1 3", () => {
      expect(f(2, 1, 3)).toBe(2);
    });
    test("2 2 1", () => {
      expect(f(2, 2, 1)).toBe(2);
    });
    test("1 1 1", () => {
      expect(f(1, 1, 1)).toBe(1);
    });
    test("1 1 2", () => {
      expect(f(1, 1, 2)).toBe(1);
    });
    test("2 3 1", () => {
      expect(f(2, 3, 1)).toBe(2);
    });
    test("2 3 2", () => {
      expect(f(2, 3, 2)).toBe(2);
    });
    test("1 3 2", () => {
      expect(f(1, 3, 2)).toBe(2);
    });
    test("1 3 3", () => {
      expect(f(1, 3, 3)).toBe(3);
    });
    test("1 2 3", () => {
      expect(f(1, 2, 3)).toBe(2);
    });
  });
});

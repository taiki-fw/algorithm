import { factorial, factorial2 } from "./index";

describe("factorial(階乗のテスト)", () => {
  describe("factorial", () => {
    it("4!", () => {
      expect(factorial(4)).toBe(24);
    });
    it("0!", () => {
      expect(factorial(0)).toBe(1);
    });
    it("(-1)!", () => {
      expect(factorial(-1)).toBe(1);
    });
  });
  describe("factorial2", () => {
    it("4!", () => {
      expect(factorial2(4)).toBe(24);
    });
    it("0!", () => {
      expect(factorial2(0)).toBe(1);
    });
    it("(-1)!", () => {
      expect(factorial2(-1)).toBe(1);
    });
  });
});

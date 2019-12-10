import { gcd, gcd2 } from "./index";

describe("Euclidean method of mutual division", () => {
  describe("gcd", () => {
    it("22 and 8 are 2", () => {
      expect(gcd(22, 8)).toBe(2);
    });
  });
  describe("gcd2", () => {
    it("22 and 8 are 2", () => {
      expect(gcd2(22, 8)).toBe(2);
    });
  });
});

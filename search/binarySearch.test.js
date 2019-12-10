import { binarySearch } from "./binarySearch";

describe("2分探索のテスト", () => {
  describe("element number is odd", () => {
    const sample = [6, 7, 8, 9, 10];
    describe("key location", () => {
      it("left", () => {
        expect(binarySearch(sample, 7)).toBe(1);
      });
      it("right", () => {
        expect(binarySearch(sample, 10)).toBe(4);
      });
    });
    it("array don't have key", () => {
      expect(binarySearch(sample, 11)).toBe(-1);
    });
  });
  describe("element number is even", () => {
    const sample = [6, 7, 8, 9, 10, 12];
    describe("key location", () => {
      it("left", () => {
        expect(binarySearch(sample, 7)).toBe(1);
      });
      it("right", () => {
        expect(binarySearch(sample, 10)).toBe(4);
      });
    });
    it("array don't have key", () => {
      expect(binarySearch(sample, 11)).toBe(-1);
    });
  });
});

import { factorial } from "./index";

describe("factorial(階乗のテスト)", () => {
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

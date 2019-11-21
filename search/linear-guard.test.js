import { sqlSearchGuard } from "./linear-guard";

const sample = [1, 5, 7, 2, 7, 8, 5, 8, 9];

describe("番兵方のテスト", () => {
  test("探したい要素が配列内にある時", () => {
    expect(sqlSearchGuard(sample, sample.length, 7)).toBe(2);
  });
  test("探したい要素が配列内にない時", () => {
    expect(sqlSearchGuard(sample, sample.length, 100)).toBe(-1);
  });
});

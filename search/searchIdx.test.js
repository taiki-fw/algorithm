import { searchIdx } from "./searchIdx";

const sample = [1, 9, 2, 9, 4, 6, 7, 9];
const idx = [];

describe("配列内に指定した値はいくつ格納されているか求める関数のテスト", () => {
  test("{1, 9, 2, 9, 4, 6, 7, 9} key:9 => 3", () => {
    expect(searchIdx(sample, sample.length, 9, idx)).toBe(3);
    expect(idx).toStrictEqual([1, 3, 7]);
  });
});

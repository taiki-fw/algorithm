/**
 * 引数：123
 * 戻り値：321
 *
 * ルール：文字列変換禁止
 *
 * 前提知識：数値の１桁目は10で徐算した余り。(123 % 10 = 3)
 *
 * 方針：
 * 入力された値が0未満になるまで10で割って行く。その時、余り格納。
 *
 */

export function ReverseNum(num: number): number {
  let result = 0;
  while (num > 0) {
    result = result * 10 + (num % 10);
    num = Math.floor(num / 10);
  }
  return result;
}

console.log(ReverseNum(5434985));

// 基準値を定める
// 左には基準値以下　右には基準値以上をおく

let x: number[] = [1, 8, 9, 8, 5, 8, 8, 8, 9];

// 配列の指定要素を入れ替える関数
function swap(array: number[], idx1: number, idx2: number) {
  let tmp = array[idx1];
  array[idx1] = array[idx2];
  array[idx2] = tmp;
}

let count = 1;
function quickSort(array: number[], left: number, right: number): void {
  let pl = left;
  let pr = right;
  let baseIndex = array[Math.round((pr + pl) / 2)]; // TypeScriptのnumber型は浮動小数点型

  do {
    while (array[pl] < baseIndex) ++pl; // 基準値より高い要素があるまで左から調べる
    while (array[pr] > baseIndex) --pr; //　基準値より低い要素があるまで右から調べる
    if (pl <= pr) {
      console.log("入れ替え前", array);
      swap(array, pl++, pr--);
      console.log("入れ替え後", array);
    }
  } while (pl <= pr);
  console.log(`${count++}周目結果 [${array}]\n`);
  debugger;
  if (left < pr) quickSort(array, left, pr);
  if (right > pl) quickSort(array, pl, right);
}

quickSort(x, 0, x.length - 1);
console.log(x);

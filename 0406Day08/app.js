// 寫一個能指定四捨五入到幾位數的fn
// function roundedNumber(num, m = 2) {
//   return num.toFixed(m);
// }

// 更好的作法，因為toFixed回傳的是字串 不是數字
function roundedNumber(num, m = 2) {
  if (m < 1) {
    return num;
  }
  let ratio = 10 ** m;
  return Math.round(num * ratio) / ratio;
}

console.log(roundedNumber(123.456, 2)); // 123.46
console.log(roundedNumber(123.456, 1)); // 123.5
console.log(roundedNumber(123.456)); // 123.46

// 類似數量統計（？）
const list = [1, 2, 4, 2, 1, 4, 6, 8, 9, 2];

function printCount(arr) {
  const score = {};
  arr.forEach((a) => {
    if (score[a]) {
      score[a] = score[a] + 1;
    } else {
      score[a] = 1;
    }
  });
  return score;
}

console.log(printCount(list));

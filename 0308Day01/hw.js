// // // // 用for迴圈印出九九乘法表
// for (let a = 1; a <= 9; a++) {
//   for (let b = 1; b <= 9; b++) {
//     console.log(`${a} x ${b} = ${a * b}`);
//   }
// }

// // 基本款
// let star = "*";
// for (let a = 1; a <= 5; a++) {
//   console.log(star.repeat(a));
// }

// 進階款
let star = "*";
let space = " ";
for (let a = 1; a <= 9; a = a + 2) {
  console.log(space.repeat((9 - a) / 2) + star.repeat(a));
}

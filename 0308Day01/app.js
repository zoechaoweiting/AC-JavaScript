// let year = prompt("請輸入年份");

// // 我的二號
// if (year % 400 == 0) {
//   console.log("閏年");
// } else if (year % 4 == 0 && !year % 100 == 0) {
//   console.log("閏年");
// } else if (year % 100 == 0 && !year % 400 == 0) {
//   console.log("平年");
// } else if (!year % 4 == 0) {
//   console.log("平年");
// }

// // 我的
// if (year % 400 == 0 || (year % 4 == 0 && !year % 100 == 0)) {
//   console.log("閏年");
// } else {
//   console.log("平年");
// // }

// // 老師的
// if (year % 4 == 0) {
//   if (year % 100 == 0) {
//     if (year % 400 == 0) {
//       console.log("閏年");
//     } else {
//       console.log("平年");
//     }
//   } else {
//     console.log("閏年");
//   }
// } else {
//   console.log("平年");
// }

// // 老師的另一個
// // 用三個等號比較好
// if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
//   console.log("閏年");
// } else {
//   console.log("平年");
// }

// // for迴圈 印出1-10
// // 我的
// for (var a = 1; a < 11; a = a + 1) {
//   console.log(a);
// }

// // 老師的，老師用<=10而沒用<11是他考量可讀性問題，都可以
// for (var a = 1; a <= 10; a++) {
//   console.log(a);
// }
// // 或是
// for (var a = 0; a < 10; a++) {
//   console.log(a + 1);
// }

// // 印出1-10
// // 印出1-10單數

// for (var a = 0; a < 10; a++) {
//   if (a % 2 !== 1) {
//     console.log(a + 1);
//   }
// }

// //印出20-0的偶數

// for (var a = 20; a > 0; a--) {
//   if (a % 2 == 0) {
//     console.log(a);
//   }
// }

// // 印出九九乘法表;
// for (let a = 1; a < 10; a = a + 1)
//   for (let b = 1; b < 10; b = b + 1) {
//     console.log(a + " x " + b + " = " + a * b);
//   }

// 練習題2-1
// let A = "*";
// let a = A.repeat(1);
// console.log(a);
// let b = A.repeat(2);
// console.log(b);
// let c = A.repeat(3);
// console.log(c);

// // ans
// let A = "*";
// for (let a = 1; a < 6; a = a + 1) {
//   console.log(A.repeat(a));
// }

// // 練習題2-2
// // ans
// let A = "*";
// let B = " ";
// for (let a = 1; a < 10; a = a + 2) {
//   console.log(B.repeat((10 - a) / 2) + A.repeat(a));
// }

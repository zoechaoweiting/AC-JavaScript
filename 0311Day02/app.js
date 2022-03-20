// // while迴圈
// let a = 1;

// while (a < 10) {
//   console.log(123);
//   a = a + 1;
// }

// // continue 與 break
// for (var i = 0; i < 10; i++) {
//   if (i > 10) break;
//   console.log(i);
// }

// // 宣告函數 function expression
// function hello() {
//   console.log(123);
//   console.log(456);
//   console.log(789);
// }

// hello();

// // 函數另一種寫法
// // 宣告一個常數或變數，並將它指定給一個函數
// const hello = function () {
//   console.log(123);
// };

// hello();
// // 這種又稱匿名函數 anonymous fn
// // 因為你可以看到使用這種寫法我們並沒有幫函數命名，當然你要幫他命名也是可以，但你沒辦法使用那個命名呼叫函數

// // 同一個命名被重複使用
// function hello() {
//   console.log(123);
// }
// function hello() {
//   console.log(456);
// }
// hello();

// let hello = function () {
//   console.log(123);
// };
// let hello = function () {
//   console.log(456);
// };
// hello();
// // 咦為什麼用var和let的錯誤訊息不同

// // 箭頭函式 arrow fn
// const hello = () => {
//   console.log(123);
// };
// hello();

// // 幫我的函數帶一些參數進來
// // 參數可以設定不止一個
// function sayHello(a, b, c) {
//   console.log(a);
//   console.log(b);
//   console.log(c);
// }
// sayHello(123, 456, 789);

// // 參數預設值
// // 這個意思是 如果你有代引數進去，那就印出你代入的
// // 如果沒有，那就用我設定的預設值
// function sayHello(a, b = 1, c = 2) {
//   console.log(a);
//   console.log(b);
//   console.log(c);
// }
// sayHello(123);
// sayHello(123, "a", "b");
// // 為什麼要用預設值呢？
// // 可以讓我們的函數更有彈性一些

// // 回傳值return
// function add(a, b) {
//   let result = a + b;
//   return result;
// }
// console.log(add(1, 2));

// // 練習題
// function hello(a) {
//   // 如果大於等於0就印出n
//   if (a >= 0) {
//     let result = "n";
//     return result;
//     console.log(result);
//   }
// }
// console.log(hello(10));

// // 寫一段函式判斷hello(10)

// // 練習題
// function hello(n) {
//   // 如果n =奇數就印出a
//   // 不然印出b
//   if (n % 2 == 0) {
//     let oddnum = "a";
//     let evennum = "b";
//     return evennum;
//     console.log(evennum);
//   } else {
//     return oddnum;
//     console.log(oddnum);
//   }
// }
// console.log(hello(10));

// // 寫一段函式判斷hello(10)

// function add(a, b) {
//   //我不想處理負數運算
//   if (a >= 0 && b >= 0) {
//     return a + b;
//   } else {
//     return "err";
//   }
// }

// console.log(add(10, 20)); //30
// console.log(add(-10, 20)); //err

// // 練習題
// // 寫一個可以計算BMI的函數，可以接收身高體重作為參數，並且回傳計算結果（四捨五入到小數點以下第二位）
// // 提示BMI=體重kg/身高平方m
// function bmi(weight, height) {
//   let h = height / 100;
//   let w = weight;
//   return (w / (h * h)).toFixed(2);
// }

// console.log(bmi(42, 158));

// // 把閏年判斷包裝成一個函數，他可以接收年份作為參數，並回傳是否為閏年
// function leapYear(year) {
//   if ((year % 4 == 0 && year % 100 !== 0) || year % 400 == 0) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(leapYear(2000));

// // 改成
// function leapYear(year) {
//   return (year % 4 == 0 && year % 100 !== 0) || year % 400 == 0;
// }
// console.log(leapYear(2000));

// //怎麼印出最後一個元素？
// let list = ["a", "b", "c", "d", "e"];
// console.log(list[list.length - 1]);

// // 新增、減少元素
// list = ["a", "b", "c", "d"];

//['a', 'd']

// function headAndTail(list) {
//   //寫在這裡
//   //限定使用splice
//   list.splice(1, list.length - 2);
//   return list;
// }
// let a = [1, 2, 3, 4, 5];
// let b = ["a", "b", "c", "f", "k"];

// console.log(headAndTail(a));
// // [1, 5]
// console.log(headAndTail(b));
// // ["a", "k"]

// function headAndTail(list) {
//   //寫在這裡
//   //限定不使用splice
//   let first = [list[0]];
//   let last = [list[list.length - 1]];
//   return first.concat(last);
// }
// let a = [1, 2, 3, 4, 5];
// let b = ["a", "b", "c", "f", "k"];

// console.log(headAndTail(a));
// // [1, 5]
// console.log(headAndTail(b));
// // ["a", "k"]

// // 以下幾題都用同個陣列
// const list = ["a", "b", "c", "d"];
// //for
// for (let i = 0; i <= list.lengt; i++) {
//   console.log(list[i]);
// }

// //iteration 歷遍
// list.forEach(function (x) {
//   console.log(x);
// });

// list.forEach(function (x, counter) {
//   console.log(counter);
//   console.log(x);
// });

//找東西
// const result = list.find(function (x) {
//   return x == "a";
// });

// console.log(result);

// 找出陣列裡長度大於等於3的
// 這要用find，indexof跟incloud沒辦法做判斷，只能單純找東西
// const list = ["a", "bc", "cxxxx", "dss"];
// const result = list.find(function (x) {
//   return x.length >= 3;
// });

// console.log(result);

// const list = ["a", "bc", "cxxxx", "dss"];
// const result = list.filter(function (x) {
//   return x.length >= 3;
// });

// console.log(result);

// const list = [1, 2, 3, 4, 5];
// // let newlist = [];
// // for (a = 0; a < list.length; a++) {
// //   newlist[a] = list[a] * 2;
// // }
// // console.log(newlist);
// // //寫一串然後回傳[2, 4, 6, 8, 10]

// //同上題方法二 這個比較好
// const newlist = list.map(function (x) {
//   return x * 2;
// });
// console.log(newlist);

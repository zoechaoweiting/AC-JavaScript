// //filter應用於取出陣列裡的東西
// //印出[4, 5]
// const list = [1, 2, 3, 4, 5];
// console.log(list.filter((a) => a > 3));

// //老師做法
// let a = list.filter(function (x) {
//   return x > 3;
// });
// console.log(a);

// //filter應用於取出奇數
// const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(list.filter((a) => a % 2 == 1));
// //一開始忘記打==，只寫a % 2時答案卻也對，是因為這樣寫他會用布林值判斷，餘數是1時，布林值才會是true，所以答案才會一樣（因為0的布林值是false）

// //forEach應用於累加
// const list = [1, 2, 3, 4, 5];
// let total = 0;
// list.forEach((i) => {
//   total += i;
// });
// console.log(total);

// //reduce應用於累加
// const list = [1, 2, 3, 4, 5];
// let a = list.reduce(function (acc, cv) {
//   return acc + cv;
// });
// console.log(a);

// //reduce應用於找出整個陣列裡最大值
// const list = [19, 23, 3, 2, 24];
// let a = list.reduce(function (acc, cv) {
//   if (cv > acc) {
//     return cv;
//   } else {
//     return acc;
//   }
// });
// console.log(a);

// //物件應用
// const cat = {
//   name: "hana",
//   age: 5,
//   address: "taipei",
//   attack: function () {
//     console.log("go!");
//   },
// };
// console.log(cat);
// console.log(cat.name);
// console.log(cat.age);
// cat.attack();

// //隨時幫物件增加屬性
// const cat = {};
// cat.whatever = 1;
// console.log(cat);

// // 隨時幫物件砍屬性
// const cat = {
//   age: 18,
//   cc: 123,
// };
// console.log(cat);
// delete cat.age;
// console.log(cat);

// //DOM
// //只要知道id是什麼，運用getElementById就能拿出東西
// const c = document.getElementById("cc");
// console.log(c);

// //querySelector用跟CSS選取器一樣的方式來拿東西
// const c = document.querySelector("#cc");
// console.log(c);

// //選中並印出其中一個子項目
// const c = document.querySelector("#list :nth-child(1)");
// // c.textContent = "x";
// console.log(c);

// //用getElementsByClassName拿出class的東西，會拿出全部都叫這個名字的東西，變成一群
// const items1 = document.getElementsByClassName("item");
// console.log(items1);
// //拿出一群東西當中第幾個
// console.log(items1[0]);

// //用querySelectorAll拿出class
// const items2 = document.querySelectorAll(".item");
// console.log(items2);

// items2.forEach((x) => {
//   console.log(x);
// });

// //讓每個字變成五倍長
// //運用textContent
// const items = document.querySelectorAll(".item");
// items.forEach((item) => {
//   item.textContent = item.textContent.repeat(5);
// });

// const t = document.querySelector("#cc");
// console.log(t);
// // t.textContent = "<h1>ttt</h1>";
// t.innerHTML = "<h1>ttt</h1>";
// t.style.color = "red";
// t.style["background-color"] = "green";

// //classList
// //把每個li都加上紅底白字
// const t = document.querySelectorAll(".item");
// t.forEach((item) => {
//   item.classList.add("hi");
// });

// //把奇數行變紅色
// const t = document.querySelectorAll(".item");
// t.forEach((item, idx) => {
//   if (idx % 2 === 0) {
//     item.classList.add("hi");
//   }
// });

// //事件監聽者
// //監聽了整份文件
// document.addEventListener("click", function () {
//   console.log("點了");
// });

// //只監聽id cc那邊，其他的點了不會反應
// const h = document.querySelector("#cc");
// h.addEventListener("click", function () {
//   console.log("點了");
// });
// //也可以寫成下面這樣，把function抽出來
// const h = document.querySelector("#cc");
// const hey = function () {
//   console.log("點了");
// };
// h.addEventListener("click", hey);

// //監聽文件載入完畢後再開始執行js文件
// document.addEventListener("DOMContentLoaded", function () {
//   const h = document.querySelector("#cc");
//   h.addEventListener("click", function () {
//     console.log("點了");
//   });
// });

// //高階函數
// function a() {
//   const b = function () {
//     console.log(123);
//   };
//   return b;
// }
// a()()();

// //可以一個東西加上多個監聽器
// const btn = document.querySelector("#btn");
// btn.addEventListener("click", () => {
//   console.log("yes");
// });
// btn.addEventListener("click", () => {
//   console.log("nooo");
// });
// //侵入式寫法，會後面覆蓋前面
// btn.onclick = function () {
//   console.log(123);
// };
// btn.onclick = function () {
//   console.log(456);
// };

//關掉預設行為 .preventDefault() 應用於點超連結不跳轉
const ln = document.querySelector("#link");
ln.addEventListener("click", function (e) {
  e.preventDefault();
  console.log("hi");
});
//關掉預設行為 .preventDefault() 應用於鎖右鍵
document.addEventListener("contextmenu", function (e) {
  e.preventDefault();
  console.log("hi");
  alert("不能右鍵");
});

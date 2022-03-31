// // 物件導向OOP
// function heroCreator(name, power) {
//   const hero = {
//     name: name,
//     power: power,
//     attack: function () {
//       console.log("ATTACK!");
//     },
//   };
//   return hero;
// }

// const h1 = heroCreator("kk", 100);
// const h2 = heroCreator("gg", 10000);
// h1.attack();
// h2.attack();

// // 也可以寫成這樣
// const actions = {
//   attack: function () {
//     console.log("ATTAK!!!!!!");
//   },
//   eat: function () {
//     console.log("Yammmy");
//   },
// };

// function heroCreator(name, power) {
//   const hero = Object.create(actions);
//   hero.name = name;
//   hero.power = power;

//   return hero;
// }

// const h1 = heroCreator("kk", 100);
// const h2 = heroCreator("gg", 10000);
// h1.attack();
// h1.eat();

// 有沒有new的差別
// 加上new之後，在呼叫這個fn時，所產生的fn泡泡裡會比沒有加上new的fn多了一個叫this的空的{}
// 所以他會回傳this 我不需要另外再去設定reture
// 如果沒有new，呼叫時會因為沒有設return而印出undefined
// function heroCreator(name, power) {
//   this.name = name;
//   this.power = power;
// }
// const h1 = new heroCreator("kk", 10000);
// console.log(h1);

// function heroCreator(name, power) {
//   this.name = name;
//   this.power = power;
// }
// const actions = {
//   attack: function () {
//     console.log("ATTAK!!!!!!");
//   },
//   eat: function () {
//     console.log("Yammmy");
//   },
// };

// heroCreator.prototype.yyyy = function () {
//   console.log("123");
// };
// heroCreator.prototype = actions; // 這種寫法是會把前一句蓋掉，所以通常我們會比較常用65行的寫法，是指定那一個屬性的內容，而不是指定整塊東西

// const h1 = new heroCreator("kk", 10000);
// console.log(heroCreator.prototype);

//

// // this
// // 誰呼叫誰就是this
// const cat = {
//   name: "kitty",
//   age: 18,
//   hello: function () {
//     console.log(this);
//   },
// };
// cat.hello();
// // 沒人呼叫，this -> 全域
// function hi() {
//   console.log(this);
// }
// hi(); // 87行會印出window

// function hi() {
//   function hey() {
//     console.log(this); // 也是印出window 全域物件，因為hey前面也沒人
//   }
//   hey();
// }
// hi();
//
// const a = function () {
//   console.log(arguments);
// };
// a("aa", "bb", "cc");
// //
// const arguments = 123;
// const a = () => {
//   console.log(arguments);
// };
// a("aa", "bb", "cc"); // 外面有設123時會印123，外面沒設定時就會錯誤

// const btn = document.querySelector(".btn");
// btn.addEventListener("click", function () {
//   console.log(this); // 會印出button本身，所以這時候我們也可以用this.textContent ＝ '123' 把button上面的字改成123
//   this.textContent = "123";
// });

// // 你以為這樣會印出setTimeout嗎？ 錯！還是印出window！為什麼呢？這要先回想setTimeout在幹嘛 他是設定多少時間後讓fn去排隊，所以其實還是沒有人呼叫this
// setTimeout(function () {
//   console.log(this);
// }, 1000);
//
// 使用call這個東西可以改變走向，會把cat帶進去this
// const cat = {
//   name: "kitty",
//   age: 18,
// };

// function hello() {
//   console.log(this);
// }

// hello.call(cat);

// 嚴格模式
"use strict"; // 加上這行後，就進入嚴格模式，this就會印出undefined，放在外面是對整份文件作用，無論放在他前面或後面
function hello() {
  console.log(this);
}
hello();

function hello() {
  "use strict"; // 如果把它放進fn裡，那就只會有這個fn作用，離開這個fn就不會嚴格模式
  console.log(this);
}
hello();
//為什麼嚴格模式是字串呢？為什麼不是陣列啊fn啊之類的？因為這樣如果當瀏覽器不支援時，他就只是個字串而已不會影嚮其他的東西，但如果是fn就直接出錯啦

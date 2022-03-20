// 箭頭函式??
// const add = (a, b) => {
//   return a + b;
// };

// const add = (a, b) => a + b;

// const add = (a, b) => {
//   a + b;
// };

// let result = (1, 2);
// console.log(result);

//

// // 物件縮寫
// let name = "kk";
// let age = "18";

// const cat = {
//   name: name,
//   age: age,
// };
// console.log(cat);

// key 跟 valie 一樣名字時 可以寫出一個就好 如下 答案會一樣
// const cat = {
//   name,
//   age,
// };
// console.log(cat);

//

// // 物件解構
// const cat = {
//   name: "kk",
//   age: "18",
// };

// let name = cat.name;
// let age = cat.age;
// // 上面兩行可以縮寫成下面這一行
// let { name, age } = cat;
// console.log(name, age);

// //想用解構 但name已經被let宣告變數了 名字會重複不能用 就用冒號給他一個小名 這樣他會去抓物件的name的值 而不是變數name
// let name = "cc";
// let { name: petname, age } = cat;

// console.log(petname, age);

//
// 解構搭配函式
// function hello(h) {
//   const name = h.name;
//   const age = h.age;

//   console.log(name, age);
// }
// const hero = {
//   name: "kk",
//   age: 18,
// };
// hello(hero);

// 裡面可以解構 變成
// function hello(h) {
//   const { name, age } = h;

//   console.log(name, age);
// }
// const hero = {
//   name: "kk",
//   age: 18,
// };
// hello(hero);

// 更乾脆一點 直接在函式那邊解構
// function hello({ name, age }) {
//   console.log(name, age);
// }
// const hero = {
//   name: "kk",
//   age: 18,
// };
// hello(hero);

//

// ... 意思就是把陣列展開 元素一個個拿出來（不在是只看一個陣列） splat operator
// const a = [1, 2, 3];
// const b = [4, 5, 6];
// 要把ab陣列合起來變一個陣列 用concat
// const c = a.concat(b);
// 另一種方法就是...
// const c = [...a, ...b];
// console.log(c);

// // ...應用於函式
// function sayHello(x, y, z) {
//   console.log(x, y, z);
// }
// sayHello(a); // 當我這樣寫時 它會在x帶入a陣列 yz沒有值帶入 所以會印出[1, 2, 3], undefined, undefined 而不是1, 2, 3
// // 想讓陣列的1, 2, 3元素直接帶進去函式的x, y, z 就要用...
// sayHello(...a);

// // 應用於要帶入的引數比參數多時 但我又想要全部印出來 可以用...把多的引數都用陣列裝起來 在這裡...的意義變成了把東西變陣列的意思
// function hi(a, b, ...c) {
//   console.log(a);
//   console.log(b);
//   console.log(c);
// }
// hi(1, 2, 3, 4, 5, 6, 7);

// // 那如果是引數與參數數量剛好呢
// function hi(a, b, ...c) {
//   console.log(c);
// }
// hi(1, 2, 3); // 這樣會印出陣列[3]

// // 那如果是 引數比參數還少呢
// function hi(a, b, ...c) {
//   console.log(c);
// }
// hi(1, 2); // 這樣會印出空陣列[]

// // 那如果參數跟引數都有...呢
// const a = [1, 2, 3];
// function sayHello(x, y, ...z) {
//   console.log(x, y, z);
// }
// sayHello(...a);
// // 會印出1, 2, [3]
// // 他的意思是把陣列a裡面的元素都拿出來帶進去函式，但z那邊要把值變成陣列

//

// // 運用DOM新增標籤
// const h = document.createElement('h1')
// h.textContent = 'hello'
// // 但這只能console.log印出來 html裡面是不會顯示的
// // 要顯示的話要做成下面這樣
// const box = document.querySelector("#hello");
// const h = document.createElement("h1");
// h.textContent = "hello";
// box.appendChild(h); // 這個做法是把h1加到id:hello的那個div裡 所以在瀏覽器裡會顯示成<div><h1></h1></div>

// // 當我們要按下按鈕後刪除子層的最後一個東西
// const btn = document.querySelector("#btn");
// btn.addEventListener("click", () => {
//   const lastOne = document.querySelector("#list :last-child");

//   lastOne.remove(); // .remove 的作用就是刪除
// });

// // 但上面的方法 當刪光之後再繼續點會出現錯誤訊息 所以要多加一個條件判斷 就算刪完也不會出現錯誤
// const btn = document.querySelector("#btn");
// btn.addEventListener("click", () => {
//   const lastOne = document.querySelector("#list :last-child");
//   if (lastOne) {
//     lastOne.remove(lastOne);
//   }
// });

// // 取上一層（父層）
// const btn = document.querySelector("#btn");
// btn.addEventListener("click", () => {
//   const lastOne = document.querySelector("#list :last-child");

//   console.log(lastOne.parentElement);
//   console.log(lastOne.parentNode);
// });

// // 抓出父層所有小孩出來
// const btn = document.querySelector("#btn");
// btn.addEventListener("click", () => {
//   const pa = document.querySelector("ul");

//   console.log(pa.children); // 這個印出後是HTMLCollection 內容很單純就是所有子層 所以推薦用這個
//   console.log(pa.childNodes); // 但這個是NodeList 會把註解、換行(text)都跟子層一起印出來
// });

// // 同一層抓隔壁的元素（抓兄弟姊妹的意思）
// const lastOne = document.querySelector("ul :last-child");

// console.log(lastOne.previousElementSibling); // 這會抓出ul裡最後一個li的前一個 是Element系列
// console.log(lastOne.previousSibling); // 這是Node系列 所以抓前一個會變成抓換行
// console.log(lastOne.nextElementSibling); // 這是抓出ul裡最後一個li的後面一個li 是Element系列 因為原本設定的lastOne已經是最後一個元素了 所以往下抓一個會是null空值
// console.log(lastOne.nextSibling); // 這是Node系列 所以抓後一個也會變成抓換行

//

// 運用DOM新增元素並且安插在新的位置（有四個位置能插入，由兩條線：起始線與結尾線定位）
// const list = document.querySelector("#list");

// const newLi = document.createElement("li"); // 創建新標籤
// newLi.textContent = "X"; // 幫新標籤新增內容
// list.insertAdjacentElement("beforebegin", newLi); // 把新元素加在ul起始線的前面，是在整個ul前面
// list.insertAdjacentElement("afterbegin", newLi); // 把新元素加在ul起始線的後面，所以是第一個li之前
// list.insertAdjacentElement("beforeend", newLi); // 把新元素加在ul結尾線的前面，所以是最後一個li之後
// list.insertAdjacentElement("afterend", newLi); // 把新元素加在ul結尾線的後面，是在整個ul後面

// // // 寫成函式
// function creatLi(msg) {
//   const list = document.querySelector("#list");
//   const newLi = document.createElement("li");
//   newLi.textContent = msg;
//   return list.insertAdjacentElement("beforeend", newLi);
// }
// creatLi("x");

// // 寫成for迴圈
// for (i = 0; i < 3; i++) {
//   const list = document.querySelector("#list");
//   const newLi = document.createElement("li");
//   newLi.textContent = i;
//   list.insertAdjacentElement("beforeend", newLi);
// }

// // 老師另一個方法 但這跟上面差在哪呢？ 用insertAdjacentElement的才能監聽，因為他們是物件，但用insertAdjacentHTML因為只是一段文字 所以沒辦法監聽
// const list = document.querySelector("#list");
// let msg = "x";
// const newLi = `<li>${msg}</li>`;
// list.insertAdjacentHTML("beforeend", newLi);

//

// // 抓資料 使用XMLHttpRequest
// const API = "https://jsonplaceholder.typicode.com/users";
// const req = new XMLHttpRequest();

// //加個監聽器，發生load完成後印出ok
// req.addEventListener("load", () => {
//   console.log("ok");
// });
// req.open("GET", API); //抓API連結資料

// req.send();

// //回傳抓到的資料看看 是字串唷
// const API = "https://jsonplaceholder.typicode.com/users";
// const req = new XMLHttpRequest();
// req.addEventListener("load", () => {
//   let resp = req.responseText;
//   console.log(resp);
// });
// req.open("GET", API); //抓API連結資料

// req.send();

// //加上JSON.parse後 把抓到的東西轉成物件(剛好這個連結的資料最外層包的是陣列)
// const API = "https://jsonplaceholder.typicode.com/users";
// const req = new XMLHttpRequest();
// req.addEventListener("load", () => {
//   let resp = JSON.parse(req.responseText);
//   console.log(resp);
// });
// req.open("GET", API); //抓API連結資料

// req.send();

// // 用forEach抓出裡面的name
// const API = "https://jsonplaceholder.typicode.com/users";
// const req = new XMLHttpRequest();
// req.addEventListener("load", () => {
//   let resp = JSON.parse(req.responseText);
//   resp.forEach((user) => {
//     console.log(user.name);
//   });
// });
// req.open("GET", API); //抓API連結資料

// req.send();

// // 練習把name呈現到瀏覽器畫面上 還沒想完！！
// const API = "https://jsonplaceholder.typicode.com/users";
// const req = new XMLHttpRequest();
// req.addEventListener("load", () => {
//   let resp = JSON.parse(req.responseText);
//   resp.forEach((user) => {
//     const box = document.querySelector("#hello");
//     const users = document.createElement("div");
//     users.textContent = user.name;
//   });
//   box.insertAdjacentElement("afterend", users);
// });
// req.open("GET", API); //抓API連結資料

// req.send();

// //老師的做法
// const API = "https://jsonplaceholder.typicode.com/users";
// const req = new XMLHttpRequest();

// req.addEventListener("load", () => {
//   const ul = document.createElement("ul");

//   let users = JSON.parse(req.responseText);
//   users.forEach((user) => {
//     const li = document.createElement("li");
//     li.textContent = user.name;
//     ul.appendChild(li);
//   });

//   document.querySelector("body").appendChild(ul);
// });
// req.open("GET", API);
// req.send();

// 改用fetch函式來做
// const API = "https://jsonplaceholder.typicode.com/users";

// const a = fetch(API);
// a.then((resp) => {
//   console.log(resp);
// });
// // 上面可以縮寫成下面這樣
// fetch(API).then((resp) => {
//   console.log(resp);
// });

// fetch(API) // 用fetch去抓資料 會是一個promise 他的狀態會是pending狀態，等待傳回來後解析 所以後面要接then 代表著等他傳回來再執行 執行第一個then 得到一個新的promise後 再做第二個then 得到答案
//   .then((resp) => {
//     return resp.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log("fail-------" + err);
//   }); // 如果成功就執行上面那些 如果失敗或抓回來的資料他沒辦法解讀，那就跳到catch然後印出'自訂的錯誤訊息'

// // 上面那一大串可以改寫成下面這樣（乾淨很多）
const API = "https://jsonplaceholder.typicode.com/users";
const parse = (resp) => resp.json();
const logger = (data) => {
  console.log(data);
  data.forEach((user) => {
    console.log(user.name);
  });
};
const catcher = (err) => {
  console.log("fail-------" + err);
};

fetch(API).then(parse).then(logger).catch(catcher);

//async搭配await
// const API = "https://jsonplaceholder.typicode.com/users";
async function getUsers() {
  const rawData = await fetch(API);
  const users = await rawData.json();
  //   console.log(users);
  users.forEach((user) => {
    console.log(user.name);
  });
}
getUsers();

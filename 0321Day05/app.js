// const a = document.querySelector("#a");
// const b = document.querySelector("#b");

// // 當我按下時印出
// // 按下a就只會經過自己 下面剛好沒有b
// 按b的區域 capturing phase 會先經過a再到b 然後bubbling phase會從b再到a 會在bubbling phase這邊回傳 所以會先印出b再印出a
// a.addEventListener("click", (e) => {
//   console.log("aaa");
// });
// b.addEventListener("click", (e) => {
//   console.log("bbb");
// });

// // e.target會準確印出我點的那個標的物，所以當我點下b的區域時，不管是a還是b都是回傳target phase，所以都是傳b的部分
// // 如果我點a的區域，那target phase就是a，所以回傳a的部分
// a.addEventListener("click", (e) => {
//   console.log("aaa=", e.target);
// });
// b.addEventListener("click", (e) => {
//   console.log("bbb=", e.target);
// });

// // 與上面的差異是，e.target會明確指向觸發事件，而e.currentTarget則是會印出該事件所經歷的DOM
// // 所以點下b 會印出b與a，點下a就印出a
// a.addEventListener("click", (e) => {
//   console.log("aaa=", e.currentTarget);
// });
// b.addEventListener("click", (e) => {
//   console.log("bbb=", e.currentTarget);
// });

//

// // 非同步處理  // 後面的3000代表3秒
// console.log(0);
// setTimeout(function () {
//   console.log(123);
// }, 3000);
// console.log(1);

// 為什麼用let會印出0 1 2 但用var卻是3 3 3呢？
for (let i = 0; i < 3; i++) {
  setTimeout(function () {
    console.log(i);
  });
  console.log(i);
}
// 我的理解是 假設今天我們不看setTimeout，console.log在far裡面時，用let的情況下跟用var一樣，都是印出0 1 2
// 當今天加入setTimeout時，var之所以會變成3，是因為在沒有每次印出來的狀況下，i每一輪的值都會因為可以重新宣告的特性而在被重新賦值時被蓋過去
// 但用let就不一樣了，因為let雖然也不能重新宣告，但他可以重新賦值，所以每一輪的值都會留下來，只是還沒印出來而已
// 他其實只又在第一輪是（宣告）let i = 0，第二輪開始是（賦值）i = i++ (有無再度出現let的差別)

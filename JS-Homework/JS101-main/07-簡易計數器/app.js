// // 程式碼寫在這裡
document.addEventListener("DOMContentLoaded", function () {
  const pluss = document.querySelector("#plus")
  const minuss = document.querySelector("#minus")
  const num = document.querySelector("#counter")
  let total = 1
  pluss.addEventListener("click", () => {
    total += 1
    num.value = total
  })
  minuss.addEventListener("click", () => {
    if (num.value > 0) {
      total -= 1
      num.value = total
    }
  })
})

// //老師做法
// document.addEventListener("DOMContentLoaded", function () {
//   let total = 1
//   const plus = document.querySelector("#plus")
//   const minus = document.querySelector("#minus")
//   let num = document.querySelector("#counter")
//   plus.addEventListener("click", () => {
//     total += 1
//     num.value = total
//   })
//   minus.addEventListener("click", () => {
//     if (num.value >= 1) {
//       total -= 1
//       num.value = total
//     }
//   })
// })

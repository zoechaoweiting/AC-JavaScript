// 程式碼寫在這裡
// 提示：BMI = 體重(kg) / 身高(m) 平方
// 按下計算
// 抓身高
// 抓體重
// 結果顯示在右邊

const btn = document.querySelector("#btn")
const height = document.querySelector("#bodyHeight")
const weight = document.querySelector("#bodyWeight")
const result = document.querySelector("#resultText")
let bmi = 0

btn.addEventListener("click", () => {
  let hv = height.value
  let w = weight.value
  let h = hv / 100

  bmi = (w / (h * h)).toFixed(2)
  result.textContent = bmi
})

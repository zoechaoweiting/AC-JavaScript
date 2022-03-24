// 程式碼寫這裡
const API =
  "https://tcgbusfs.blob.core.windows.net/dotapp/youbike/v2/youbike_immediate.json"
const input = document.querySelector("#searchKeyword")
const list = document.querySelector(".siteList")
const form = document.querySelector("#searchForm")

// 從API的網址拿資料解析，再將輸入框的值與資料裡的ar進行比對，用includes()條件判斷並回傳
async function getAddr() {
  const rawData = await fetch(API)
  const originalData = await rawData.json()
  const addrData = originalData.filter((road) => {
    if (road.ar.includes(input.value)) {
      return road
    }
  })
  // 用forEach()去抓出剛剛回傳資料裡的站名、現有數量、地址，幫它們加上標籤跟屬性後，放進ul裡
  addrData.forEach((rd) => {
    const station = rd.sna.slice(11)
    const number = rd.sbi
    const address = rd.ar
    const newLi = document.createElement("li")
    const bikeIcon = document.createElement("i")
    const br = document.createElement("br")
    const small = document.createElement("small")
    newLi.classList.add("list-group-item")
    newLi.classList.add("fs-5")
    bikeIcon.classList.add("fas")
    bikeIcon.classList.add("fa-bicycle")
    small.classList.add("text-muted")
    newLi.textContent = `${station} (${number})`
    small.textContent = address
    newLi.insertAdjacentElement("afterbegin", bikeIcon)
    newLi.appendChild(br)
    newLi.appendChild(small)
    list.appendChild(newLi)
  })
}
// 監聽form表單的submit事件，發生後，關掉預設行為，清空清單，若輸入框的值不是空的，則呼叫getAddr()函式
form.addEventListener("submit", (e) => {
  e.preventDefault()
  while (list.lastElementChild) {
    list.removeChild(list.lastElementChild)
  }
  if (input.value.trim() !== "") {
    getAddr()
  }
})

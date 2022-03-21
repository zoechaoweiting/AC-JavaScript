// 程式碼寫這裡
// 點新增 下面會新增一個打字的內容在最上面
const addBtn = document.querySelector("#addBtn")
const taskInput = document.querySelector("#taskInput")
const todoList = document.querySelector(".todo-list")
const closeBtn = document.querySelector(".closeBtn")
addBtn.addEventListener("click", () => {
  if (taskInput.value !== "") {
    const newLi = document.createElement("li")
    const item = document.createElement("span")
    const closeBtn = document.createElement("button")
    item.textContent = taskInput.value
    closeBtn.textContent = "X"
    newLi.appendChild(item)
    newLi.appendChild(closeBtn)
    closeBtn.addEventListener("click", () => {
      closeBtn.parentElement.remove()
    })
    newLi.classList.add("todo-item")
    item.classList.add("item")
    closeBtn.classList.add("closeBtn")
    return todoList.insertAdjacentElement("afterbegin", newLi)
  }
})
taskInput.addEventListener("keydown", (e) => {
  if (taskInput.value !== "" && e.keyCode === 13) {
    const newLi = document.createElement("li")
    const item = document.createElement("span")
    const closeBtn = document.createElement("button")
    item.textContent = taskInput.value
    closeBtn.textContent = "X"
    newLi.appendChild(item)
    newLi.appendChild(closeBtn)
    closeBtn.addEventListener("click", () => {
      closeBtn.parentElement.remove()
    })
    newLi.classList.add("todo-item")
    item.classList.add("item")
    closeBtn.classList.add("closeBtn")
    return todoList.insertAdjacentElement("afterbegin", newLi)
  }
})
document.querySelectorAll(".closeBtn").forEach((button) => {
  button.addEventListener("click", () => {
    button.parentElement.remove()
  })
})

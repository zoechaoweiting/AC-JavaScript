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

// // 老師的做法
// function createTodoItem(text) {
//   const todo = document.createElement("li")
//   todo.className = "todo-item"

//   const span = document.createElement("span")
//   span.className = "item"
//   span.textContent = text

//   const btn = document.createElement("button")
//   btn.className = "closeBtn"
//   btn.textContent = "X"
//   btn.addEventListener("click", function (e) {
//     this.parentElement.remove()
//   })

//   todo.appendChild(span)
//   todo.appendChild(btn)

//   return todo
// }

// function addItemInContainer(container, input) {
//   if (input.value.trim() !== "") {
//     const todo = createTodoItem(input.value)
//     container.insertAdjacentElement("afterbegin", todo)
//   }

//   input.value = ""
//   input.focus()
// }

// function addTodo() {
//   const container = document.querySelector(".todo-list")
//   const input = document.querySelector("#taskInput")
//   addItemInContainer(container, input)
// }

// document.querySelector("#addBtn").addEventListener("click", addTodo)

// document.querySelector("#taskInput").addEventListener("keyup", (e) => {
//   if (e.key === "Enter") {
//     addTodo()
//   }
// })

// // 老師的做法2 使用事件委任
// function createTodoItem(text) {
//   const todo = document.createElement("li")
//   todo.className = "todo-item"

//   const span = document.createElement("span")
//   span.className = "item"
//   span.textContent = text

//   const btn = document.createElement("button")
//   btn.className = "closeBtn"
//   btn.textContent = "X"

//   todo.appendChild(span)
//   todo.appendChild(btn)

//   return todo
// }

// function addItemInContainer(container, input) {
//   if (input.value.trim() !== "") {
//     const todo = createTodoItem(input.value)
//     container.insertAdjacentElement("afterbegin", todo)
//   }

//   input.value = ""
//   input.focus()
// }

// function addTodo() {
//   const container = document.querySelector(".todo-list")
//   const input = document.querySelector("#taskInput")
//   addItemInContainer(container, input)
// }

// document.querySelector("#addBtn").addEventListener("click", addTodo)

// document.querySelector("#taskInput").addEventListener("keyup", (e) => {
//   if (e.key === "Enter") {
//     addTodo()
//   }
// })

// // 事件委任 event delegation
// document.querySelector(".todo-list").addEventListener("click", (e) => {
//   if (e.target.matches("button")) {
//     e.target.parentElement.remove()
//   }
// })

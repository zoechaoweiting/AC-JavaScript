import CC from "axios"
const form = document.querySelector(".form")
const token = localStorage.getItem("todo-token")
form.addEventListener("submit", (e) => {
  e.preventDefault()
  const email = document.querySelector("#email")
  const nickname = document.querySelector("#nickname")
  const password = document.querySelector("#password")
  if (email.value.trim() !== "" && password.value.trim() !== "") {
    // 原本我的寫法
    // const user = {}
    // user.email = email.value
    // user.nickname = nickname.value
    // user.password = password.value
    // console.log(user)
    const userData = {
      user: {
        email: email.value,
        nickname: nickname.value,
        password: password.value,
      },
    }
    // fetch("https://todoo.5xcamp.us/users", {
    //   method: "POST",
    //   body: JSON.stringify(userData),
    //   headers: new Headers({
    //     "Content-Type": "application/json",
    //   }),
    // })
    // .then((resp) => {
    //     return resp.json()
    //   })
    //   .then((data) => {
    //     console.log(data)
    //   })
    //   .catch((err) => {
    //     console.log(err)
    //   })
    // 改用axios
    CC.post("https://todoo.5xcamp.us/users", userData).then(({ data }) => {
      console.log(data)
    })
  }
})

const form2 = document.querySelector(".login_form")
form2.addEventListener("submit", (e) => {
  e.preventDefault()
  const email2 = document.querySelector("#login_email")
  const password2 = document.querySelector("#login_password")
  if (email2.value.trim() !== "" && password2.value.trim() !== "") {
    const userData2 = {
      user: {
        email: email2.value,
        password: password2.value,
      },
    }
    CC.post("https://todoo.5xcamp.us/users/sign_in", userData2).then((resp) => {
      console.log(resp)
      const token = resp.headers.authorization
      //   document.querySelector(".token").value = token
      localStorage.setItem("todo-token", token)
      console.log("登入成功")
    })
  }
})
const checkForm = document.querySelector("#checkForm")
checkForm.addEventListener("click", (e) => {
  e.preventDefault()
  //   const token = document.querySelector(".token").value
  const token = localStorage.getItem("todo-token")
  console.log(token)
  if (token) {
    CC.get("https://todoo.5xcamp.us/check", {
      headers: { Authorization: token },
    }).then(({ data }) => {
      document.querySelector("#result").textContent = data.message
    })
  }
})

document.querySelector("#logoutForm").addEventListener("submit", (e) => {
  e.preventDefault()
  const token = localStorage.getItem("todo-token")
  CC.delete("https://todoo.5xcamp.us/users/sign_out", {
    headers: { Authorization: token },
  })
    .then((resp) => {
      localStorage.removeItem("todo-token")
      console.log(resp)
    })
    .catch((err) => {
      console.log(err)
    })
})

document.querySelector("#todoForm").addEventListener("submit", (e) => {
  e.preventDefault()

  const todo = document.querySelector("#todo")
  const token = localStorage.getItem("todo-token")
  const todoData = {
    todo: {
      content: todo.value.trim(),
    },
  }
  CC.post("https://todoo.5xcamp.us/todos", todoData, {
    headers: { Authorization: token },
  })
    .then(({ data }) => {
      console.log(data)
      const newLi = `<li data-xyxid='${data.id}'><span>X</span><div>edit</div>${data.content}</li>`
      document.querySelector("#ul").insertAdjacentHTML("afterbegin", newLi)
      e.target.reset()
    })
    .catch((err) => {
      console.log(err)
    })
})

if (token) {
  CC.get("https://todoo.5xcamp.us/todos", {
    headers: { Authorization: token },
  }).then(({ data }) => {
    const ul = document.querySelector("#ul")
    data.todos.forEach((todo) => {
      const li = `<li data-xyxid='${todo.id}'><span>X</span><div>edit</div>${todo.content}</li>`
      ul.insertAdjacentHTML("beforeend", li)
    })
  })
}

document.querySelector("#ul").addEventListener("click", (e) => {
  if (e.target.nodeName === "SPAN") {
    const li = e.target.parentElement
    const id = li.dataset.xyxid
    li.remove()
    CC.delete(`https://todoo.5xcamp.us/todos/${id}`, {
      headers: { Authorization: token },
    })
  }
})

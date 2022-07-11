//define the selectors
const newTodo = document.querySelector(".new_todo");
const newTodoBtn = document.querySelector(".new_todo_button");
const list = document.querySelector(".list");

//define the event listeners
//when everything loads the getTodos function is called
document.addEventListener("DOMContentLoaded", getTodos);
newTodoBtn.addEventListener("click", addTodo);
list.addEventListener("click", deleteCheck);

//define the functions
function addTodo(e) {
  //prevent form from submitting
  e.preventDefault();
  //create todo div
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");
  //create li
  const todoItem = document.createElement("li");
  todoItem.innerText = newTodo.value;
  todoItem.classList.add("todo_item");
  todoDiv.appendChild(todoItem);
  //save todo to localStorage
  saveTodos(newTodo.value);
  //check button
  const checkBtn = document.createElement("button");
  checkBtn.innerHTML = "<i class='fas fa-check'></i>";
  checkBtn.classList.add("check_btn");
  todoDiv.appendChild(checkBtn);
  //delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.innerHTML = "<i class='fas fa-trash'></i>";
  deleteBtn.classList.add("delete_btn");
  todoDiv.appendChild(deleteBtn);
  //append div to list
  list.appendChild(todoDiv);
  newTodo.value = "";
}

function deleteCheck(e) {
  const item = e.target;
  // console.log(item);
  //delete todo
  if (item.classList[0] === "delete_btn") {
    const todo = item.parentElement;
    // console.log(todo);
    todo.remove();
  }

  //check todo
  if (item.classList[0] === "check_btn") {
    const todo = item.parentElement;
    todo.classList.toggle("completed");
  }
}

//save the todos to localStorage
function saveTodos(todo) {
  //check if there are already todos in local storage
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  todos.push(todo);
  localStorage.setItem("todos", JSON.stringify(todos));
}

function getTodos() {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  todos.forEach(function (todo) {
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    //create li
    const todoItem = document.createElement("li");
    //here we need the value that we get from our local storage
    todoItem.innerText = todo;
    todoItem.classList.add("todo_item");
    todoDiv.appendChild(todoItem);
    //check button
    const checkBtn = document.createElement("button");
    checkBtn.innerHTML = "<i class='fas fa-check'></i>";
    checkBtn.classList.add("check_btn");
    todoDiv.appendChild(checkBtn);
    //delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = "<i class='fas fa-trash'></i>";
    deleteBtn.classList.add("delete_btn");
    todoDiv.appendChild(deleteBtn);
    //append div to list
    list.appendChild(todoDiv);
  });
}

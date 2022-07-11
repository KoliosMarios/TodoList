//define the selectors
const newTodo = document.querySelector(".new_todo");
const newTodoBtn = document.querySelector(".new_todo_button");
const list = document.querySelector(".list");

//define the event listeners
newTodoBtn.addEventListener("click", addTodo);

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

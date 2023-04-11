//Selectors
let todoInput = document.querySelector("#todo_input");
let todoButton = document.querySelector("#todo_button");
let todoList = document.querySelector("#todo_list");
//Event Listners
todoButton.addEventListener("click", addtask);
todoList.addEventListener("click" , addtotrash);
//Functions
function addtask(event) {
  //prevent from form submitting
  event.preventDefault();
  //Todo DIV
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");
  //Todo LIST
  const newTodo = document.createElement("li");
  newTodo.innerHTML = todoInput.value;
  newTodo.classList.add("todo-item");
  todoDiv.appendChild(newTodo);
  //   //Todo Complete Button
  //   const completeButton = document.createElement("button");
  //   completeButton.innerHTML = '<i class="fa fa-check"></i>';
  //   completeButton.classList.add("complete_btn");
  //   todoDiv.appendChild(completeButton);
  //Todo Trash Button
  const deleteButton = document.createElement("button");
  deleteButton.innerHTML = '<i class="fa fa-trash"></i>';
  deleteButton.classList.add("trash_btn");
  todoDiv.appendChild(deleteButton);

  //Append LIST
  todoList.appendChild(todoDiv);
  //Clear TOdo Input Value
  todoInput.value = "";
}
//FUnction to Delete the task
function addtotrash(event){
const item = event.target;
 const todo = item.parentElement;
 todo.remove();
}
// //Selectors
// let todoInput = document.querySelector("#todo_input");
// let todoButton = document.querySelector("#todo_button");
// let todoList = document.querySelector("#todo_list");
// //Event Listners
// todoButton.addEventListener("click", addtask);
// todoList.addEventListener("click" , addtotrash);
// //Functions
// function addtask(event) {
//   //prevent from form submitting
//   event.preventDefault();
//   //Todo DIV
//   const todoDiv = document.createElement("div");
//   todoDiv.classList.add("todo");
//   //Todo LIST
//   const newTodo = document.createElement("li");
//   newTodo.innerHTML = todoInput.value;
//   newTodo.classList.add("todo-item");
//   todoDiv.appendChild(newTodo);
//   //   //Todo Complete Button
//   //   const completeButton = document.createElement("button");
//   //   completeButton.innerHTML = '<i class="fa fa-check"></i>';
//   //   completeButton.classList.add("complete_btn");
//   //   todoDiv.appendChild(completeButton);
//   //Todo Trash Button
//   const deleteButton = document.createElement("button");
//   deleteButton.innerHTML = '<i class="fa fa-trash"></i>';
//   deleteButton.classList.add("trash_btn");
//   todoDiv.appendChild(deleteButton);

//   //Append LIST
//   todoList.appendChild(todoDiv);
//   //Clear TOdo Input Value
//   todoInput.value = "";
// }
// //FUnction to Delete the task
// function addtotrash(event){
// const item = event.target;
//  const todo = item.parentElement;
//  todo.remove();
// }
const todoItems = [];
function addTodoItem(item) {
    // add the new item to the array
    todoItems.push(item);
  
    // get the to-do list section from the HTML file
    const todoList = document.getElementById('todo-list');
  
    // create a new list item element
    const newItem = document.createElement('li');
  
    // set the text of the new item to the new to-do item
    newItem.textContent = item;
  
    // append the new item to the to-do list section
    todoList.append(newItem);
  }
  const todoForm = document.getElementById('todo-form');
  const todoInput = document.getElementById('todo-input');
  
  todoForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const newItem = todoInput.value;
    addTodoItem(newItem);
    todoInput.value = '';
  });
    




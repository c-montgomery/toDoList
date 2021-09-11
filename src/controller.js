import { ToDoItems, Subtasks } from "./ToDoClasses";
import { Modal } from "./Modal";

let toDo = new ToDoItems('Graduate')
console.log(toDo)

let addItem = document.createElement('button');
let html = document.querySelector('html');

addItem.textContent = '+'
addItem.addEventListener('click', () =>{
    let modal = new Modal();
    modal.make()
})

html.appendChild(addItem)
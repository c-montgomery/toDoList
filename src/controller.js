import "./style.css";
import { ToDoItems, Subtasks } from "./ToDoClasses";
import { Modal } from "./Modal";

let toDo = new ToDoItems('Graduate')

let addItem = document.createElement('button');
let html = document.querySelector('html');

addItem.textContent = '+'
addItem.addEventListener('click', () =>{
    let modal = new Modal('toDo');
    modal.make('toDo')
})

html.appendChild(addItem)
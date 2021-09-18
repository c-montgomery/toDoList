import './style.css';
import { ToDoItems, Subtasks } from './ToDoClasses';
import { Modal } from './Modal';

const addItem = document.createElement('button');
const html = document.querySelector('html');

addItem.textContent = '+';
addItem.addEventListener('click', () => {
  const modal = new Modal('toDo');
  modal.make('toDo');
  const sortButton = document.createElement('button');
  sortButton.textContent = 'sort'
  sortButton.addEventListener('click', ()=>
    console.log('here is a list of sorted items'))
  html.appendChild(sortButton)
});

html.appendChild(addItem);

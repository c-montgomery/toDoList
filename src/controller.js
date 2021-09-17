import './style.css';
import { ToDoItems, Subtasks } from './ToDoClasses';
import { Modal } from './Modal';

const addItem = document.createElement('button');
const html = document.querySelector('html');

addItem.textContent = '+';
addItem.addEventListener('click', () => {
  const modal = new Modal('toDo');
  modal.make('toDo');
});

html.appendChild(addItem);

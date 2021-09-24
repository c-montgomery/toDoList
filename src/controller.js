import './style.css';
import { ToDoItems, Subtasks, ToDoList } from './ToDoClasses';
import { Modal } from './Modal';
import { Display, list } from './Display';

const addItem = document.createElement('button');
const headerContainer = document.createElement('div')
headerContainer.className = 'headerContainer'
const html = document.querySelector('html');

const sortButton = document.createElement('button')
sortButton.textContent = 'sort'
sortButton.className = 'sortButton'
sortButton.addEventListener('click', ()=> {
  const modal = new Modal('sortDropdown')
  modal.make('sortDropdown')
})

//Create basic UI

addItem.textContent = '+';
addItem.addEventListener('click', () => {
  const modal = new Modal('toDo');
  modal.make('toDo');
  
  

});

html.appendChild(headerContainer);
headerContainer.appendChild(addItem);
headerContainer.appendChild(sortButton);
import './style.css';
import { ToDoItems, Subtasks, ToDoList } from './ToDoClasses';
import { Modal } from './Modal';
import { list } from './Display';

const addItem = document.createElement('button');
const html = document.querySelector('html');

addItem.textContent = '+';
addItem.addEventListener('click', () => {
  const modal = new Modal('toDo');
  modal.make('toDo');
  const sortButton = document.createElement('button');
  if (!document.querySelector('.sortButton')){
    html.appendChild(sortButton)
  }
  sortButton.className = 'sortButton'
  sortButton.textContent = 'sort'
  sortButton.addEventListener('click', ()=> {
    logSortedList()
  })
  

  });

html.appendChild(addItem);


function logSortedList(){
  let objectos = document.getElementsByClassName('ToDoItems')
  console.log(list)
  console.log(ToDoList.getAll())
  console.log(objectos)
  console.log('in logsorted function')
}
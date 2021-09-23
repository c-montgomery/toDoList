import './style.css';
import { ToDoItems, Subtasks, ToDoList } from './ToDoClasses';
import { Modal } from './Modal';
import { Display, list } from './Display';

const addItem = document.createElement('button');
const html = document.querySelector('html');

//Create basic UI

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
    console.log('sort button PRESSEED!')
    modal.make('sortDropdown')
    modal.sortListAlphabetically(list)
  })
  

  });

html.appendChild(addItem);


function logSortedList(){
  let objectos = document.getElementsByClassName('ToDoItems')
  console.log(list.list.sort((a, b)=>a.title>b.title ? 1: -1))
  let display = new Display()
  display.refresh()
}
import { Modal } from './Modal';
import { Subtask, ToDoItems, ToDoList } from './ToDoClasses';
import green from './traffic-light-green.svg'
import yellow from './traffic-light-yellow.svg'
import red from './traffic-light-red.svg'
import uncolored from './traffic-light.svg'

const list = new ToDoList();
class Display {
  constructor() {
  }
  //remove existing elements, and new elements from list
  refresh() {
    
    const paragraphs = document.querySelectorAll('p');
    paragraphs.forEach(paragraph => paragraph.remove());
    
    list.list.forEach(obj => {
      const priority = new Image(15,15)
      if (obj.priority == 3){
        priority.src = green;
      } else if(obj.priority == 2){
        priority.src = yellow
      } else if(obj.priority == 1){
        priority.src = red
      }else {
        priority.src = uncolored
      }

      
      const para = document.createElement('p');
      para.textContent = obj.title;
      para.className = obj.title;

      const html = document.querySelector('html');
      html.appendChild(para);

      const addTaskButton = document.createElement('button');
      addTaskButton.textContent = 'Add Tasks';
      addTaskButton.addEventListener('click', () => {
        const modal = new Modal();
        modal.make('Subtask', para.firstChild.data);
        const input = document.querySelector('input');
        const subtask = new Subtask();
        subtask.title = input.value;
      });
      const showTasksButton = document.createElement('button');
      showTasksButton.textContent = 'Show Tasks';
      showTasksButton.addEventListener('click', (e) => {
        console.log(e);
        this.toggleShowTaskButtonState(e);
      });
      const dueDate = document.createElement('p');
      dueDate.className = 'dueDate';
      if (obj.dueDate){
        dueDate.textContent = 'Due: ' + obj.dueDate;
      }
      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Delete';
      deleteButton.addEventListener('click', (e)=> this.deleteObject(e))
      para.appendChild(addTaskButton);
      para.appendChild(showTasksButton);
      para.appendChild(deleteButton);
      para.appendChild(dueDate)
      para.appendChild(priority)
      

    });
  }
    
  addtoList(object) {
    list.list = object;
  }

  addSubtaskToObject(subtask, parent) {
    list.list.forEach(object => {
      if (object.title == parent) {
        object.subtaskArray = subtask;
        console.log('saved subtask ' + subtask.title);
      }
    });
  }

  toggleShowTaskButtonState(e) {
    if (e.target.innerText == 'Show Tasks') {
      list.list.forEach(object => {
        if (object.title == e.target.parentNode.className) {
          console.log('in if');
          object.subtaskArray.forEach(subtask => {
            const para = document.createElement('li');
            para.textContent = subtask.title;
            const regex = /\s/g
            let spaceReplacer = e.target.parentNode.className.replace(regex,' .')
            console.log(spaceReplacer)
            const todo = document.querySelector(`.${spaceReplacer}`);
            console.log(todo)
            todo.appendChild(para);
            e.target.innerText = 'Hide Tasks';
          });
        }
      });
    } else {
      console.log('IN ELSE')
      const deletingListItems = document.querySelectorAll(`.${e.target.parentNode.className} li`);
      deletingListItems.forEach(element => element.remove());
      e.target.innerText = 'Show Tasks';
    }
  }

  deleteObject(e){
    list.removeObject(e.target.parentNode.className)
    this.refresh()
  }

  isDigit(string){
    let checkedInput = /[0-9]/;
    console.log('heres the value: ' + checkedInput.test(string))
    return checkedInput.test(string[0])
  }
}

export { Display, list};
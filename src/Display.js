import { Modal } from "./Modal";
import { Subtask, ToDoItems, ToDoList } from "./ToDoClasses";
import green from "./traffic-light-green.svg";
import yellow from "./traffic-light-yellow.svg";
import red from "./traffic-light-red.svg";
import uncolored from "./traffic-light.svg";

const list = new ToDoList();
class Display {
  constructor() {}
  //remove existing elements, and display elements from list
  refresh() {
    const paragraphs = document.querySelectorAll("p");
    paragraphs.forEach((paragraph) => {
      if (paragraph.innerHTML !== "Todookie®") {
        paragraph.remove();
      }
    });
    list.list.forEach((obj) => {
      const priority = new Image(15, 15);
      if (obj.priority == 3) {
        priority.src = green;
      } else if (obj.priority == 2) {
        priority.src = yellow;
      } else if (obj.priority == 1) {
        priority.src = red;
      } else {
        priority.src = uncolored;
      }

      const para = document.createElement("p");
      para.textContent = obj.title;
      para.className = obj.title;

      const html = document.querySelector("html");
      html.appendChild(para);

      const addTaskButton = document.createElement("button");
      addTaskButton.textContent = "Add Tasks";
      addTaskButton.addEventListener("click", () => {
        const modal = new Modal();
        modal.make("Subtask", para.firstChild.data);
        const input = document.querySelector("input");
        const subtask = new Subtask();
        subtask.title = input.value;
        let tempdisplay = new Display();
        tempdisplay.refresh()
      });
      const showTasksButton = document.createElement("button");
      showTasksButton.textContent = "Show Tasks";
      showTasksButton.addEventListener("click", (e) => {
        this.toggleShowTaskButtonState(e);
      });
      const dueDate = document.createElement("p");
      dueDate.className = "dueDate";
      if (obj.dueDate) {
        dueDate.textContent = "Due: " + obj.dueDate;
      }
      const deleteButton = document.createElement("button");
      deleteButton.textContent = "Delete";
      deleteButton.addEventListener("click", (e) => this.deleteObject(e));
      para.appendChild(addTaskButton);
      para.appendChild(showTasksButton);
      para.appendChild(deleteButton);
      para.appendChild(dueDate);
      para.appendChild(priority);
      if (obj.subtasksHidden === false){
        
        obj.subtaskArray.forEach((subtask)=>{
          let subtaskTitle = document.createElement('p');
          subtaskTitle.textContent = subtask.title
          let subtaskDeleteButton = document.createElement('button')
          subtaskDeleteButton.textContent = 'delete'
          subtaskDeleteButton.addEventListener('click', (e)=>{
            ToDoItems.removeSubtask(list,e.target.parentElement.firstChild.data, e.target.parentElement.parentNode.firstChild.data)
            let tempdisplay = new Display();
            tempdisplay.refresh()
          })
          
          subtaskTitle.appendChild(subtaskDeleteButton)
          para.appendChild(subtaskTitle)
        })

      }
    });
  }

  addtoList(object) {
    list.list = object;
  }

  addSubtaskToObject(subtask, parent) {
    list.list.forEach((object) => {
      if (object.title == parent) {
        object.subtaskArray = subtask;
      }
    });
  }

  toggleShowTaskButtonState(e){
    list.list.forEach((object)=>{
   
      if (e.target.parentNode.className == object.title){
          object.subtasksHiddenToggle()
          console.log(object)
          console.log(object.subtasksHidden+ 'object.subtasksHidden')
          let display = new Display();
          display.refresh()
        }
    })
  } 

  deleteObject(e) {
    list.removeObject(e.target.parentNode.className);
    this.refresh();
  }

  isDigit(string) {
    let checkedInput = /^[0-9]/;
    return checkedInput.test(string);
  }
}

export { Display, list };

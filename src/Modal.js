import { Subtask, ToDoItems, ToDoList } from "./ToDoClasses";
import { Display, list } from "./Display";
import { compareDesc, parseISO } from "date-fns";
import { orderBy } from "lodash";
import "./flatpickr.css";
import flatpickr from "flatpickr";

class Modal {
  constructor(type) {
    this.type = type;
  }

  //returns modal
  make(type, parentText) {
    let baseModal = this.base(type, parentText);

    return baseModal;
  }

  //returns modal based on type arguement
  base(type, parentText) {
    let modal = document.createElement("div");
    modal.textContent = "Title";

    modal.className = "modal";

    let modalInput = document.createElement("input");
    modalInput.className = "taskModalInput";
    modalInput.placeholder = "Task to be added";
    let exitModalButton = document.createElement("button");
    exitModalButton.classList = "exit";
    exitModalButton.textContent = "X";
    exitModalButton.addEventListener("click", (e) => Modal.closeModal());
    if (type == "toDo") {
      window.addEventListener("keypress", function (e) {
        if (e.key == "Enter") {
          if (document.querySelector(".save")) {
            Modal.saveModal();
          }
        }
      });
      let saveModalButton = document.createElement("button");
      saveModalButton.classList = "save";
      saveModalButton.innerHTML = "save";
      saveModalButton.addEventListener("click", function (e) {
        Modal.saveModal();
      });
      let dueDateInput = document.createElement("input");
      dueDateInput.className = "dueDateInput";
      dueDateInput.placeholder = "yyyy-mm-dd";
      let dueDateTitle = document.createElement("p");
      dueDateTitle.textContent = "Due date";

      let priorityPicker = Modal.priorityPicker();

      modal.appendChild(exitModalButton);
      modal.appendChild(modalInput);
      modal.appendChild(dueDateTitle);
      modal.appendChild(dueDateInput);

      const flat = new flatpickr(dueDateInput, {});

      modal.appendChild(priorityPicker);
      modal.appendChild(saveModalButton);
      let body = document.querySelector("body");
      body.appendChild(modal);
    } else if (type == "Subtask") {
      let saveModalButton = document.createElement("button");
      saveModalButton.classList = "saveSubtask";
      saveModalButton.textContent = "Save Subtask";
      saveModalButton.addEventListener("click", () => {
        this.saveSubtask(parentText);
      });
      modal.appendChild(saveModalButton);
      modal.appendChild(exitModalButton);
      modal.appendChild(modalInput);
      let body = document.querySelector("body");
      body.appendChild(modal);
    } else if (type == "sortDropdown") {
      if (!document.querySelector(".sortDropdown")) {
        let container = document.createElement("div");
        container.className = "sortDropdown";
        let alphabetical = document.createElement("div");
        alphabetical.textContent = "A-Z";
        let dueDate = document.createElement("div");
        dueDate.textContent = "By due date";
        let priority = document.createElement("div");
        priority.textContent = "By priority";

        alphabetical.addEventListener("click", (e) => {
          Modal.sortListAlphabetically(list);
          Modal.closeModal();
          e.stopPropagation();
        });
        dueDate.addEventListener("click", (e) => {
          Modal.sortListByDueDate(list);
          Modal.closeModal();
          e.stopPropagation();
        });
        priority.addEventListener("click", (e) => {
          Modal.sortListByPriority(list);
          Modal.closeModal();
          e.stopPropagation();
        });

        container.appendChild(alphabetical);
        container.appendChild(dueDate);
        container.appendChild(priority);

        let sortButton = document.querySelector(".sortButton");
        sortButton.appendChild(container);
       
      } else {
        const dropdown = document.querySelector(".sortDropdown");
        dropdown.remove();
      }
    }
  }

  static closeModal() {
    let dropdown = document.querySelector(".sortDropdown");
    if (dropdown) {
      dropdown.remove();
    }
    let modal = document.querySelector(".modal");
    if (modal) {
      modal.remove();
    }
  }
  static saveModal() {
    let input = document.querySelector(".taskModalInput").value;
    let newItem = new ToDoItems();
    newItem.title = input;
    let dueDateInput = document.querySelector(".dueDateInput").value;
    newItem.dueDate = dueDateInput;
    let priority = document.querySelectorAll(".buttonHolder button");
    priority.forEach((obj) => {
      if (obj.className == "green") {
        if (obj.innerHTML == "high") {
          newItem.priority = 1;
        } else if (obj.innerHTML == "medium") {
          newItem.priority = 2;
        } else {
          newItem.priority = 3;
        }
      }
    });
    let display = new Display();
    display.addtoList(newItem);
    display.refresh();
    Modal.closeModal();
  }
  static priorityPicker() {
    let div = document.createElement("div");
    let buttonHolder = document.createElement("div");
    let low = document.createElement("button");
    let medium = document.createElement("button");
    let high = document.createElement("button");

    low.addEventListener("click", () => {
      low.className = "green";
      medium.className = "medium";
      high.className = "high";
    });
    medium.addEventListener("click", () => {
      low.className = "low";
      medium.className = "green";
      high.className = "high";
    });
    high.addEventListener("click", () => {
      low.className = "low";
      medium.className = "medium";
      high.className = "green";
    });
    div.textContent = "Priority";
    low.textContent = "low";
    medium.textContent = "medium";
    high.textContent = "high";

    div.className = "priorityTitle";
    buttonHolder.className = "buttonHolder";

    buttonHolder.appendChild(low);
    buttonHolder.appendChild(medium);
    buttonHolder.appendChild(high);
    div.appendChild(buttonHolder);

    return div;
  }
  saveSubtask(parent) {
    let subtaskInput = document.querySelector(".taskModalInput").value;
    let newSubtask = new Subtask();
    let modal = new Modal("Subtask");
    let display = new Display();
    let taskModalInput = document.querySelector(".taskModalInput");
    let window = document.querySelector(".modal");

    if (!display.isDigit(subtaskInput)) {
      newSubtask.title = subtaskInput;
      display.addSubtaskToObject(newSubtask, parent);
      Modal.closeModal();
    } else {
      let warning = document.createElement("p");
      warning.className = "warning";
      warning.textContent = "Warning: Title must start with a letter!";

      window.appendChild(warning);
    }
    display.refresh()
  }

  static sortListAlphabetically(list) {
    console.log(list.list + 'HeRER')
    list.list.sort((a,b)=>a.title>b.title ? 1:-1)
    console.log(list.list)
    let objectos = document.getElementsByClassName("ToDoItems");
    let display = new Display();
    display.refresh();
  }
  static sortListByPriority(list) {
    list.replace = orderBy(list.list, "priority");

    let display = new Display();
    display.refresh();
  }
  static sortListByDueDate(list) {
    list.list.sort((a, b) => {
      if (a.dueDate == "") {
        return 1;
      }
      return compareDesc(parseISO(a.dueDate), parseISO(b.dueDate));
    });
    let display = new Display();
    display.refresh();
  }
}

export { Modal };

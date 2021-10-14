import "./style.css";
import { ToDoItems, Subtasks, ToDoList } from "./ToDoClasses";
import { Modal } from "./Modal";
import { Display, list } from "./Display";
import icon from "./done.svg";
import { add } from "lodash";

//create header
const logoHolder = document.createElement("div");
logoHolder.className = "logoholder";
const buttonHolder = document.createElement("div");
buttonHolder.className = "buttonHolder";
const logo = new Image(20, 20);
logo.className = "logo";
logo.src = icon;
logoHolder.appendChild(logo);

const logoText = document.createElement("p");
logoText.className = "logoText";
logoText.textContent = "Todookie®";
logoHolder.appendChild(logoText);

const addItem = document.createElement("button");
addItem.className = 'addItemButton'
const headerContainer = document.createElement("div");
headerContainer.className = "headerContainer";
const html = document.querySelector("html");

const sortButton = document.createElement("button");
sortButton.textContent = "sort";
sortButton.className = "sortButton";
sortButton.addEventListener("click", (e) => {

  const modal = new Modal("sortDropdown");
  modal.make("sortDropdown", e);
  
});

addItem.textContent = "+";
addItem.addEventListener("click", () => {
  if (!document.querySelector('.modal')){
    const modal = new Modal("toDo");
    modal.make("toDo");
  }
  
});

html.appendChild(headerContainer);
headerContainer.appendChild(logoHolder);
headerContainer.appendChild(buttonHolder);
buttonHolder.appendChild(addItem);
buttonHolder.appendChild(sortButton);

import { Subtask, ToDoItems, ToDoList } from "./ToDoClasses"
import { Display, list } from "./Display"
import { compareDesc, compareAsc, parseISO } from 'date-fns'


class Modal {

    constructor(type) {
        this.type = type
    }

    //returns modal
    make(type, parentText) {

        let baseModal = this.base(type, parentText)

        return baseModal
    }

    //returns modal based on type arguement
    base(type, parentText) {
        let modal = document.createElement('div');
        modal.textContent = 'Title';
        
        modal.className = 'modal';

        let modalInput = document.createElement('input');
        modalInput.className = 'taskModalInput';
        modalInput.placeholder = 'Task to be added';

        let exitModalButton = document.createElement('button');
        exitModalButton.classList = 'exit'
        exitModalButton.textContent = 'X'
        if (type == 'toDo') {
            console.log(this)
            window.addEventListener('keypress', function (e) {
                if (e.key == 'Enter') {
                    if (document.querySelector('.save')) {
                        Modal.saveModal()
                    }

                }
            })
            let saveModalButton = document.createElement('button');
            saveModalButton.classList = 'save';
            saveModalButton.innerHTML = 'save';
            saveModalButton.addEventListener('click', function(e){

                Modal.saveModal()

            })
            let dueDateInput = document.createElement('input');
            dueDateInput.className = 'dueDateInput'
            dueDateInput.placeholder = 'yyyy-mm-dd'
            let dueDateTitle = document.createElement('p')
            dueDateTitle.textContent = 'Due date';

            let priorityPicker = Modal.priorityPicker()
            
           
            modal.appendChild(exitModalButton);
            modal.appendChild(modalInput);
            modal.appendChild(dueDateTitle);
            modal.appendChild(dueDateInput);
            modal.appendChild(priorityPicker)
            modal.appendChild(saveModalButton);
            let body = document.querySelector('body');
            body.appendChild(modal)

        } else if (type == 'Subtask') {
            let saveModalButton = document.createElement('button');
            saveModalButton.classList = 'saveSubtask';
            saveModalButton.textContent = 'Save Subtask';
            saveModalButton.addEventListener('click', () => {
                this.saveSubtask(parentText)
            })
            modal.appendChild(saveModalButton);
            modal.appendChild(exitModalButton);
            modal.appendChild(modalInput);
            let body = document.querySelector('body');
            body.appendChild(modal)

        } else if (type == 'sortDropdown') {
            if (!document.querySelector('.sortDropdown')) {
                let container = document.createElement('div')
                container.className = 'sortDropdown'
                let alphabetical = document.createElement('div');
                alphabetical.textContent = 'A-Z'
                let dueDate = document.createElement('div');
                dueDate.textContent = 'By due date'
                let priority = document.createElement('div');
                priority.textContent = 'By priority'

                alphabetical.addEventListener('click', (e)=>{

                    console.log("alphabetical")
                    Modal.sortListAlphabetically(list)
                    Modal.closeModal()
                    e.stopPropagation()
                })
                dueDate.addEventListener('click', (e)=>{
                    Modal.sortListByDueDate(list)
                    Modal.closeModal()
                    e.stopPropagation()
                })
                priority.addEventListener('click', (e)=>{

                    console.log('priotityfired')
                    Modal.closeModal()
                    e.stopPropagation()
                })

                container.appendChild(alphabetical)
                container.appendChild(dueDate)
                container.appendChild(priority)

                let sortButton = document.querySelector('.sortButton');
                let html = document.querySelector('html')
                sortButton.appendChild(container)
            }
        }

    }

    static closeModal() {
        let dropdown = document.querySelector('.sortDropdown')
        if (dropdown){
            dropdown.remove()}
        let modal = document.querySelector('.modal')
        if (modal){
            modal.remove();
            }
    }
    static saveModal() {

        let input = document.querySelector('input').value;
        console.log(input)
        let newItem = new ToDoItems();
        newItem.title = input;
        let dueDateInput = document.querySelector('.dueDateInput').value;
        newItem.dueDate = dueDateInput
        let display = new Display()
        display.addtoList(newItem)
        display.refresh()
        Modal.closeModal()

    }
    static priorityPicker(){
        let div = document.createElement('div')
        let buttonHolder = document.createElement('div')
        let low = document.createElement('button')
        let medium = document.createElement('button')
        let high = document.createElement('button')

        div.textContent = 'Priority'
        low.textContent = 'low'
        medium.textContent = 'medium'
        high.textContent = 'high'

        div.className = 'priorityTitle'
        buttonHolder.className = 'buttonHolder'

        buttonHolder.appendChild(low)
        buttonHolder.appendChild(medium)
        buttonHolder.appendChild(high)
        div.appendChild(buttonHolder)

        return div;


    }
    saveSubtask(parent) {
        let input = document.querySelector('input').value;
        let newSubtask = new Subtask();
        let modal = new Modal('Subtask')
        let display = new Display()
        let taskModalInput = document.querySelector('.taskModalInput');
        let window = document.querySelector('.modal')
        if (!display.isDigit(input)) {
            console.log('sidplayisTRUE')
            newSubtask.title = input;
            display.addSubtaskToObject(newSubtask, parent)
            Modal.closeModal()
        } else {
            console.log('in elsestatement')
            let warning = document.createElement('p');
            warning.className = 'warning';
            warning.textContent = 'Warning: Title must start with a letter!'
            console.log(warning)
            console.log(taskModalInput)
            window.appendChild(warning)
        }
    }

    static sortListAlphabetically(list) {
        let objectos = document.getElementsByClassName('ToDoItems')
        console.log(list.list.sort((a, b) => a.title > b.title ? 1 : -1))
        let display = new Display()
        display.refresh()
    }
    static sortListByDueDate(list){
        console.log(list.list.sort((a,b)=>compareDesc(parseISO(a.dueDate),parseISO(b.dueDate))))
        let display = new Display()
        display.refresh()
    }
}

export { Modal }
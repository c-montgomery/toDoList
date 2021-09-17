import { Subtask, ToDoItems, ToDoList } from "./ToDoClasses"
import { Display } from "./Display"



class Modal {

    constructor(type) {
        this.type = type
    }

    make(type, parentText) {
    
        let baseModal = this.base(type, parentText)
        
        return baseModal
    }

    base(type, parentText) {
        let modal = document.createElement('div');
        modal.textContent = 'Add Task';
        modal.className = 'modal';

        let modalInput = document.createElement('input');
        modalInput.className = 'taskModalInput';
        modalInput.textContent = 'Task to be added';

        let exitModalButton = document.createElement('button');
        exitModalButton.classList = 'exit'
        exitModalButton.addEventListener('click', this.closeModal);
        exitModalButton.textContent = 'X'
      
        if (type == 'toDo'){
            let saveModalButton = document.createElement('button');
            saveModalButton.classList = 'save';
            saveModalButton.textContent = 'save';
            saveModalButton.addEventListener('click', this.saveModal)
            modal.appendChild(saveModalButton);
            modal.appendChild(exitModalButton);
            modal.appendChild(modalInput);

        } else if (type == 'Subtask'){
            let saveModalButton = document.createElement('button');
            saveModalButton.classList = 'saveSubtask';
            saveModalButton.textContent = 'Save Subtask';
            saveModalButton.addEventListener('click', ()=>{
                this.saveSubtask(parentText)
            })
            modal.appendChild(saveModalButton);
            modal.appendChild(exitModalButton);
            modal.appendChild(modalInput);

        }



        let body = document.querySelector('body');
        body.appendChild(modal)
    }

    closeModal() {

        let modal = document.querySelector('.modal')
        modal.remove();
    }

    saveModal() {

        let input = document.querySelector('input').value;
        let newItem = new ToDoItems();
        newItem.title = input;
        let modal = new Modal()
        let display = new Display()
        display.addtoList(newItem)
        display.refresh()
        modal.closeModal()
        
    }
    saveSubtask(parent){
        let input = document.querySelector('input').value;
        let newSubtask = new Subtask();
        let modal = new Modal('Subtask')
        let display = new Display()
        let taskModalInput = document.querySelector('.taskModalInput');
        let window = document.querySelector('.modal')
        if (!display.isDigit(input)){
            console.log('sidplayisTRUE')
            newSubtask.title = input;
            display.addSubtaskToObject(newSubtask, parent)
            modal.closeModal()
        } else{
            console.log('in elsestatement')
            let warning = document.createElement('p');
            warning.className = 'warning';
            warning.textContent = 'Warning: Title must start with a letter!'
            console.log(warning)
            console.log(taskModalInput)
            window.appendChild(warning)
        }
    }
}

export { Modal }
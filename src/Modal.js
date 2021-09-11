import { ToDoItems } from "./ToDoClasses"

class Modal {
    constructor(type) {
        this.type = type
    }

    make() {
        let baseModal = this.base()
        if (this.type == 'toDo') {
            return baseModal
        }
        return baseModal
    }

    base() {
        let modal = document.createElement('div');
        modal.textContent = 'Add Task';
        modal.className = 'modal';
        console.log('this is:'+this)
        console.log(this)
        let modalInput = document.createElement('input');
        modalInput.className = 'taskModalInput';
        modalInput.textContent = 'Task to be added';

        let exitModalButton = document.createElement('button');
        exitModalButton.classList = 'exit'
        exitModalButton.addEventListener('click', this.closeModal);
        exitModalButton.textContent = 'X'

        let saveModalButton = document.createElement('button');
        saveModalButton.classList = 'save';
        saveModalButton.textContent = 'save';
        saveModalButton.addEventListener('click', this.saveModal)

        modal.appendChild(saveModalButton);
        modal.appendChild(exitModalButton);
        modal.appendChild(modalInput);

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
        console.log(newItem)
        console.log(newItem._title)
        let modal = new Modal()
        modal.closeModal()
        
    }
}

export { Modal }
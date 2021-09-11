class Modal{
    constructor(type){
        this.type = type
    }

    make(){
        let baseModal = this.base()
        console.log('in mkae')
        if (this.type == 'toDo'){
            return baseModal
        }
        return baseModal
    }

    base(){
        let modal = document.createElement('div');
        modal.textContent = 'Add Task';
        modal.className = 'modal';

        let modalInput = document.createElement('input');
        modalInput.className = 'taskModalInput';
        modalInput.textContent = 'Task to be added';

        let exitModalButton = document.createElement('button');
        exitModalButton.addEventListener('click', this.closeModal);

        modal.appendChild(exitModalButton);
        modal.appendChild(modalInput);

        let html = document.querySelector('html');
        html.appendChild(modal)
    }

    closeModal(){
        let modal = document.querySelector('.modal')
        modal.remove();
    }
}

export { Modal}
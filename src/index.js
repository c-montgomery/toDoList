//import whatever from date-fns
import './style.css';

function addContent() {
    const div = document.createElement('div');
    div.classList = 'content';
  
    return div;
}


document.body.appendChild(addContent())

function createHeader(){
    let header = document.createElement('header')
    header.textContent = 'To Do'
    let button = document.createElement('button');
    button.textContent = '+';
    button.addEventListener('click', createGoalModal)
    return [header, button]
}


function createGoalModal(){
    if (!document.querySelector('.goalModal')){
        let modal = document.createElement('div');
        modal.textContent = 'Enter a goal title';
        modal.classList = 'goalModal';

        let exitModalButton = createButton('div', 'modalButton exit', 'X')
        exitModalButton.addEventListener('click', closeModal)

        let saveModalButton = createButton('div', 'modalButton save', 'save')
        
        saveModalButton.addEventListener('click', closeModal)

        modal.appendChild(saveModalButton)
        modal.appendChild(exitModalButton)

        let html = document.querySelector('html');
        html.classList = 'darkened';

        let nameInput = document.createElement('input');
        nameInput.placeholder = 'Goal title'
        modal.appendChild(nameInput);
        
        const content = document.querySelector('.content');
        content.appendChild(modal)

        
    }
}

function createButton(type, className, textContent=''){
    let button = document.createElement(type)
    button.classList = className
    button.textContent = textContent;
    return button;
    
}

function closeModal(){
    let deleted = document.querySelector('.goalModal');
    let html = document.querySelector('html');
    html.classList = '';
    deleted.remove()
}

function appendToDom(thing){
    let div = document.querySelector('.content');
    thing.forEach(element => { div.appendChild(element);
        console.log(element)
    })
}


appendToDom(createHeader())


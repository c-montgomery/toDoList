
import './style.css';
import {DatePicker} from '../node_modules/date-time-picker-component/dist/js/date-time-picker-component.min'

const fart = 'fart'
function addContent() {
    const div = document.createElement('div');
    div.classList = 'content';
  
    return div;
}


document.body.appendChild(addContent())

function createHeader(){
    let header = document.createElement('header');
    header.textContent = 'To Do';
    let button = document.createElement('button');
    button.textContent = '+';
    button.addEventListener('click', ()=>{
        const goalModal = modal()
        goalModal.createGoal('goalModal');
    })
    return [header, button]
}

const modal = () =>{
    
    const createGoal = (type) =>{
        if (!document.querySelector('.goalModal')){
            let modal = document.createElement('div');
            
            modal.textContent = 'Enter a goal title';
            modal.classList = type;
    
            let exitModalButton = createButton('div', 'modalButton exit', 'X')
            exitModalButton.addEventListener('click', closeModal)
    

            let saveModalButton = createButton('div', 'modalButton save', 'save')
            saveModalButton.addEventListener('click', ()=>{
               const what = handleDOM()
               what.makeObject(nameInput.value)
               closeModal();
               what.refreshDOM();
            })
    
            modal.appendChild(saveModalButton)
            modal.appendChild(exitModalButton)
    
            let html = document.querySelector('html');
            html.classList = 'darkened';
    
            let nameInput = document.createElement('input');
            nameInput.placeholder = 'Goal title'
            modal.appendChild(nameInput);
            console.log()
            
            const content = document.querySelector('.content');
            content.appendChild(modal)


        }
    
        
    }
    return {createGoal}
};
const refreshDOM = () =>{


} 

const handleDOM = (innerText) =>{
    const toDoList = []
    const refreshDOM = () => {
        toDoList.forEach(item => {
            let goalItem = document.createElement('p');
            goalItem.classList = 'goalItem'
            goalItem.textContent = item.name
            
            let content = document.querySelector('body');
            content.append(goalItem)
            console.log(toDoList)
            console.log(item.name);
        })
        console.log('hey, this should refressssh' )
    }
    const makeObject = (innerText) =>{
        let goal = {name: innerText}
        toDoList.push(goal);

        return {goal}
        
    
    }
return {makeObject, refreshDOM}    
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
const saveObject = (innerText) =>{
    console.log(innerText)
}


const goalList = () => {
    const array = ['test'];
    const getArray = () => array;
    const addToArray = (object) => array.push(object)
    return{goalList, getArray, addToArray}
}


appendToDom(createHeader())
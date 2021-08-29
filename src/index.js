
import './style.css';
import { DatePicker } from '../node_modules/date-time-picker-component/dist/js/date-time-picker-component.min'





//creates header w/button to create to do objects
function createHeader() {

    let header = document.createElement('header');
    header.textContent = 'To Do';

    let button = document.createElement('button');
    button.textContent = '+';
    button.addEventListener('click', () => {
        const goalModal = modal()
        goalModal.createGoal('goalModal');
    })

    let body = document.querySelector('body');
    const div = document.createElement('div');
    div.classList = 'content';
    body.appendChild(div)
    return [header, button, div]
}

const modal = () => {

    const createGoal = (type) => {

        if (!document.querySelector('.goalModal')) {
            let modal = document.createElement('div');

            modal.textContent = 'Enter a goal title';
            modal.classList = type;

            let exitModalButton = createButton('div', 'modalButton exit', 'X')
            exitModalButton.addEventListener('click', closeModal)


            let saveModalButton = createButton('div', 'modalButton save', 'save')
            saveModalButton.addEventListener('click', () => {
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

            let dueDateInput = document.createElement('input');
            dueDateInput.placeholder = 'Due date'
            modal.appendChild(dueDateInput);

            const content = document.querySelector('.content');
            content.appendChild(modal)


        }


    }
    return { createGoal }
};

const toDoList = []

const handleDOM = (innerText) => {

    let para = document.querySelectorAll('p');
    para.forEach(p => p.remove())

    //create paragraph in dom for every object in list w/deletebutton/showTasksButton
    const refreshDOM = () => {
        
        toDoList.forEach(item => {
            let goalItem = document.createElement('p');
            goalItem.classList = 'goalItem'
            goalItem.textContent = item.name

            

            let addTasksButton = document.createElement('button');
            addTasksButton.textContent = 'Add tasks';
            addTasksButton.addEventListener('click', ()=>{
                console.log('add to tasks modal')
            })
            goalItem.appendChild(addTasksButton)

            let showTasksButton = document.createElement('button');
            showTasksButton.textContent = 'Show tasks';
            showTasksButton.addEventListener('click', ()=>{
                console.log('show tasks')
                console.log(toDoList)

            })
            goalItem.appendChild(showTasksButton)

            let deleteButton = document.createElement('button')
            deleteButton.textContent = 'Delete'
            goalItem.appendChild(deleteButton)

            let content = document.querySelector('body');
            content.appendChild(goalItem)

            console.log(item)
        })
    }
    const makeObject = (innerText) => {
        let goal = { name: innerText,
                     subs: {},
                     subsVisible: false,
                     }
        toDoList.push(goal);
        return { goal }


    }
    return { makeObject, refreshDOM }
}

function createButton(type, className, textContent = '') {
    let button = document.createElement(type)
    button.classList = className
    button.textContent = textContent;
    return button;

}

function closeModal() {
    let deleted = document.querySelector('.goalModal');
    let html = document.querySelector('html');
    html.classList = '';
    deleted.remove()
}

function appendToDom(thing) {
    let div = document.querySelector('.content');
    thing.forEach(element => {

        if (element.className != 'content'){
            console.log(element)
            div.appendChild(element);
        }
    })
}
const saveObject = (innerText) => {
    console.log(innerText)
}


const goalList = () => {
    const array = ['test'];
    const getArray = () => array;
    const addToArray = (object) => array.push(object)
    return { goalList, getArray, addToArray }
}


appendToDom(createHeader())
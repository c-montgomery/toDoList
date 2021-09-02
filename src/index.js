
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

//Handles modal creation
const modal = () => {
    //creates task modal
    const addTasksModal = (name) => {

        if (!document.querySelector('.addTasksModal')) {
            let modal = document.createElement('div');
            modal.textContent = 'Add task'
            modal.className = 'addTasksModal'

            let taskModalInput = document.createElement('input');
            taskModalInput.className = 'taskModalInput'
            taskModalInput.textContent = 'Task to be added...'

            let exitModalButton = createButton('div', 'modalButton exit', 'X')
            exitModalButton.addEventListener('click', closeModal)
            let saveModalButton = createButton('div', 'modalButton save', 'save');
            saveModalButton.addEventListener('click', (e) => {
                toDoList.forEach(object => {
                    if (object.name = name) {
                        object.subs.sub.push(taskModalInput.value)
                    }
                closeModal(e);
                })

            })
            modal.appendChild(taskModalInput)
            modal.appendChild(saveModalButton)
            modal.appendChild(exitModalButton)

            let html = document.querySelector('html');
            html.classList = 'darkened';

            const content = document.querySelector('.content');
            content.appendChild(modal)
        }
    }
    //creates goal modals
    const createGoal = (type) => {

        if (!document.querySelector('.goalModal')) {
            let modal = document.createElement('div');

            modal.textContent = 'Enter a goal title';
            modal.classList = type;

            let exitModalButton = createButton('div', 'modalButton exit', 'X')
            exitModalButton.addEventListener('click', closeModal)


            let saveModalButton = createButton('div', 'modalButton save', 'save')
            saveModalButton.addEventListener('click', (e) => {
                const toDoObject = objectMaker()
                console.log(nameInput.value + dueDateInput.value)
                console.log('event fired: save button')
                toDoObject.makeObject(nameInput.value, dueDateInput.value)
                closeModal(e);
                let display = handleDOM()
                display.refreshDOM();
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
    return { createGoal, addTasksModal }
};
//Main to do list
const toDoList = []

//DOM Handling, creates p's with goal contents and displays them
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
            addTasksButton.textContent = 'Add task';
            let addTasksButtonParent = addTasksButton.parentNode
            addTasksButton.addEventListener('click', () => {
                let tasksModal = modal();
                console.log(item.name)
                tasksModal.addTasksModal(item.name);
            })
            goalItem.appendChild(addTasksButton)

            let showTasksButton = document.createElement('button');
            showTasksButton.textContent = 'Show tasks';
            showTasksButton.addEventListener('click', () => {
                console.log('in it')
                console.log(goalItem.textContent)
                toDoList.forEach(object =>{
                    
                    if(object.name == item.name){
                        item.subs.sub.forEach(sub => {
                            let subTask = document.createElement('p');
                            subTask.textContent = sub;
                            goalItem.appendChild(subTask)
                        }
                        )
                        showTasksButton.textContent = 'Hide tasks';
                    }
                })
                
            })
            goalItem.appendChild(showTasksButton)

            let deleteButton = document.createElement('button')
            deleteButton.textContent = 'Delete'
            goalItem.appendChild(deleteButton)

            let content = document.querySelector('body');
            content.appendChild(goalItem)
        })
    }
    const makeObject = () => {
        let toDoObject = objectMaker()
        toDoObject.makeObject()
    }

    return { makeObject, refreshDOM }
}

function createButton(type, className, textContent = '') {
    let button = document.createElement(type)
    button.classList = className
    button.textContent = textContent;
    return button;

}

function closeModal(e) {
    let deleted = document.getElementsByClassName(e.target.parentElement.className);
    let html = document.querySelector('html');
    html.classList = '';
    deleted[0].remove()
}

function appendToDom(thing) {
    let div = document.querySelector('.content');
    thing.forEach(element => {

        if (element.className != 'content') {
            div.appendChild(element);
        }
    })
}

const objectMaker = () => {
    const makeObject = (innerText, dueDate = '') => {
        let goal = {
            name: innerText,
            dueDate: dueDate,
            subs: {
                sub:[]
            },
            subsVisible: false,
        }
        toDoList.push(goal);
        return { goal }
    }
    const getArray = () => array;
    const addToArray = (object) => array.push(object)
    return { makeObject, getArray, addToArray }
}


appendToDom(createHeader())
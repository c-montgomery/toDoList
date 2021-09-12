import { Modal } from "./Modal"
import {Subtask, ToDoItems, ToDoList} from "./ToDoClasses"
let list = new ToDoList()
class Display{
    constructor(){
    }
    refresh(){
        let paragraphs = document.querySelectorAll('p');
        paragraphs.forEach(paragraph => paragraph.remove())
        
        list.list.forEach(obj => {
            let para = document.createElement('p');
            para.textContent = obj.title
            para.className = obj.title

            let body = document.querySelector('body');
            body.appendChild(para)

            let addTaskButton = document.createElement('button')
            addTaskButton.textContent = 'Add Tasks'
            addTaskButton.addEventListener('click', ()=>{
                let modal = new Modal()
                modal.make('Subtask', para.firstChild.data)
                let input = document.querySelector('input');
                let subtask = new Subtask();
                subtask.title = input.value
            })
            let showTasksButton = document.createElement('button');
            showTasksButton.textContent = 'Show Tasks'
            showTasksButton.addEventListener('click', (e) => {
                console.log(e)
                this.toggleShowTaskButtonState(e)
            })
            let deleteButton = document.createElement('button')
            deleteButton.textContent = 'Delete'

            para.appendChild(addTaskButton)
            para.appendChild(showTasksButton)
            para.appendChild(deleteButton)
        })
    }
    addtoList(object){
        list.list = object;
    }
    addSubtaskToObject(subtask, parent){
        list.list.forEach(object => {
            if (object.title == parent){
                object.subtaskArray = subtask
                console.log('saved subtask '+ subtask.title)
            }
        })
    }
    toggleShowTaskButtonState(e){
        if (e.target.innerText == 'Show Tasks'){
            list.list.forEach(object =>{
                console.log('infunctionio!')
                console.log(e.target.parentNode.className)
                console.log(object)
                console.log(object.title)
                if (object.title ==e.target.parentNode.className){
                    console.log('in if')
                    object.subtaskArray.forEach(subtask =>{
                        let para = document.createElement('li');
                            para.textContent = subtask.title;
                            let todo = document.querySelector(`.${e.target.parentNode.className}`)
                            todo.appendChild(para)
                            e.target.innerText = 'Hide Tasks'
                    })
                }
            })
        }else {
            let deletingListItems = document.querySelectorAll(`.${e.target.parentNode.className} li`)
            deletingListItems.forEach(element => element.remove())
            e.target.innerText = 'Show Tasks'
        }
        console.log('in function')
    }

}

export { Display }
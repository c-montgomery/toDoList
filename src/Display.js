import { Modal } from "./Modal"
import {Subtask, ToDoItems, ToDoList} from "./ToDoClasses"
let list = new ToDoList()
class Display{
    constructor(){
        this.list = []
    }
    refresh(){
        let paragraphs = document.querySelectorAll('p');
        paragraphs.forEach(paragraph => paragraph.remove())
        
        list.list.forEach(obj => {
            let para = document.createElement('p');
            para.textContent = obj.title

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

}

export { Display }
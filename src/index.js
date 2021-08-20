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
    button.textContent = '+ Add a Goal';
    return [header, button]
}

function appendToDom(thing){
    let div = document.querySelector('.content');
    thing.forEach(element => { div.appendChild(element);
        console.log(element)
    })
}
appendToDom(createHeader())
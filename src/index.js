//import whatever from date-fns
import './style.css';

function addContent() {
    const div = document.createElement('div');
    div.textContent = 'TODOLISTCSS working'
    return div;
}

document.body.appendChild(addContent())
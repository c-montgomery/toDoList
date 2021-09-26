class ToDoItems{

    constructor(){
        this._subtaskArray = []
        this._isHidden = true;
    }
    set title(title){
        this._title = title
        let list = new ToDoList();
        list.list = this;
    }
    get title(){
        return this._title
    }
   
    set subtaskArray(task){
        this._subtaskArray.push(task);
    }
    get subtaskArray(){
        return this._subtaskArray;
    }
    set dueDate(date){
        this._dueDate = date;
    }
    get dueDate(){
        return this._dueDate;
    }
    set priority(level){
        this._priority = level;
    }  
    get priority(){
        return this._priority;
    }
}

class Subtask{

    set title(text){
        this._title = text;
    }
    get title(){
        return this._title;
    }
    
}
class ToDoList{
    constructor(){
        this._list = []
    }

    set list(object){
        this._list.push(object)
    }

    get list(){
        return this._list
    }
    static getAll(instances){
        return this._list
    }
    set replace(newList){
        this._list = newList
    }
    find(title){
        for (const element of this._list){
            if (element.title = title ){
                let array =element.subtaskArray
                console.log(array)
                return array
            }
        }
    }
    removeObject(deleted){
        console.log('this is deleted:' + deleted)
        for (const obj of this._list){
            if (obj.title == deleted){
                console.log(obj.title)
                console.log('in if')
                console.log(this)
                console.log(deleted)
                this._list.splice(this._list.indexOf(obj),1)
               
            }
        }
    }
    getObjectIndex(name){
        this._list.forEach(object =>{
            if(object.title = name){

            }
        })
    }
}
export { ToDoItems, Subtask, ToDoList }
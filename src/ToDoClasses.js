class ToDoItems{

    constructor(title){
        this.title = title;
        this._subtaskArray = []
        this._isHidden = true;
    }
    set title(title){
        this._title = title
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
}

class Subtask{

    set title(text){
        this._title = text;
    }
    get title(){
        return this._title;
    }
    
}

export { ToDoItems, Subtask }
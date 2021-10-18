class ToDoItems {
  constructor() {
    this._subtaskArray = [];
    this._subtasksHidden = true;
  }
  set title(title) {
    this._title = title;
    let list = new ToDoList();
    list.list = this;
  }
  get title() {
    return this._title;
  }

  set subtaskArray(task) {
    this._subtaskArray.push(task);
  }
  get subtaskArray() {
    return this._subtaskArray;
  }
  subtasksHiddenToggle(){
    if (this._subtasksHidden == true){
      this._subtasksHidden = false;
    }else{
      this._subtasksHidden = true;
    }

  }
  set subtasksHidden(boolean){
    this._subtasksHidden = boolean
  }
  get subtasksHidden(){
    return this._subtasksHidden
  }

  static removeSubtask(list, task, parent) {
    console.log('remove SUBTASKvvv')
    console.log(parent)
    console.log(task)
    console.log('1parent2.task')
    let taskParent = list.find(parent);
    let index = taskParent.indexOf(task);
    taskParent.splice(index-1, 1);
  }

  set dueDate(date) {
    this._dueDate = date;
  }
  get dueDate() {
    return this._dueDate;
  }
  set priority(level) {
    this._priority = level;
  }
  get priority() {
    return this._priority;
  }
}

class Subtask {
  set title(text) {
    this._title = text;
  }
  get title() {
    return this._title;
  }
}
class ToDoList {
  constructor() {
    this._list = [];
  }
  replace(newList){
    this._list = newList
  }
  set list(object) {
    this._list.push(object);
  }

  get list() { 
    console.log('this'+ this._list)
    return this._list;
  }
  static getAll(instances) {
    return this._list;
  }
  set replace(newList) {
    this._list = newList;
  }
  find(title) {
    for (const element of this._list) {
      if ((element.title = title)) {
        let array = element.subtaskArray;
        return array;
      }
    }
  }
  removeObject(deleted) {
    for (const obj of this._list) {
      if (obj.title == deleted) {
       
        this._list.splice(this._list.indexOf(obj), 1);
      }
    }
  }
  getObjectIndex(name) {
    this._list.forEach((object) => {
      if ((object.title = name)) {
      }
    });
  }
}
export { ToDoItems, Subtask, ToDoList };

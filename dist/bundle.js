/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Modal.js":
/*!**********************!*\
  !*** ./src/Modal.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Modal": () => (/* binding */ Modal)
/* harmony export */ });
class Modal{
    constructor(type){
        this.type = type
    }

    make(){
        let baseModal = this.base()
        console.log('in mkae')
        if (this.type == 'toDo'){
            return baseModal
        }
        return baseModal
    }

    base(){
        let modal = document.createElement('div');
        modal.textContent = 'Add Task';
        modal.className = 'modal';

        let modalInput = document.createElement('input');
        modalInput.className = 'taskModalInput';
        modalInput.textContent = 'Task to be added';

        let exitModalButton = document.createElement('button');
        exitModalButton.addEventListener('click', this.closeModal);

        modal.appendChild(exitModalButton);
        modal.appendChild(modalInput);

        let html = document.querySelector('html');
        html.appendChild(modal)
    }

    closeModal(){
        let modal = document.querySelector('.modal')
        modal.remove();
    }
}



/***/ }),

/***/ "./src/ToDoClasses.js":
/*!****************************!*\
  !*** ./src/ToDoClasses.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ToDoItems": () => (/* binding */ ToDoItems),
/* harmony export */   "Subtask": () => (/* binding */ Subtask)
/* harmony export */ });
class ToDoItems{

    constructor(title){
        this.title = title;
        this._subtaskArray = []
        this._isHidden = true;
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



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!***************************!*\
  !*** ./src/controller.js ***!
  \***************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ToDoClasses__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ToDoClasses */ "./src/ToDoClasses.js");
/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Modal */ "./src/Modal.js");



let toDo = new _ToDoClasses__WEBPACK_IMPORTED_MODULE_0__.ToDoItems('Graduate')
console.log(toDo)

let addItem = document.createElement('button');
let html = document.querySelector('html');

addItem.textContent = '+'
addItem.addEventListener('click', () =>{
    let modal = new _Modal__WEBPACK_IMPORTED_MODULE_1__.Modal();
    modal.make()
})

html.appendChild(addItem)
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map
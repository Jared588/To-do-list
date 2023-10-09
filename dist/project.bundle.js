/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/todo.js":
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addToDo: () => (/* binding */ addToDo),
/* harmony export */   "default": () => (/* binding */ Todo)
/* harmony export */ });
function Todo(title, project, description, priority, status, date, time) {
    return {title, project, description, priority, status, date, time};
};

function addToDo(project, todo) {
    project.todos.push(todo);
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
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addProject: () => (/* binding */ addProject),
/* harmony export */   "default": () => (/* binding */ Project),
/* harmony export */   loadDefaultProjects: () => (/* binding */ loadDefaultProjects),
/* harmony export */   updateProjectList: () => (/* binding */ updateProjectList)
/* harmony export */ });
/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo */ "./src/todo.js");



function Project(name) {
    return {
        name,
        todos: [],
    };
}

function addProject(projectList, project) {
    projectList.push(project);
}

function updateProjectList(Projects) {
    let projectList = document.getElementById("project-list");

    // Clear the existing list
    projectList.innerHTML = "";

    // Append the updated list to the webpage
    for (let project of Projects) {
        let projectDiv = document.createElement("ul");
        projectDiv.classList.add("project");
        projectDiv.textContent = project.name;
        projectDiv.id = project.name.toLowerCase();
        projectList.appendChild(projectDiv);
    }
}

function loadDefaultProjects(Projects) {
    // Default Projects
    let Personal = Project("Personal");
    let testToDo = (0,_todo__WEBPACK_IMPORTED_MODULE_0__["default"])("s", Personal, "bla bla bla,", 2, "busy", 1111, 222);
    (0,_todo__WEBPACK_IMPORTED_MODULE_0__.addToDo)(Personal, testToDo);
    addProject(Projects, Personal);
    updateProjectList(Projects);

    let Work = Project("Work");
    let anotherToDo = (0,_todo__WEBPACK_IMPORTED_MODULE_0__["default"])("s", Personal, "bla bla bla,", 2, "busy", 1111, 222);
    (0,_todo__WEBPACK_IMPORTED_MODULE_0__.addToDo)(Work, anotherToDo);
    addProject(Projects, Work);
    updateProjectList(Projects);
}
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvamVjdC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQWU7QUFDZixZQUFZO0FBQ1o7O0FBRU87QUFDUDtBQUNBOzs7Ozs7VUNOQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTjBCO0FBQ087O0FBRWxCO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7O0FBRU87QUFDUDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQSxtQkFBbUIsaURBQUk7QUFDdkIsSUFBSSw4Q0FBTztBQUNYO0FBQ0E7O0FBRUE7QUFDQSxzQkFBc0IsaURBQUk7QUFDMUIsSUFBSSw4Q0FBTztBQUNYO0FBQ0E7QUFDQSxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy90b2RvLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3Byb2plY3QuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVG9kbyh0aXRsZSwgcHJvamVjdCwgZGVzY3JpcHRpb24sIHByaW9yaXR5LCBzdGF0dXMsIGRhdGUsIHRpbWUpIHtcbiAgICByZXR1cm4ge3RpdGxlLCBwcm9qZWN0LCBkZXNjcmlwdGlvbiwgcHJpb3JpdHksIHN0YXR1cywgZGF0ZSwgdGltZX07XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gYWRkVG9Ebyhwcm9qZWN0LCB0b2RvKSB7XG4gICAgcHJvamVjdC50b2Rvcy5wdXNoKHRvZG8pO1xufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IFRvZG8gZnJvbSBcIi4vdG9kb1wiO1xuaW1wb3J0IHsgYWRkVG9EbyB9IGZyb20gXCIuL3RvZG9cIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvamVjdChuYW1lKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgbmFtZSxcbiAgICAgICAgdG9kb3M6IFtdLFxuICAgIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRQcm9qZWN0KHByb2plY3RMaXN0LCBwcm9qZWN0KSB7XG4gICAgcHJvamVjdExpc3QucHVzaChwcm9qZWN0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZVByb2plY3RMaXN0KFByb2plY3RzKSB7XG4gICAgbGV0IHByb2plY3RMaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0LWxpc3RcIik7XG5cbiAgICAvLyBDbGVhciB0aGUgZXhpc3RpbmcgbGlzdFxuICAgIHByb2plY3RMaXN0LmlubmVySFRNTCA9IFwiXCI7XG5cbiAgICAvLyBBcHBlbmQgdGhlIHVwZGF0ZWQgbGlzdCB0byB0aGUgd2VicGFnZVxuICAgIGZvciAobGV0IHByb2plY3Qgb2YgUHJvamVjdHMpIHtcbiAgICAgICAgbGV0IHByb2plY3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG4gICAgICAgIHByb2plY3REaXYuY2xhc3NMaXN0LmFkZChcInByb2plY3RcIik7XG4gICAgICAgIHByb2plY3REaXYudGV4dENvbnRlbnQgPSBwcm9qZWN0Lm5hbWU7XG4gICAgICAgIHByb2plY3REaXYuaWQgPSBwcm9qZWN0Lm5hbWUudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgcHJvamVjdExpc3QuYXBwZW5kQ2hpbGQocHJvamVjdERpdik7XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gbG9hZERlZmF1bHRQcm9qZWN0cyhQcm9qZWN0cykge1xuICAgIC8vIERlZmF1bHQgUHJvamVjdHNcbiAgICBsZXQgUGVyc29uYWwgPSBQcm9qZWN0KFwiUGVyc29uYWxcIik7XG4gICAgbGV0IHRlc3RUb0RvID0gVG9kbyhcInNcIiwgUGVyc29uYWwsIFwiYmxhIGJsYSBibGEsXCIsIDIsIFwiYnVzeVwiLCAxMTExLCAyMjIpO1xuICAgIGFkZFRvRG8oUGVyc29uYWwsIHRlc3RUb0RvKTtcbiAgICBhZGRQcm9qZWN0KFByb2plY3RzLCBQZXJzb25hbCk7XG4gICAgdXBkYXRlUHJvamVjdExpc3QoUHJvamVjdHMpO1xuXG4gICAgbGV0IFdvcmsgPSBQcm9qZWN0KFwiV29ya1wiKTtcbiAgICBsZXQgYW5vdGhlclRvRG8gPSBUb2RvKFwic1wiLCBQZXJzb25hbCwgXCJibGEgYmxhIGJsYSxcIiwgMiwgXCJidXN5XCIsIDExMTEsIDIyMik7XG4gICAgYWRkVG9EbyhXb3JrLCBhbm90aGVyVG9Ebyk7XG4gICAgYWRkUHJvamVjdChQcm9qZWN0cywgV29yayk7XG4gICAgdXBkYXRlUHJvamVjdExpc3QoUHJvamVjdHMpO1xufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
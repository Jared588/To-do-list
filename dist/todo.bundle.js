/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
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
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addToDo: () => (/* binding */ addToDo),
/* harmony export */   "default": () => (/* binding */ Todo),
/* harmony export */   initializeContent: () => (/* binding */ initializeContent)
/* harmony export */ });
function Todo(title, project, description, priority, status, date, time) {
    return {title, project, description, priority, status, date, time};
};

function addToDo(project, todo) {
    project.todos.push(todo);
}

function initializeContent(Project, Projects) {
    let project = Projects.find(project => project.name === Project);
    console.log(project.todos[0]);

    let main = document.querySelector("#content");
    main.classList.add("content");
    main.innerHTML = '';

    for (let todo of project.todos) {
        let contentDiv = document.createElement("div");

        // todo container
        contentDiv.classList.add("project-container"); // main todo container

        let checkbox = document.createElement("div");
        checkbox.classList.add("todo-checkbox");
        let info = document.createElement("div");
        info.classList.add("todo-info");
        let stats = document.createElement("div");
        stats.classList.add("todo-stats");

        // All individual elements that make up the todo
        let contentStatus = document.createElement("input");
        contentStatus.type = "checkbox"
        if (todo.status === "Completed") {
            contentStatus.checked = true;
        }
        checkbox.appendChild(contentStatus);
        

        let contentTitle = document.createElement("h3");
        contentTitle.innerText = todo.title;
        contentTitle.id = "todo-title";
        info.appendChild(contentTitle);

        let contentDescription = document.createElement("p");
        contentDescription.innerText = todo.description;
        info.appendChild(contentDescription);

        let contentDate = document.createElement("p");
        contentDate.innerText = todo.date;
        stats.appendChild(contentDate);

        let contentTime = document.createElement("p");
        contentTime.innerText = todo.time;
        stats.appendChild(contentTime);

        let contentPriority = document.createElement("p");
        contentPriority.innerText = todo.priority;
        stats.appendChild(contentPriority);

        contentDiv.appendChild(checkbox);
        contentDiv.appendChild(info);
        contentDiv.appendChild(stats);

        main.appendChild(contentDiv);
    }
}
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9kby5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7VUFBQTtVQUNBOzs7OztXQ0RBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7OztBQ05lO0FBQ2YsWUFBWTtBQUNaOztBQUVPO0FBQ1A7QUFDQTs7QUFFTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSx1REFBdUQ7O0FBRXZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy90b2RvLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVG9kbyh0aXRsZSwgcHJvamVjdCwgZGVzY3JpcHRpb24sIHByaW9yaXR5LCBzdGF0dXMsIGRhdGUsIHRpbWUpIHtcbiAgICByZXR1cm4ge3RpdGxlLCBwcm9qZWN0LCBkZXNjcmlwdGlvbiwgcHJpb3JpdHksIHN0YXR1cywgZGF0ZSwgdGltZX07XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gYWRkVG9Ebyhwcm9qZWN0LCB0b2RvKSB7XG4gICAgcHJvamVjdC50b2Rvcy5wdXNoKHRvZG8pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaW5pdGlhbGl6ZUNvbnRlbnQoUHJvamVjdCwgUHJvamVjdHMpIHtcbiAgICBsZXQgcHJvamVjdCA9IFByb2plY3RzLmZpbmQocHJvamVjdCA9PiBwcm9qZWN0Lm5hbWUgPT09IFByb2plY3QpO1xuICAgIGNvbnNvbGUubG9nKHByb2plY3QudG9kb3NbMF0pO1xuXG4gICAgbGV0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XG4gICAgbWFpbi5jbGFzc0xpc3QuYWRkKFwiY29udGVudFwiKTtcbiAgICBtYWluLmlubmVySFRNTCA9ICcnO1xuXG4gICAgZm9yIChsZXQgdG9kbyBvZiBwcm9qZWN0LnRvZG9zKSB7XG4gICAgICAgIGxldCBjb250ZW50RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICAgICAgICAvLyB0b2RvIGNvbnRhaW5lclxuICAgICAgICBjb250ZW50RGl2LmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWNvbnRhaW5lclwiKTsgLy8gbWFpbiB0b2RvIGNvbnRhaW5lclxuXG4gICAgICAgIGxldCBjaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGNoZWNrYm94LmNsYXNzTGlzdC5hZGQoXCJ0b2RvLWNoZWNrYm94XCIpO1xuICAgICAgICBsZXQgaW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGluZm8uY2xhc3NMaXN0LmFkZChcInRvZG8taW5mb1wiKTtcbiAgICAgICAgbGV0IHN0YXRzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgc3RhdHMuY2xhc3NMaXN0LmFkZChcInRvZG8tc3RhdHNcIik7XG5cbiAgICAgICAgLy8gQWxsIGluZGl2aWR1YWwgZWxlbWVudHMgdGhhdCBtYWtlIHVwIHRoZSB0b2RvXG4gICAgICAgIGxldCBjb250ZW50U3RhdHVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgICBjb250ZW50U3RhdHVzLnR5cGUgPSBcImNoZWNrYm94XCJcbiAgICAgICAgaWYgKHRvZG8uc3RhdHVzID09PSBcIkNvbXBsZXRlZFwiKSB7XG4gICAgICAgICAgICBjb250ZW50U3RhdHVzLmNoZWNrZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGNoZWNrYm94LmFwcGVuZENoaWxkKGNvbnRlbnRTdGF0dXMpO1xuICAgICAgICBcblxuICAgICAgICBsZXQgY29udGVudFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICAgICAgICBjb250ZW50VGl0bGUuaW5uZXJUZXh0ID0gdG9kby50aXRsZTtcbiAgICAgICAgY29udGVudFRpdGxlLmlkID0gXCJ0b2RvLXRpdGxlXCI7XG4gICAgICAgIGluZm8uYXBwZW5kQ2hpbGQoY29udGVudFRpdGxlKTtcblxuICAgICAgICBsZXQgY29udGVudERlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICAgIGNvbnRlbnREZXNjcmlwdGlvbi5pbm5lclRleHQgPSB0b2RvLmRlc2NyaXB0aW9uO1xuICAgICAgICBpbmZvLmFwcGVuZENoaWxkKGNvbnRlbnREZXNjcmlwdGlvbik7XG5cbiAgICAgICAgbGV0IGNvbnRlbnREYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICAgIGNvbnRlbnREYXRlLmlubmVyVGV4dCA9IHRvZG8uZGF0ZTtcbiAgICAgICAgc3RhdHMuYXBwZW5kQ2hpbGQoY29udGVudERhdGUpO1xuXG4gICAgICAgIGxldCBjb250ZW50VGltZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgICBjb250ZW50VGltZS5pbm5lclRleHQgPSB0b2RvLnRpbWU7XG4gICAgICAgIHN0YXRzLmFwcGVuZENoaWxkKGNvbnRlbnRUaW1lKTtcblxuICAgICAgICBsZXQgY29udGVudFByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICAgIGNvbnRlbnRQcmlvcml0eS5pbm5lclRleHQgPSB0b2RvLnByaW9yaXR5O1xuICAgICAgICBzdGF0cy5hcHBlbmRDaGlsZChjb250ZW50UHJpb3JpdHkpO1xuXG4gICAgICAgIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQoY2hlY2tib3gpO1xuICAgICAgICBjb250ZW50RGl2LmFwcGVuZENoaWxkKGluZm8pO1xuICAgICAgICBjb250ZW50RGl2LmFwcGVuZENoaWxkKHN0YXRzKTtcblxuICAgICAgICBtYWluLmFwcGVuZENoaWxkKGNvbnRlbnREaXYpO1xuICAgIH1cbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
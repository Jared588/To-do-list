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
/*!*********************!*\
  !*** ./src/form.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ calibrateForm),
/* harmony export */   updateModalOptions: () => (/* binding */ updateModalOptions)
/* harmony export */ });
/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo */ "./src/todo.js");




function calibrateForm(Projects) {
    // Update modal to display project options
    updateModalOptions(Projects);

    // Handle form submission
    document.getElementById("addToDo").addEventListener("submit", function (e) {
        e.preventDefault(); // Prevent the default form submission behavior

        const todoName = document.getElementById("title").value;
        const todoProjectName = document.getElementById("modal-project-list").value;
        const todoDescription = document.getElementById("description").value;
        const todoPriority = document.getElementById("priority").value;
        const todoStatus = document.getElementById("status").value;
        const todoDate = document.getElementById("date").value;
        const todoTime = document.getElementById("time").value;

        // Find the actual Project
        const todoProject = Projects.find(project => project.name === todoProjectName);

        const newTodo = (0,_todo__WEBPACK_IMPORTED_MODULE_0__["default"])(todoName, todoProject, todoDescription, todoPriority, todoStatus, todoDate, todoTime);
        (0,_todo__WEBPACK_IMPORTED_MODULE_0__.addToDo)(todoProject, newTodo);
        
        (0,_todo__WEBPACK_IMPORTED_MODULE_0__.initializeContent)(todoProjectName, Projects);
        closeModal();
    });

    // Attach event listeners to open and close the modal
    document.getElementById("addBtn").addEventListener("click", openModal);
    document.getElementById("closeModal").addEventListener("click", closeModal);

    // Close the modal if the user clicks outside of it
    window.addEventListener("click", function(event) {
        var modal = document.getElementById("myModal");
        if (event.target == modal) {
            modal.style.display = "none";
        }
    });

    // Initially, hide the modal when the page loads
    window.addEventListener("DOMContentLoaded", function() {
        closeModal();
    });
}

// Function to open the modal
function openModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "flex";
}

// Function to close the modal
function closeModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
}

function updateModalOptions(Projects) {
    // Add available Projects to the modal
    let modalProjectList = document.getElementById("modal-project-list");

    // Clear the existing list
    modalProjectList.innerHTML = "";

    for (let project of Projects) {
        let projectDiv = document.createElement("option");
        projectDiv.textContent = project.name;
        projectDiv.value = project.name;
        modalProjectList.appendChild(projectDiv);
    }
}
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFlO0FBQ2YsWUFBWTtBQUNaOztBQUVPO0FBQ1A7QUFDQTs7QUFFTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSx1REFBdUQ7O0FBRXZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7VUNqRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOMEI7QUFDTztBQUNVOztBQUU1QjtBQUNmO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDRCQUE0Qjs7QUFFNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSx3QkFBd0IsaURBQUk7QUFDNUIsUUFBUSw4Q0FBTztBQUNmO0FBQ0EsUUFBUSx3REFBaUI7QUFDekI7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvdG9kby5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9mb3JtLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRvZG8odGl0bGUsIHByb2plY3QsIGRlc2NyaXB0aW9uLCBwcmlvcml0eSwgc3RhdHVzLCBkYXRlLCB0aW1lKSB7XG4gICAgcmV0dXJuIHt0aXRsZSwgcHJvamVjdCwgZGVzY3JpcHRpb24sIHByaW9yaXR5LCBzdGF0dXMsIGRhdGUsIHRpbWV9O1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGFkZFRvRG8ocHJvamVjdCwgdG9kbykge1xuICAgIHByb2plY3QudG9kb3MucHVzaCh0b2RvKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGluaXRpYWxpemVDb250ZW50KFByb2plY3QsIFByb2plY3RzKSB7XG4gICAgbGV0IHByb2plY3QgPSBQcm9qZWN0cy5maW5kKHByb2plY3QgPT4gcHJvamVjdC5uYW1lID09PSBQcm9qZWN0KTtcbiAgICBjb25zb2xlLmxvZyhwcm9qZWN0LnRvZG9zWzBdKTtcblxuICAgIGxldCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xuICAgIG1haW4uY2xhc3NMaXN0LmFkZChcImNvbnRlbnRcIik7XG4gICAgbWFpbi5pbm5lckhUTUwgPSAnJztcblxuICAgIGZvciAobGV0IHRvZG8gb2YgcHJvamVjdC50b2Rvcykge1xuICAgICAgICBsZXQgY29udGVudERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgICAgICAgLy8gdG9kbyBjb250YWluZXJcbiAgICAgICAgY29udGVudERpdi5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1jb250YWluZXJcIik7IC8vIG1haW4gdG9kbyBjb250YWluZXJcblxuICAgICAgICBsZXQgY2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBjaGVja2JveC5jbGFzc0xpc3QuYWRkKFwidG9kby1jaGVja2JveFwiKTtcbiAgICAgICAgbGV0IGluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBpbmZvLmNsYXNzTGlzdC5hZGQoXCJ0b2RvLWluZm9cIik7XG4gICAgICAgIGxldCBzdGF0cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHN0YXRzLmNsYXNzTGlzdC5hZGQoXCJ0b2RvLXN0YXRzXCIpO1xuXG4gICAgICAgIC8vIEFsbCBpbmRpdmlkdWFsIGVsZW1lbnRzIHRoYXQgbWFrZSB1cCB0aGUgdG9kb1xuICAgICAgICBsZXQgY29udGVudFN0YXR1cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgICAgY29udGVudFN0YXR1cy50eXBlID0gXCJjaGVja2JveFwiXG4gICAgICAgIGlmICh0b2RvLnN0YXR1cyA9PT0gXCJDb21wbGV0ZWRcIikge1xuICAgICAgICAgICAgY29udGVudFN0YXR1cy5jaGVja2VkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBjaGVja2JveC5hcHBlbmRDaGlsZChjb250ZW50U3RhdHVzKTtcbiAgICAgICAgXG5cbiAgICAgICAgbGV0IGNvbnRlbnRUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgICAgICAgY29udGVudFRpdGxlLmlubmVyVGV4dCA9IHRvZG8udGl0bGU7XG4gICAgICAgIGNvbnRlbnRUaXRsZS5pZCA9IFwidG9kby10aXRsZVwiO1xuICAgICAgICBpbmZvLmFwcGVuZENoaWxkKGNvbnRlbnRUaXRsZSk7XG5cbiAgICAgICAgbGV0IGNvbnRlbnREZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgICBjb250ZW50RGVzY3JpcHRpb24uaW5uZXJUZXh0ID0gdG9kby5kZXNjcmlwdGlvbjtcbiAgICAgICAgaW5mby5hcHBlbmRDaGlsZChjb250ZW50RGVzY3JpcHRpb24pO1xuXG4gICAgICAgIGxldCBjb250ZW50RGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgICBjb250ZW50RGF0ZS5pbm5lclRleHQgPSB0b2RvLmRhdGU7XG4gICAgICAgIHN0YXRzLmFwcGVuZENoaWxkKGNvbnRlbnREYXRlKTtcblxuICAgICAgICBsZXQgY29udGVudFRpbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgICAgY29udGVudFRpbWUuaW5uZXJUZXh0ID0gdG9kby50aW1lO1xuICAgICAgICBzdGF0cy5hcHBlbmRDaGlsZChjb250ZW50VGltZSk7XG5cbiAgICAgICAgbGV0IGNvbnRlbnRQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgICBjb250ZW50UHJpb3JpdHkuaW5uZXJUZXh0ID0gdG9kby5wcmlvcml0eTtcbiAgICAgICAgc3RhdHMuYXBwZW5kQ2hpbGQoY29udGVudFByaW9yaXR5KTtcblxuICAgICAgICBjb250ZW50RGl2LmFwcGVuZENoaWxkKGNoZWNrYm94KTtcbiAgICAgICAgY29udGVudERpdi5hcHBlbmRDaGlsZChpbmZvKTtcbiAgICAgICAgY29udGVudERpdi5hcHBlbmRDaGlsZChzdGF0cyk7XG5cbiAgICAgICAgbWFpbi5hcHBlbmRDaGlsZChjb250ZW50RGl2KTtcbiAgICB9XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgVG9kbyBmcm9tIFwiLi90b2RvXCI7XG5pbXBvcnQgeyBhZGRUb0RvIH0gZnJvbSBcIi4vdG9kb1wiO1xuaW1wb3J0IHsgaW5pdGlhbGl6ZUNvbnRlbnQgfSBmcm9tIFwiLi90b2RvXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNhbGlicmF0ZUZvcm0oUHJvamVjdHMpIHtcbiAgICAvLyBVcGRhdGUgbW9kYWwgdG8gZGlzcGxheSBwcm9qZWN0IG9wdGlvbnNcbiAgICB1cGRhdGVNb2RhbE9wdGlvbnMoUHJvamVjdHMpO1xuXG4gICAgLy8gSGFuZGxlIGZvcm0gc3VibWlzc2lvblxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkVG9Eb1wiKS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTsgLy8gUHJldmVudCB0aGUgZGVmYXVsdCBmb3JtIHN1Ym1pc3Npb24gYmVoYXZpb3JcblxuICAgICAgICBjb25zdCB0b2RvTmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGl0bGVcIikudmFsdWU7XG4gICAgICAgIGNvbnN0IHRvZG9Qcm9qZWN0TmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibW9kYWwtcHJvamVjdC1saXN0XCIpLnZhbHVlO1xuICAgICAgICBjb25zdCB0b2RvRGVzY3JpcHRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRlc2NyaXB0aW9uXCIpLnZhbHVlO1xuICAgICAgICBjb25zdCB0b2RvUHJpb3JpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByaW9yaXR5XCIpLnZhbHVlO1xuICAgICAgICBjb25zdCB0b2RvU3RhdHVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdGF0dXNcIikudmFsdWU7XG4gICAgICAgIGNvbnN0IHRvZG9EYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkYXRlXCIpLnZhbHVlO1xuICAgICAgICBjb25zdCB0b2RvVGltZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGltZVwiKS52YWx1ZTtcblxuICAgICAgICAvLyBGaW5kIHRoZSBhY3R1YWwgUHJvamVjdFxuICAgICAgICBjb25zdCB0b2RvUHJvamVjdCA9IFByb2plY3RzLmZpbmQocHJvamVjdCA9PiBwcm9qZWN0Lm5hbWUgPT09IHRvZG9Qcm9qZWN0TmFtZSk7XG5cbiAgICAgICAgY29uc3QgbmV3VG9kbyA9IFRvZG8odG9kb05hbWUsIHRvZG9Qcm9qZWN0LCB0b2RvRGVzY3JpcHRpb24sIHRvZG9Qcmlvcml0eSwgdG9kb1N0YXR1cywgdG9kb0RhdGUsIHRvZG9UaW1lKTtcbiAgICAgICAgYWRkVG9Ebyh0b2RvUHJvamVjdCwgbmV3VG9kbyk7XG4gICAgICAgIFxuICAgICAgICBpbml0aWFsaXplQ29udGVudCh0b2RvUHJvamVjdE5hbWUsIFByb2plY3RzKTtcbiAgICAgICAgY2xvc2VNb2RhbCgpO1xuICAgIH0pO1xuXG4gICAgLy8gQXR0YWNoIGV2ZW50IGxpc3RlbmVycyB0byBvcGVuIGFuZCBjbG9zZSB0aGUgbW9kYWxcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZEJ0blwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgb3Blbk1vZGFsKTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNsb3NlTW9kYWxcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNsb3NlTW9kYWwpO1xuXG4gICAgLy8gQ2xvc2UgdGhlIG1vZGFsIGlmIHRoZSB1c2VyIGNsaWNrcyBvdXRzaWRlIG9mIGl0XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihldmVudCkge1xuICAgICAgICB2YXIgbW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm15TW9kYWxcIik7XG4gICAgICAgIGlmIChldmVudC50YXJnZXQgPT0gbW9kYWwpIHtcbiAgICAgICAgICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy8gSW5pdGlhbGx5LCBoaWRlIHRoZSBtb2RhbCB3aGVuIHRoZSBwYWdlIGxvYWRzXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICBjbG9zZU1vZGFsKCk7XG4gICAgfSk7XG59XG5cbi8vIEZ1bmN0aW9uIHRvIG9wZW4gdGhlIG1vZGFsXG5mdW5jdGlvbiBvcGVuTW9kYWwoKSB7XG4gICAgdmFyIG1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJteU1vZGFsXCIpO1xuICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbn1cblxuLy8gRnVuY3Rpb24gdG8gY2xvc2UgdGhlIG1vZGFsXG5mdW5jdGlvbiBjbG9zZU1vZGFsKCkge1xuICAgIHZhciBtb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibXlNb2RhbFwiKTtcbiAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVNb2RhbE9wdGlvbnMoUHJvamVjdHMpIHtcbiAgICAvLyBBZGQgYXZhaWxhYmxlIFByb2plY3RzIHRvIHRoZSBtb2RhbFxuICAgIGxldCBtb2RhbFByb2plY3RMaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtb2RhbC1wcm9qZWN0LWxpc3RcIik7XG5cbiAgICAvLyBDbGVhciB0aGUgZXhpc3RpbmcgbGlzdFxuICAgIG1vZGFsUHJvamVjdExpc3QuaW5uZXJIVE1MID0gXCJcIjtcblxuICAgIGZvciAobGV0IHByb2plY3Qgb2YgUHJvamVjdHMpIHtcbiAgICAgICAgbGV0IHByb2plY3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgICAgICBwcm9qZWN0RGl2LnRleHRDb250ZW50ID0gcHJvamVjdC5uYW1lO1xuICAgICAgICBwcm9qZWN0RGl2LnZhbHVlID0gcHJvamVjdC5uYW1lO1xuICAgICAgICBtb2RhbFByb2plY3RMaXN0LmFwcGVuZENoaWxkKHByb2plY3REaXYpO1xuICAgIH1cbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
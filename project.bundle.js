/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/form.js":
/*!*********************!*\
  !*** ./src/form.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ }),

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
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addProject: () => (/* binding */ addProject),
/* harmony export */   addProjectToPageBtn: () => (/* binding */ addProjectToPageBtn),
/* harmony export */   "default": () => (/* binding */ Project),
/* harmony export */   loadDefaultProjects: () => (/* binding */ loadDefaultProjects),
/* harmony export */   updateProjectList: () => (/* binding */ updateProjectList)
/* harmony export */ });
/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo */ "./src/todo.js");
/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form */ "./src/form.js");





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
        projectDiv.addEventListener("click", () => (0,_todo__WEBPACK_IMPORTED_MODULE_0__.initializeContent)(project.name, Projects));
        projectList.appendChild(projectDiv);
    }
}

function addProjectToPageBtn(Projects) {
    let projectList = document.getElementById("project-list");   
    let addProjBtn = document.createElement("button");
    
    addProjBtn.innerText = "+ add project";
    addProjBtn.id = "addProjBtn"
    addProjBtn.classList.add("add-project-button"); 
    addProjBtn.addEventListener("click", () => OpenProjectModal(Projects)); 
    projectList.appendChild(addProjBtn);
}

function OpenProjectModal(Projects) {
    openModal();
    // Handle form submission
    const addProjectForm = document.getElementById("addProject");
    const submitHandler = function (e) {
        e.preventDefault(); // Prevent the default form submission behavior

        const name = document.getElementById("project-name").value;
        let newProject = Project(name);

        addProject(Projects, newProject);
        updateProjectList(Projects);
        document.getElementById("project-name").value = ''; // Clear the input value after submission

        // Remove the event listener for the form submission
        addProjectForm.removeEventListener("submit", submitHandler);

        addProjectToPageBtn(Projects);
        (0,_form__WEBPACK_IMPORTED_MODULE_1__.updateModalOptions)(Projects);
        closeModal();
    };

    addProjectForm.addEventListener("submit", submitHandler);

    // Attach event listeners to open and close the modal
    document.getElementById("addProjBtn").addEventListener("click", openModal);
    document.getElementById("closeProjectModal").addEventListener("click", closeModal);

    // Close the modal if the user clicks outside of it
    window.addEventListener("click", function (event) {
        var modal = document.getElementById("myProjectModal");
        if (event.target == modal) {
            modal.style.display = "none";
            addProjectForm.removeEventListener("submit", submitHandler);
        }
    });

    // Initially, hide the modal when the page loads
    window.addEventListener("DOMContentLoaded", function () {
        closeModal();
    });

    // Function to open the modal
    function openModal() {
        var modal = document.getElementById("myProjectModal");
        modal.style.display = "flex";
    }

    // Function to close the modal
    function closeModal() {
        var modal = document.getElementById("myProjectModal");
        modal.style.display = "none";
        addProjectForm.removeEventListener("submit", submitHandler);
    }
}

// Default/Demo Projects
function loadDefaultProjects(Projects) {
    // Default Projects
    let Personal = Project("Personal");
    let testToDo = (0,_todo__WEBPACK_IMPORTED_MODULE_0__["default"])("Do 30 minutes of yoga 🧘", Personal, "Find an instructor online and stick with it!", 5, "Completed", 1111, 222);
    let testToDo2 = (0,_todo__WEBPACK_IMPORTED_MODULE_0__["default"])("Dentist appointment", Personal, "Don't forget to brush your teeth!", 9, "To do", 1111, 222);
    let testToDo3 = (0,_todo__WEBPACK_IMPORTED_MODULE_0__["default"])("Buy bread 🍞", Personal, '', 5, "To do", 1111, 222);
    (0,_todo__WEBPACK_IMPORTED_MODULE_0__.addToDo)(Personal, testToDo);
    (0,_todo__WEBPACK_IMPORTED_MODULE_0__.addToDo)(Personal, testToDo2);
    (0,_todo__WEBPACK_IMPORTED_MODULE_0__.addToDo)(Personal, testToDo3);
    addProject(Projects, Personal);
    updateProjectList(Projects);

    let Work = Project("Work");
    let testToDo4 = (0,_todo__WEBPACK_IMPORTED_MODULE_0__["default"])("Plan user research sessions", Personal, '', 5, "Completed", 1111, 222);
    let testToDo5 = (0,_todo__WEBPACK_IMPORTED_MODULE_0__["default"])("Provide feedback on Amy's design", Personal, '', 9, "To do", 1111, 222);
    let testToDo6 = (0,_todo__WEBPACK_IMPORTED_MODULE_0__["default"])("Afternoon meeting", Personal, '', 5, "To do", 1111, 222);
    let testToDo7 = (0,_todo__WEBPACK_IMPORTED_MODULE_0__["default"])("Hand in report", Personal, 'Dont forget to double check for typos', 5, "To do", 1111, 222);
    (0,_todo__WEBPACK_IMPORTED_MODULE_0__.addToDo)(Work, testToDo4);
    (0,_todo__WEBPACK_IMPORTED_MODULE_0__.addToDo)(Work, testToDo5);
    (0,_todo__WEBPACK_IMPORTED_MODULE_0__.addToDo)(Work, testToDo6);
    (0,_todo__WEBPACK_IMPORTED_MODULE_0__.addToDo)(Work, testToDo7);
    addProject(Projects, Work);
    updateProjectList(Projects);
}
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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c291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9mb3JtLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvdG9kby5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9wcm9qZWN0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUb2RvIGZyb20gXCIuL3RvZG9cIjtcbmltcG9ydCB7IGFkZFRvRG8gfSBmcm9tIFwiLi90b2RvXCI7XG5pbXBvcnQgeyBpbml0aWFsaXplQ29udGVudCB9IGZyb20gXCIuL3RvZG9cIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY2FsaWJyYXRlRm9ybShQcm9qZWN0cykge1xuICAgIC8vIFVwZGF0ZSBtb2RhbCB0byBkaXNwbGF5IHByb2plY3Qgb3B0aW9uc1xuICAgIHVwZGF0ZU1vZGFsT3B0aW9ucyhQcm9qZWN0cyk7XG5cbiAgICAvLyBIYW5kbGUgZm9ybSBzdWJtaXNzaW9uXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGRUb0RvXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpOyAvLyBQcmV2ZW50IHRoZSBkZWZhdWx0IGZvcm0gc3VibWlzc2lvbiBiZWhhdmlvclxuXG4gICAgICAgIGNvbnN0IHRvZG9OYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0aXRsZVwiKS52YWx1ZTtcbiAgICAgICAgY29uc3QgdG9kb1Byb2plY3ROYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtb2RhbC1wcm9qZWN0LWxpc3RcIikudmFsdWU7XG4gICAgICAgIGNvbnN0IHRvZG9EZXNjcmlwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGVzY3JpcHRpb25cIikudmFsdWU7XG4gICAgICAgIGNvbnN0IHRvZG9Qcmlvcml0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJpb3JpdHlcIikudmFsdWU7XG4gICAgICAgIGNvbnN0IHRvZG9TdGF0dXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN0YXR1c1wiKS52YWx1ZTtcbiAgICAgICAgY29uc3QgdG9kb0RhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRhdGVcIikudmFsdWU7XG4gICAgICAgIGNvbnN0IHRvZG9UaW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0aW1lXCIpLnZhbHVlO1xuXG4gICAgICAgIC8vIEZpbmQgdGhlIGFjdHVhbCBQcm9qZWN0XG4gICAgICAgIGNvbnN0IHRvZG9Qcm9qZWN0ID0gUHJvamVjdHMuZmluZChwcm9qZWN0ID0+IHByb2plY3QubmFtZSA9PT0gdG9kb1Byb2plY3ROYW1lKTtcblxuICAgICAgICBjb25zdCBuZXdUb2RvID0gVG9kbyh0b2RvTmFtZSwgdG9kb1Byb2plY3QsIHRvZG9EZXNjcmlwdGlvbiwgdG9kb1ByaW9yaXR5LCB0b2RvU3RhdHVzLCB0b2RvRGF0ZSwgdG9kb1RpbWUpO1xuICAgICAgICBhZGRUb0RvKHRvZG9Qcm9qZWN0LCBuZXdUb2RvKTtcbiAgICAgICAgXG4gICAgICAgIGluaXRpYWxpemVDb250ZW50KHRvZG9Qcm9qZWN0TmFtZSwgUHJvamVjdHMpO1xuICAgICAgICBjbG9zZU1vZGFsKCk7XG4gICAgfSk7XG5cbiAgICAvLyBBdHRhY2ggZXZlbnQgbGlzdGVuZXJzIHRvIG9wZW4gYW5kIGNsb3NlIHRoZSBtb2RhbFxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkQnRuXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBvcGVuTW9kYWwpO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2xvc2VNb2RhbFwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2xvc2VNb2RhbCk7XG5cbiAgICAvLyBDbG9zZSB0aGUgbW9kYWwgaWYgdGhlIHVzZXIgY2xpY2tzIG91dHNpZGUgb2YgaXRcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgIHZhciBtb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibXlNb2RhbFwiKTtcbiAgICAgICAgaWYgKGV2ZW50LnRhcmdldCA9PSBtb2RhbCkge1xuICAgICAgICAgICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyBJbml0aWFsbHksIGhpZGUgdGhlIG1vZGFsIHdoZW4gdGhlIHBhZ2UgbG9hZHNcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgIGNsb3NlTW9kYWwoKTtcbiAgICB9KTtcbn1cblxuLy8gRnVuY3Rpb24gdG8gb3BlbiB0aGUgbW9kYWxcbmZ1bmN0aW9uIG9wZW5Nb2RhbCgpIHtcbiAgICB2YXIgbW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm15TW9kYWxcIik7XG4gICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xufVxuXG4vLyBGdW5jdGlvbiB0byBjbG9zZSB0aGUgbW9kYWxcbmZ1bmN0aW9uIGNsb3NlTW9kYWwoKSB7XG4gICAgdmFyIG1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJteU1vZGFsXCIpO1xuICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZU1vZGFsT3B0aW9ucyhQcm9qZWN0cykge1xuICAgIC8vIEFkZCBhdmFpbGFibGUgUHJvamVjdHMgdG8gdGhlIG1vZGFsXG4gICAgbGV0IG1vZGFsUHJvamVjdExpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1vZGFsLXByb2plY3QtbGlzdFwiKTtcblxuICAgIC8vIENsZWFyIHRoZSBleGlzdGluZyBsaXN0XG4gICAgbW9kYWxQcm9qZWN0TGlzdC5pbm5lckhUTUwgPSBcIlwiO1xuXG4gICAgZm9yIChsZXQgcHJvamVjdCBvZiBQcm9qZWN0cykge1xuICAgICAgICBsZXQgcHJvamVjdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgICAgIHByb2plY3REaXYudGV4dENvbnRlbnQgPSBwcm9qZWN0Lm5hbWU7XG4gICAgICAgIHByb2plY3REaXYudmFsdWUgPSBwcm9qZWN0Lm5hbWU7XG4gICAgICAgIG1vZGFsUHJvamVjdExpc3QuYXBwZW5kQ2hpbGQocHJvamVjdERpdik7XG4gICAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRvZG8odGl0bGUsIHByb2plY3QsIGRlc2NyaXB0aW9uLCBwcmlvcml0eSwgc3RhdHVzLCBkYXRlLCB0aW1lKSB7XG4gICAgcmV0dXJuIHt0aXRsZSwgcHJvamVjdCwgZGVzY3JpcHRpb24sIHByaW9yaXR5LCBzdGF0dXMsIGRhdGUsIHRpbWV9O1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGFkZFRvRG8ocHJvamVjdCwgdG9kbykge1xuICAgIHByb2plY3QudG9kb3MucHVzaCh0b2RvKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGluaXRpYWxpemVDb250ZW50KFByb2plY3QsIFByb2plY3RzKSB7XG4gICAgbGV0IHByb2plY3QgPSBQcm9qZWN0cy5maW5kKHByb2plY3QgPT4gcHJvamVjdC5uYW1lID09PSBQcm9qZWN0KTtcbiAgICBjb25zb2xlLmxvZyhwcm9qZWN0LnRvZG9zWzBdKTtcblxuICAgIGxldCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xuICAgIG1haW4uY2xhc3NMaXN0LmFkZChcImNvbnRlbnRcIik7XG4gICAgbWFpbi5pbm5lckhUTUwgPSAnJztcblxuICAgIGZvciAobGV0IHRvZG8gb2YgcHJvamVjdC50b2Rvcykge1xuICAgICAgICBsZXQgY29udGVudERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgICAgICAgLy8gdG9kbyBjb250YWluZXJcbiAgICAgICAgY29udGVudERpdi5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1jb250YWluZXJcIik7IC8vIG1haW4gdG9kbyBjb250YWluZXJcblxuICAgICAgICBsZXQgY2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBjaGVja2JveC5jbGFzc0xpc3QuYWRkKFwidG9kby1jaGVja2JveFwiKTtcbiAgICAgICAgbGV0IGluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBpbmZvLmNsYXNzTGlzdC5hZGQoXCJ0b2RvLWluZm9cIik7XG4gICAgICAgIGxldCBzdGF0cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHN0YXRzLmNsYXNzTGlzdC5hZGQoXCJ0b2RvLXN0YXRzXCIpO1xuXG4gICAgICAgIC8vIEFsbCBpbmRpdmlkdWFsIGVsZW1lbnRzIHRoYXQgbWFrZSB1cCB0aGUgdG9kb1xuICAgICAgICBsZXQgY29udGVudFN0YXR1cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgICAgY29udGVudFN0YXR1cy50eXBlID0gXCJjaGVja2JveFwiXG4gICAgICAgIGlmICh0b2RvLnN0YXR1cyA9PT0gXCJDb21wbGV0ZWRcIikge1xuICAgICAgICAgICAgY29udGVudFN0YXR1cy5jaGVja2VkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBjaGVja2JveC5hcHBlbmRDaGlsZChjb250ZW50U3RhdHVzKTtcbiAgICAgICAgXG5cbiAgICAgICAgbGV0IGNvbnRlbnRUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgICAgICAgY29udGVudFRpdGxlLmlubmVyVGV4dCA9IHRvZG8udGl0bGU7XG4gICAgICAgIGNvbnRlbnRUaXRsZS5pZCA9IFwidG9kby10aXRsZVwiO1xuICAgICAgICBpbmZvLmFwcGVuZENoaWxkKGNvbnRlbnRUaXRsZSk7XG5cbiAgICAgICAgbGV0IGNvbnRlbnREZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgICBjb250ZW50RGVzY3JpcHRpb24uaW5uZXJUZXh0ID0gdG9kby5kZXNjcmlwdGlvbjtcbiAgICAgICAgaW5mby5hcHBlbmRDaGlsZChjb250ZW50RGVzY3JpcHRpb24pO1xuXG4gICAgICAgIGxldCBjb250ZW50RGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgICBjb250ZW50RGF0ZS5pbm5lclRleHQgPSB0b2RvLmRhdGU7XG4gICAgICAgIHN0YXRzLmFwcGVuZENoaWxkKGNvbnRlbnREYXRlKTtcblxuICAgICAgICBsZXQgY29udGVudFRpbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgICAgY29udGVudFRpbWUuaW5uZXJUZXh0ID0gdG9kby50aW1lO1xuICAgICAgICBzdGF0cy5hcHBlbmRDaGlsZChjb250ZW50VGltZSk7XG5cbiAgICAgICAgbGV0IGNvbnRlbnRQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgICBjb250ZW50UHJpb3JpdHkuaW5uZXJUZXh0ID0gdG9kby5wcmlvcml0eTtcbiAgICAgICAgc3RhdHMuYXBwZW5kQ2hpbGQoY29udGVudFByaW9yaXR5KTtcblxuICAgICAgICBjb250ZW50RGl2LmFwcGVuZENoaWxkKGNoZWNrYm94KTtcbiAgICAgICAgY29udGVudERpdi5hcHBlbmRDaGlsZChpbmZvKTtcbiAgICAgICAgY29udGVudERpdi5hcHBlbmRDaGlsZChzdGF0cyk7XG5cbiAgICAgICAgbWFpbi5hcHBlbmRDaGlsZChjb250ZW50RGl2KTtcbiAgICB9XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgVG9kbyBmcm9tIFwiLi90b2RvXCI7XG5pbXBvcnQgeyBhZGRUb0RvIH0gZnJvbSBcIi4vdG9kb1wiO1xuaW1wb3J0IHsgdXBkYXRlTW9kYWxPcHRpb25zIH0gZnJvbSBcIi4vZm9ybVwiO1xuaW1wb3J0IHsgaW5pdGlhbGl6ZUNvbnRlbnQgfSBmcm9tIFwiLi90b2RvXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2plY3QobmFtZSkge1xuICAgIHJldHVybiB7XG4gICAgICAgIG5hbWUsXG4gICAgICAgIHRvZG9zOiBbXSxcbiAgICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkUHJvamVjdChwcm9qZWN0TGlzdCwgcHJvamVjdCkge1xuICAgIHByb2plY3RMaXN0LnB1c2gocHJvamVjdCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVQcm9qZWN0TGlzdChQcm9qZWN0cykge1xuICAgIGxldCBwcm9qZWN0TGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdC1saXN0XCIpO1xuXG4gICAgLy8gQ2xlYXIgdGhlIGV4aXN0aW5nIGxpc3RcbiAgICBwcm9qZWN0TGlzdC5pbm5lckhUTUwgPSBcIlwiO1xuXG4gICAgLy8gQXBwZW5kIHRoZSB1cGRhdGVkIGxpc3QgdG8gdGhlIHdlYnBhZ2VcbiAgICBmb3IgKGxldCBwcm9qZWN0IG9mIFByb2plY3RzKSB7XG4gICAgICAgIGxldCBwcm9qZWN0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICAgICAgICBwcm9qZWN0RGl2LmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0XCIpO1xuICAgICAgICBwcm9qZWN0RGl2LnRleHRDb250ZW50ID0gcHJvamVjdC5uYW1lO1xuICAgICAgICBwcm9qZWN0RGl2LmlkID0gcHJvamVjdC5uYW1lLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIHByb2plY3REaXYuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IGluaXRpYWxpemVDb250ZW50KHByb2plY3QubmFtZSwgUHJvamVjdHMpKTtcbiAgICAgICAgcHJvamVjdExpc3QuYXBwZW5kQ2hpbGQocHJvamVjdERpdik7XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkUHJvamVjdFRvUGFnZUJ0bihQcm9qZWN0cykge1xuICAgIGxldCBwcm9qZWN0TGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdC1saXN0XCIpOyAgIFxuICAgIGxldCBhZGRQcm9qQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBcbiAgICBhZGRQcm9qQnRuLmlubmVyVGV4dCA9IFwiKyBhZGQgcHJvamVjdFwiO1xuICAgIGFkZFByb2pCdG4uaWQgPSBcImFkZFByb2pCdG5cIlxuICAgIGFkZFByb2pCdG4uY2xhc3NMaXN0LmFkZChcImFkZC1wcm9qZWN0LWJ1dHRvblwiKTsgXG4gICAgYWRkUHJvakJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gT3BlblByb2plY3RNb2RhbChQcm9qZWN0cykpOyBcbiAgICBwcm9qZWN0TGlzdC5hcHBlbmRDaGlsZChhZGRQcm9qQnRuKTtcbn1cblxuZnVuY3Rpb24gT3BlblByb2plY3RNb2RhbChQcm9qZWN0cykge1xuICAgIG9wZW5Nb2RhbCgpO1xuICAgIC8vIEhhbmRsZSBmb3JtIHN1Ym1pc3Npb25cbiAgICBjb25zdCBhZGRQcm9qZWN0Rm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkUHJvamVjdFwiKTtcbiAgICBjb25zdCBzdWJtaXRIYW5kbGVyID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpOyAvLyBQcmV2ZW50IHRoZSBkZWZhdWx0IGZvcm0gc3VibWlzc2lvbiBiZWhhdmlvclxuXG4gICAgICAgIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3QtbmFtZVwiKS52YWx1ZTtcbiAgICAgICAgbGV0IG5ld1Byb2plY3QgPSBQcm9qZWN0KG5hbWUpO1xuXG4gICAgICAgIGFkZFByb2plY3QoUHJvamVjdHMsIG5ld1Byb2plY3QpO1xuICAgICAgICB1cGRhdGVQcm9qZWN0TGlzdChQcm9qZWN0cyk7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdC1uYW1lXCIpLnZhbHVlID0gJyc7IC8vIENsZWFyIHRoZSBpbnB1dCB2YWx1ZSBhZnRlciBzdWJtaXNzaW9uXG5cbiAgICAgICAgLy8gUmVtb3ZlIHRoZSBldmVudCBsaXN0ZW5lciBmb3IgdGhlIGZvcm0gc3VibWlzc2lvblxuICAgICAgICBhZGRQcm9qZWN0Rm9ybS5yZW1vdmVFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIHN1Ym1pdEhhbmRsZXIpO1xuXG4gICAgICAgIGFkZFByb2plY3RUb1BhZ2VCdG4oUHJvamVjdHMpO1xuICAgICAgICB1cGRhdGVNb2RhbE9wdGlvbnMoUHJvamVjdHMpO1xuICAgICAgICBjbG9zZU1vZGFsKCk7XG4gICAgfTtcblxuICAgIGFkZFByb2plY3RGb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgc3VibWl0SGFuZGxlcik7XG5cbiAgICAvLyBBdHRhY2ggZXZlbnQgbGlzdGVuZXJzIHRvIG9wZW4gYW5kIGNsb3NlIHRoZSBtb2RhbFxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkUHJvakJ0blwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgb3Blbk1vZGFsKTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNsb3NlUHJvamVjdE1vZGFsXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjbG9zZU1vZGFsKTtcblxuICAgIC8vIENsb3NlIHRoZSBtb2RhbCBpZiB0aGUgdXNlciBjbGlja3Mgb3V0c2lkZSBvZiBpdFxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIHZhciBtb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibXlQcm9qZWN0TW9kYWxcIik7XG4gICAgICAgIGlmIChldmVudC50YXJnZXQgPT0gbW9kYWwpIHtcbiAgICAgICAgICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgIGFkZFByb2plY3RGb3JtLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgc3VibWl0SGFuZGxlcik7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIEluaXRpYWxseSwgaGlkZSB0aGUgbW9kYWwgd2hlbiB0aGUgcGFnZSBsb2Fkc1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNsb3NlTW9kYWwoKTtcbiAgICB9KTtcblxuICAgIC8vIEZ1bmN0aW9uIHRvIG9wZW4gdGhlIG1vZGFsXG4gICAgZnVuY3Rpb24gb3Blbk1vZGFsKCkge1xuICAgICAgICB2YXIgbW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm15UHJvamVjdE1vZGFsXCIpO1xuICAgICAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gICAgfVxuXG4gICAgLy8gRnVuY3Rpb24gdG8gY2xvc2UgdGhlIG1vZGFsXG4gICAgZnVuY3Rpb24gY2xvc2VNb2RhbCgpIHtcbiAgICAgICAgdmFyIG1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJteVByb2plY3RNb2RhbFwiKTtcbiAgICAgICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICBhZGRQcm9qZWN0Rm9ybS5yZW1vdmVFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIHN1Ym1pdEhhbmRsZXIpO1xuICAgIH1cbn1cblxuLy8gRGVmYXVsdC9EZW1vIFByb2plY3RzXG5leHBvcnQgZnVuY3Rpb24gbG9hZERlZmF1bHRQcm9qZWN0cyhQcm9qZWN0cykge1xuICAgIC8vIERlZmF1bHQgUHJvamVjdHNcbiAgICBsZXQgUGVyc29uYWwgPSBQcm9qZWN0KFwiUGVyc29uYWxcIik7XG4gICAgbGV0IHRlc3RUb0RvID0gVG9kbyhcIkRvIDMwIG1pbnV0ZXMgb2YgeW9nYSDwn6eYXCIsIFBlcnNvbmFsLCBcIkZpbmQgYW4gaW5zdHJ1Y3RvciBvbmxpbmUgYW5kIHN0aWNrIHdpdGggaXQhXCIsIDUsIFwiQ29tcGxldGVkXCIsIDExMTEsIDIyMik7XG4gICAgbGV0IHRlc3RUb0RvMiA9IFRvZG8oXCJEZW50aXN0IGFwcG9pbnRtZW50XCIsIFBlcnNvbmFsLCBcIkRvbid0IGZvcmdldCB0byBicnVzaCB5b3VyIHRlZXRoIVwiLCA5LCBcIlRvIGRvXCIsIDExMTEsIDIyMik7XG4gICAgbGV0IHRlc3RUb0RvMyA9IFRvZG8oXCJCdXkgYnJlYWQg8J+NnlwiLCBQZXJzb25hbCwgJycsIDUsIFwiVG8gZG9cIiwgMTExMSwgMjIyKTtcbiAgICBhZGRUb0RvKFBlcnNvbmFsLCB0ZXN0VG9Ebyk7XG4gICAgYWRkVG9EbyhQZXJzb25hbCwgdGVzdFRvRG8yKTtcbiAgICBhZGRUb0RvKFBlcnNvbmFsLCB0ZXN0VG9EbzMpO1xuICAgIGFkZFByb2plY3QoUHJvamVjdHMsIFBlcnNvbmFsKTtcbiAgICB1cGRhdGVQcm9qZWN0TGlzdChQcm9qZWN0cyk7XG5cbiAgICBsZXQgV29yayA9IFByb2plY3QoXCJXb3JrXCIpO1xuICAgIGxldCB0ZXN0VG9EbzQgPSBUb2RvKFwiUGxhbiB1c2VyIHJlc2VhcmNoIHNlc3Npb25zXCIsIFBlcnNvbmFsLCAnJywgNSwgXCJDb21wbGV0ZWRcIiwgMTExMSwgMjIyKTtcbiAgICBsZXQgdGVzdFRvRG81ID0gVG9kbyhcIlByb3ZpZGUgZmVlZGJhY2sgb24gQW15J3MgZGVzaWduXCIsIFBlcnNvbmFsLCAnJywgOSwgXCJUbyBkb1wiLCAxMTExLCAyMjIpO1xuICAgIGxldCB0ZXN0VG9EbzYgPSBUb2RvKFwiQWZ0ZXJub29uIG1lZXRpbmdcIiwgUGVyc29uYWwsICcnLCA1LCBcIlRvIGRvXCIsIDExMTEsIDIyMik7XG4gICAgbGV0IHRlc3RUb0RvNyA9IFRvZG8oXCJIYW5kIGluIHJlcG9ydFwiLCBQZXJzb25hbCwgJ0RvbnQgZm9yZ2V0IHRvIGRvdWJsZSBjaGVjayBmb3IgdHlwb3MnLCA1LCBcIlRvIGRvXCIsIDExMTEsIDIyMik7XG4gICAgYWRkVG9EbyhXb3JrLCB0ZXN0VG9EbzQpO1xuICAgIGFkZFRvRG8oV29yaywgdGVzdFRvRG81KTtcbiAgICBhZGRUb0RvKFdvcmssIHRlc3RUb0RvNik7XG4gICAgYWRkVG9EbyhXb3JrLCB0ZXN0VG9EbzcpO1xuICAgIGFkZFByb2plY3QoUHJvamVjdHMsIFdvcmspO1xuICAgIHVwZGF0ZVByb2plY3RMaXN0KFByb2plY3RzKTtcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
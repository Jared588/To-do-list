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
    main.innerHTML = '';

    for (let todo of project.todos) {
        let contentDiv = document.createElement("div");

        // All individual elements that make up the todo
        let contentTitle = document.createElement("h1");
        contentTitle.innerText = todo.title;
        contentDiv.appendChild(contentTitle);

        let contentDescription = document.createElement("p");
        contentDescription.innerText = todo.description;
        contentDiv.appendChild(contentDescription);

        let contentPriority = document.createElement("p");
        contentPriority.innerText = todo.priority;
        contentDiv.appendChild(contentPriority);

        let contentStatus = document.createElement("p");
        contentStatus.innerText = todo.status;
        contentDiv.appendChild(contentStatus);

        let contentDate = document.createElement("p");
        contentDate.innerText = todo.date;
        contentDiv.appendChild(contentDate);

        let contentTime = document.createElement("p");
        contentTime.innerText = todo.time;
        contentDiv.appendChild(contentTime);

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

function loadDefaultProjects(Projects) {
    // Default Projects
    let Personal = Project("Personal");
    let testToDo = (0,_todo__WEBPACK_IMPORTED_MODULE_0__["default"])("personal stuff", Personal, "bla bla bla,", 2, "busy", 1111, 222);
    (0,_todo__WEBPACK_IMPORTED_MODULE_0__.addToDo)(Personal, testToDo);
    addProject(Projects, Personal);
    updateProjectList(Projects);

    let Work = Project("Work");
    let anotherToDo = (0,_todo__WEBPACK_IMPORTED_MODULE_0__["default"])("work stuff", Personal, "bla bla bla,", 2, "busy", 1111, 222);
    (0,_todo__WEBPACK_IMPORTED_MODULE_0__.addToDo)(Work, anotherToDo);
    addProject(Projects, Work);
    updateProjectList(Projects);
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
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvamVjdC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUEwQjtBQUNPO0FBQ1U7O0FBRTVCO0FBQ2Y7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNEJBQTRCOztBQUU1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLHdCQUF3QixpREFBSTtBQUM1QixRQUFRLDhDQUFPO0FBQ2Y7QUFDQSxRQUFRLHdEQUFpQjtBQUN6QjtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3pFZTtBQUNmLFlBQVk7QUFDWjs7QUFFTztBQUNQO0FBQ0E7O0FBRU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7O1VDN0NBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ04wQjtBQUNPO0FBQ1c7QUFDRDs7QUFFNUI7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTs7QUFFTztBQUNQOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbURBQW1ELHdEQUFpQjtBQUNwRTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0EsbUJBQW1CLGlEQUFJO0FBQ3ZCLElBQUksOENBQU87QUFDWDtBQUNBOztBQUVBO0FBQ0Esc0JBQXNCLGlEQUFJO0FBQzFCLElBQUksOENBQU87QUFDWDtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0Qjs7QUFFNUI7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNERBQTREOztBQUU1RDtBQUNBOztBQUVBO0FBQ0EsUUFBUSx5REFBa0I7QUFDMUI7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9mb3JtLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvdG9kby5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9wcm9qZWN0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUb2RvIGZyb20gXCIuL3RvZG9cIjtcbmltcG9ydCB7IGFkZFRvRG8gfSBmcm9tIFwiLi90b2RvXCI7XG5pbXBvcnQgeyBpbml0aWFsaXplQ29udGVudCB9IGZyb20gXCIuL3RvZG9cIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY2FsaWJyYXRlRm9ybShQcm9qZWN0cykge1xuICAgIC8vIFVwZGF0ZSBtb2RhbCB0byBkaXNwbGF5IHByb2plY3Qgb3B0aW9uc1xuICAgIHVwZGF0ZU1vZGFsT3B0aW9ucyhQcm9qZWN0cyk7XG5cbiAgICAvLyBIYW5kbGUgZm9ybSBzdWJtaXNzaW9uXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGRUb0RvXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpOyAvLyBQcmV2ZW50IHRoZSBkZWZhdWx0IGZvcm0gc3VibWlzc2lvbiBiZWhhdmlvclxuXG4gICAgICAgIGNvbnN0IHRvZG9OYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0aXRsZVwiKS52YWx1ZTtcbiAgICAgICAgY29uc3QgdG9kb1Byb2plY3ROYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtb2RhbC1wcm9qZWN0LWxpc3RcIikudmFsdWU7XG4gICAgICAgIGNvbnN0IHRvZG9EZXNjcmlwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGVzY3JpcHRpb25cIikudmFsdWU7XG4gICAgICAgIGNvbnN0IHRvZG9Qcmlvcml0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJpb3JpdHlcIikudmFsdWU7XG4gICAgICAgIGNvbnN0IHRvZG9TdGF0dXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN0YXR1c1wiKS52YWx1ZTtcbiAgICAgICAgY29uc3QgdG9kb0RhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRhdGVcIikudmFsdWU7XG4gICAgICAgIGNvbnN0IHRvZG9UaW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0aW1lXCIpLnZhbHVlO1xuXG4gICAgICAgIC8vIEZpbmQgdGhlIGFjdHVhbCBQcm9qZWN0XG4gICAgICAgIGNvbnN0IHRvZG9Qcm9qZWN0ID0gUHJvamVjdHMuZmluZChwcm9qZWN0ID0+IHByb2plY3QubmFtZSA9PT0gdG9kb1Byb2plY3ROYW1lKTtcblxuICAgICAgICBjb25zdCBuZXdUb2RvID0gVG9kbyh0b2RvTmFtZSwgdG9kb1Byb2plY3QsIHRvZG9EZXNjcmlwdGlvbiwgdG9kb1ByaW9yaXR5LCB0b2RvU3RhdHVzLCB0b2RvRGF0ZSwgdG9kb1RpbWUpO1xuICAgICAgICBhZGRUb0RvKHRvZG9Qcm9qZWN0LCBuZXdUb2RvKTtcbiAgICAgICAgXG4gICAgICAgIGluaXRpYWxpemVDb250ZW50KHRvZG9Qcm9qZWN0TmFtZSwgUHJvamVjdHMpO1xuICAgICAgICBjbG9zZU1vZGFsKCk7XG4gICAgfSk7XG5cbiAgICAvLyBBdHRhY2ggZXZlbnQgbGlzdGVuZXJzIHRvIG9wZW4gYW5kIGNsb3NlIHRoZSBtb2RhbFxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkQnRuXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBvcGVuTW9kYWwpO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2xvc2VNb2RhbFwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2xvc2VNb2RhbCk7XG5cbiAgICAvLyBDbG9zZSB0aGUgbW9kYWwgaWYgdGhlIHVzZXIgY2xpY2tzIG91dHNpZGUgb2YgaXRcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgIHZhciBtb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibXlNb2RhbFwiKTtcbiAgICAgICAgaWYgKGV2ZW50LnRhcmdldCA9PSBtb2RhbCkge1xuICAgICAgICAgICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyBJbml0aWFsbHksIGhpZGUgdGhlIG1vZGFsIHdoZW4gdGhlIHBhZ2UgbG9hZHNcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgIGNsb3NlTW9kYWwoKTtcbiAgICB9KTtcbn1cblxuLy8gRnVuY3Rpb24gdG8gb3BlbiB0aGUgbW9kYWxcbmZ1bmN0aW9uIG9wZW5Nb2RhbCgpIHtcbiAgICB2YXIgbW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm15TW9kYWxcIik7XG4gICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xufVxuXG4vLyBGdW5jdGlvbiB0byBjbG9zZSB0aGUgbW9kYWxcbmZ1bmN0aW9uIGNsb3NlTW9kYWwoKSB7XG4gICAgdmFyIG1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJteU1vZGFsXCIpO1xuICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZU1vZGFsT3B0aW9ucyhQcm9qZWN0cykge1xuICAgIC8vIEFkZCBhdmFpbGFibGUgUHJvamVjdHMgdG8gdGhlIG1vZGFsXG4gICAgbGV0IG1vZGFsUHJvamVjdExpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1vZGFsLXByb2plY3QtbGlzdFwiKTtcblxuICAgIC8vIENsZWFyIHRoZSBleGlzdGluZyBsaXN0XG4gICAgbW9kYWxQcm9qZWN0TGlzdC5pbm5lckhUTUwgPSBcIlwiO1xuXG4gICAgZm9yIChsZXQgcHJvamVjdCBvZiBQcm9qZWN0cykge1xuICAgICAgICBsZXQgcHJvamVjdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgICAgIHByb2plY3REaXYudGV4dENvbnRlbnQgPSBwcm9qZWN0Lm5hbWU7XG4gICAgICAgIHByb2plY3REaXYudmFsdWUgPSBwcm9qZWN0Lm5hbWU7XG4gICAgICAgIG1vZGFsUHJvamVjdExpc3QuYXBwZW5kQ2hpbGQocHJvamVjdERpdik7XG4gICAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRvZG8odGl0bGUsIHByb2plY3QsIGRlc2NyaXB0aW9uLCBwcmlvcml0eSwgc3RhdHVzLCBkYXRlLCB0aW1lKSB7XG4gICAgcmV0dXJuIHt0aXRsZSwgcHJvamVjdCwgZGVzY3JpcHRpb24sIHByaW9yaXR5LCBzdGF0dXMsIGRhdGUsIHRpbWV9O1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGFkZFRvRG8ocHJvamVjdCwgdG9kbykge1xuICAgIHByb2plY3QudG9kb3MucHVzaCh0b2RvKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGluaXRpYWxpemVDb250ZW50KFByb2plY3QsIFByb2plY3RzKSB7XG4gICAgbGV0IHByb2plY3QgPSBQcm9qZWN0cy5maW5kKHByb2plY3QgPT4gcHJvamVjdC5uYW1lID09PSBQcm9qZWN0KTtcbiAgICBjb25zb2xlLmxvZyhwcm9qZWN0LnRvZG9zWzBdKTtcblxuICAgIGxldCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xuICAgIG1haW4uaW5uZXJIVE1MID0gJyc7XG5cbiAgICBmb3IgKGxldCB0b2RvIG9mIHByb2plY3QudG9kb3MpIHtcbiAgICAgICAgbGV0IGNvbnRlbnREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gICAgICAgIC8vIEFsbCBpbmRpdmlkdWFsIGVsZW1lbnRzIHRoYXQgbWFrZSB1cCB0aGUgdG9kb1xuICAgICAgICBsZXQgY29udGVudFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICAgICAgICBjb250ZW50VGl0bGUuaW5uZXJUZXh0ID0gdG9kby50aXRsZTtcbiAgICAgICAgY29udGVudERpdi5hcHBlbmRDaGlsZChjb250ZW50VGl0bGUpO1xuXG4gICAgICAgIGxldCBjb250ZW50RGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgICAgY29udGVudERlc2NyaXB0aW9uLmlubmVyVGV4dCA9IHRvZG8uZGVzY3JpcHRpb247XG4gICAgICAgIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQoY29udGVudERlc2NyaXB0aW9uKTtcblxuICAgICAgICBsZXQgY29udGVudFByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICAgIGNvbnRlbnRQcmlvcml0eS5pbm5lclRleHQgPSB0b2RvLnByaW9yaXR5O1xuICAgICAgICBjb250ZW50RGl2LmFwcGVuZENoaWxkKGNvbnRlbnRQcmlvcml0eSk7XG5cbiAgICAgICAgbGV0IGNvbnRlbnRTdGF0dXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgICAgY29udGVudFN0YXR1cy5pbm5lclRleHQgPSB0b2RvLnN0YXR1cztcbiAgICAgICAgY29udGVudERpdi5hcHBlbmRDaGlsZChjb250ZW50U3RhdHVzKTtcblxuICAgICAgICBsZXQgY29udGVudERhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgICAgY29udGVudERhdGUuaW5uZXJUZXh0ID0gdG9kby5kYXRlO1xuICAgICAgICBjb250ZW50RGl2LmFwcGVuZENoaWxkKGNvbnRlbnREYXRlKTtcblxuICAgICAgICBsZXQgY29udGVudFRpbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgICAgY29udGVudFRpbWUuaW5uZXJUZXh0ID0gdG9kby50aW1lO1xuICAgICAgICBjb250ZW50RGl2LmFwcGVuZENoaWxkKGNvbnRlbnRUaW1lKTtcblxuICAgICAgICBtYWluLmFwcGVuZENoaWxkKGNvbnRlbnREaXYpO1xuICAgIH1cbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBUb2RvIGZyb20gXCIuL3RvZG9cIjtcbmltcG9ydCB7IGFkZFRvRG8gfSBmcm9tIFwiLi90b2RvXCI7XG5pbXBvcnQgeyB1cGRhdGVNb2RhbE9wdGlvbnMgfSBmcm9tIFwiLi9mb3JtXCI7XG5pbXBvcnQgeyBpbml0aWFsaXplQ29udGVudCB9IGZyb20gXCIuL3RvZG9cIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvamVjdChuYW1lKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgbmFtZSxcbiAgICAgICAgdG9kb3M6IFtdLFxuICAgIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRQcm9qZWN0KHByb2plY3RMaXN0LCBwcm9qZWN0KSB7XG4gICAgcHJvamVjdExpc3QucHVzaChwcm9qZWN0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZVByb2plY3RMaXN0KFByb2plY3RzKSB7XG4gICAgbGV0IHByb2plY3RMaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0LWxpc3RcIik7XG5cbiAgICAvLyBDbGVhciB0aGUgZXhpc3RpbmcgbGlzdFxuICAgIHByb2plY3RMaXN0LmlubmVySFRNTCA9IFwiXCI7XG5cbiAgICAvLyBBcHBlbmQgdGhlIHVwZGF0ZWQgbGlzdCB0byB0aGUgd2VicGFnZVxuICAgIGZvciAobGV0IHByb2plY3Qgb2YgUHJvamVjdHMpIHtcbiAgICAgICAgbGV0IHByb2plY3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG4gICAgICAgIHByb2plY3REaXYuY2xhc3NMaXN0LmFkZChcInByb2plY3RcIik7XG4gICAgICAgIHByb2plY3REaXYudGV4dENvbnRlbnQgPSBwcm9qZWN0Lm5hbWU7XG4gICAgICAgIHByb2plY3REaXYuaWQgPSBwcm9qZWN0Lm5hbWUudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgcHJvamVjdERpdi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gaW5pdGlhbGl6ZUNvbnRlbnQocHJvamVjdC5uYW1lLCBQcm9qZWN0cykpO1xuICAgICAgICBwcm9qZWN0TGlzdC5hcHBlbmRDaGlsZChwcm9qZWN0RGl2KTtcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2FkRGVmYXVsdFByb2plY3RzKFByb2plY3RzKSB7XG4gICAgLy8gRGVmYXVsdCBQcm9qZWN0c1xuICAgIGxldCBQZXJzb25hbCA9IFByb2plY3QoXCJQZXJzb25hbFwiKTtcbiAgICBsZXQgdGVzdFRvRG8gPSBUb2RvKFwicGVyc29uYWwgc3R1ZmZcIiwgUGVyc29uYWwsIFwiYmxhIGJsYSBibGEsXCIsIDIsIFwiYnVzeVwiLCAxMTExLCAyMjIpO1xuICAgIGFkZFRvRG8oUGVyc29uYWwsIHRlc3RUb0RvKTtcbiAgICBhZGRQcm9qZWN0KFByb2plY3RzLCBQZXJzb25hbCk7XG4gICAgdXBkYXRlUHJvamVjdExpc3QoUHJvamVjdHMpO1xuXG4gICAgbGV0IFdvcmsgPSBQcm9qZWN0KFwiV29ya1wiKTtcbiAgICBsZXQgYW5vdGhlclRvRG8gPSBUb2RvKFwid29yayBzdHVmZlwiLCBQZXJzb25hbCwgXCJibGEgYmxhIGJsYSxcIiwgMiwgXCJidXN5XCIsIDExMTEsIDIyMik7XG4gICAgYWRkVG9EbyhXb3JrLCBhbm90aGVyVG9Ebyk7XG4gICAgYWRkUHJvamVjdChQcm9qZWN0cywgV29yayk7XG4gICAgdXBkYXRlUHJvamVjdExpc3QoUHJvamVjdHMpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkUHJvamVjdFRvUGFnZUJ0bihQcm9qZWN0cykge1xuICAgIGxldCBwcm9qZWN0TGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdC1saXN0XCIpOyAgIFxuICAgIGxldCBhZGRQcm9qQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBcbiAgICBhZGRQcm9qQnRuLmlubmVyVGV4dCA9IFwiKyBhZGQgcHJvamVjdFwiO1xuICAgIGFkZFByb2pCdG4uaWQgPSBcImFkZFByb2pCdG5cIlxuICAgIGFkZFByb2pCdG4uY2xhc3NMaXN0LmFkZChcImFkZC1wcm9qZWN0LWJ1dHRvblwiKTsgXG4gICAgYWRkUHJvakJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gT3BlblByb2plY3RNb2RhbChQcm9qZWN0cykpOyBcbiAgICBwcm9qZWN0TGlzdC5hcHBlbmRDaGlsZChhZGRQcm9qQnRuKTtcbn1cblxuZnVuY3Rpb24gT3BlblByb2plY3RNb2RhbChQcm9qZWN0cykge1xuICAgIG9wZW5Nb2RhbCgpO1xuICAgIC8vIEhhbmRsZSBmb3JtIHN1Ym1pc3Npb25cbiAgICBjb25zdCBhZGRQcm9qZWN0Rm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkUHJvamVjdFwiKTtcbiAgICBjb25zdCBzdWJtaXRIYW5kbGVyID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpOyAvLyBQcmV2ZW50IHRoZSBkZWZhdWx0IGZvcm0gc3VibWlzc2lvbiBiZWhhdmlvclxuXG4gICAgICAgIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3QtbmFtZVwiKS52YWx1ZTtcbiAgICAgICAgbGV0IG5ld1Byb2plY3QgPSBQcm9qZWN0KG5hbWUpO1xuXG4gICAgICAgIGFkZFByb2plY3QoUHJvamVjdHMsIG5ld1Byb2plY3QpO1xuICAgICAgICB1cGRhdGVQcm9qZWN0TGlzdChQcm9qZWN0cyk7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdC1uYW1lXCIpLnZhbHVlID0gJyc7IC8vIENsZWFyIHRoZSBpbnB1dCB2YWx1ZSBhZnRlciBzdWJtaXNzaW9uXG5cbiAgICAgICAgLy8gUmVtb3ZlIHRoZSBldmVudCBsaXN0ZW5lciBmb3IgdGhlIGZvcm0gc3VibWlzc2lvblxuICAgICAgICBhZGRQcm9qZWN0Rm9ybS5yZW1vdmVFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIHN1Ym1pdEhhbmRsZXIpO1xuXG4gICAgICAgIGFkZFByb2plY3RUb1BhZ2VCdG4oUHJvamVjdHMpO1xuICAgICAgICB1cGRhdGVNb2RhbE9wdGlvbnMoUHJvamVjdHMpO1xuICAgICAgICBjbG9zZU1vZGFsKCk7XG4gICAgfTtcblxuICAgIGFkZFByb2plY3RGb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgc3VibWl0SGFuZGxlcik7XG5cbiAgICAvLyBBdHRhY2ggZXZlbnQgbGlzdGVuZXJzIHRvIG9wZW4gYW5kIGNsb3NlIHRoZSBtb2RhbFxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkUHJvakJ0blwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgb3Blbk1vZGFsKTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNsb3NlUHJvamVjdE1vZGFsXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjbG9zZU1vZGFsKTtcblxuICAgIC8vIENsb3NlIHRoZSBtb2RhbCBpZiB0aGUgdXNlciBjbGlja3Mgb3V0c2lkZSBvZiBpdFxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIHZhciBtb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibXlQcm9qZWN0TW9kYWxcIik7XG4gICAgICAgIGlmIChldmVudC50YXJnZXQgPT0gbW9kYWwpIHtcbiAgICAgICAgICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgIGFkZFByb2plY3RGb3JtLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgc3VibWl0SGFuZGxlcik7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIEluaXRpYWxseSwgaGlkZSB0aGUgbW9kYWwgd2hlbiB0aGUgcGFnZSBsb2Fkc1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNsb3NlTW9kYWwoKTtcbiAgICB9KTtcblxuICAgIC8vIEZ1bmN0aW9uIHRvIG9wZW4gdGhlIG1vZGFsXG4gICAgZnVuY3Rpb24gb3Blbk1vZGFsKCkge1xuICAgICAgICB2YXIgbW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm15UHJvamVjdE1vZGFsXCIpO1xuICAgICAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gICAgfVxuXG4gICAgLy8gRnVuY3Rpb24gdG8gY2xvc2UgdGhlIG1vZGFsXG4gICAgZnVuY3Rpb24gY2xvc2VNb2RhbCgpIHtcbiAgICAgICAgdmFyIG1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJteVByb2plY3RNb2RhbFwiKTtcbiAgICAgICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICBhZGRQcm9qZWN0Rm9ybS5yZW1vdmVFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIHN1Ym1pdEhhbmRsZXIpO1xuICAgIH1cbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
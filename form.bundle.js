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
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project */ "./src/project.js");




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
        
        (0,_project__WEBPACK_IMPORTED_MODULE_1__.updateProjectList)(Projects); // Might be unneccesary
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

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ }),

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/form.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBMEI7QUFDTztBQUNhOztBQUUvQjtBQUNmO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDRCQUE0Qjs7QUFFNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSx3QkFBd0IsaURBQUk7QUFDNUIsUUFBUSw4Q0FBTztBQUNmO0FBQ0EsUUFBUSwyREFBaUIsWUFBWTtBQUNyQztBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6RTBCO0FBQ087QUFDVzs7QUFFN0I7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTs7QUFFTztBQUNQOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBLG1CQUFtQixpREFBSTtBQUN2QixJQUFJLDhDQUFPO0FBQ1g7QUFDQTs7QUFFQTtBQUNBLHNCQUFzQixpREFBSTtBQUMxQixJQUFJLDhDQUFPO0FBQ1g7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEI7O0FBRTVCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDREQUE0RDs7QUFFNUQ7QUFDQTs7QUFFQTtBQUNBLFFBQVEseURBQWtCO0FBQzFCO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQy9HZTtBQUNmLFlBQVk7QUFDWjs7QUFFTztBQUNQO0FBQ0E7Ozs7OztVQ05BO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztVRU5BO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9mb3JtLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3RvZG8uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVG9kbyBmcm9tIFwiLi90b2RvXCI7XG5pbXBvcnQgeyBhZGRUb0RvIH0gZnJvbSBcIi4vdG9kb1wiO1xuaW1wb3J0IHsgdXBkYXRlUHJvamVjdExpc3QgfSBmcm9tIFwiLi9wcm9qZWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNhbGlicmF0ZUZvcm0oUHJvamVjdHMpIHtcbiAgICAvLyBVcGRhdGUgbW9kYWwgdG8gZGlzcGxheSBwcm9qZWN0IG9wdGlvbnNcbiAgICB1cGRhdGVNb2RhbE9wdGlvbnMoUHJvamVjdHMpO1xuXG4gICAgLy8gSGFuZGxlIGZvcm0gc3VibWlzc2lvblxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkVG9Eb1wiKS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTsgLy8gUHJldmVudCB0aGUgZGVmYXVsdCBmb3JtIHN1Ym1pc3Npb24gYmVoYXZpb3JcblxuICAgICAgICBjb25zdCB0b2RvTmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGl0bGVcIikudmFsdWU7XG4gICAgICAgIGNvbnN0IHRvZG9Qcm9qZWN0TmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibW9kYWwtcHJvamVjdC1saXN0XCIpLnZhbHVlO1xuICAgICAgICBjb25zdCB0b2RvRGVzY3JpcHRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRlc2NyaXB0aW9uXCIpLnZhbHVlO1xuICAgICAgICBjb25zdCB0b2RvUHJpb3JpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByaW9yaXR5XCIpLnZhbHVlO1xuICAgICAgICBjb25zdCB0b2RvU3RhdHVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdGF0dXNcIikudmFsdWU7XG4gICAgICAgIGNvbnN0IHRvZG9EYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkYXRlXCIpLnZhbHVlO1xuICAgICAgICBjb25zdCB0b2RvVGltZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGltZVwiKS52YWx1ZTtcblxuICAgICAgICAvLyBGaW5kIHRoZSBhY3R1YWwgUHJvamVjdFxuICAgICAgICBjb25zdCB0b2RvUHJvamVjdCA9IFByb2plY3RzLmZpbmQocHJvamVjdCA9PiBwcm9qZWN0Lm5hbWUgPT09IHRvZG9Qcm9qZWN0TmFtZSk7XG5cbiAgICAgICAgY29uc3QgbmV3VG9kbyA9IFRvZG8odG9kb05hbWUsIHRvZG9Qcm9qZWN0LCB0b2RvRGVzY3JpcHRpb24sIHRvZG9Qcmlvcml0eSwgdG9kb1N0YXR1cywgdG9kb0RhdGUsIHRvZG9UaW1lKTtcbiAgICAgICAgYWRkVG9Ebyh0b2RvUHJvamVjdCwgbmV3VG9kbyk7XG4gICAgICAgIFxuICAgICAgICB1cGRhdGVQcm9qZWN0TGlzdChQcm9qZWN0cyk7IC8vIE1pZ2h0IGJlIHVubmVjY2VzYXJ5XG4gICAgICAgIGNsb3NlTW9kYWwoKTtcbiAgICB9KTtcblxuICAgIC8vIEF0dGFjaCBldmVudCBsaXN0ZW5lcnMgdG8gb3BlbiBhbmQgY2xvc2UgdGhlIG1vZGFsXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGRCdG5cIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIG9wZW5Nb2RhbCk7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjbG9zZU1vZGFsXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjbG9zZU1vZGFsKTtcblxuICAgIC8vIENsb3NlIHRoZSBtb2RhbCBpZiB0aGUgdXNlciBjbGlja3Mgb3V0c2lkZSBvZiBpdFxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgdmFyIG1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJteU1vZGFsXCIpO1xuICAgICAgICBpZiAoZXZlbnQudGFyZ2V0ID09IG1vZGFsKSB7XG4gICAgICAgICAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIEluaXRpYWxseSwgaGlkZSB0aGUgbW9kYWwgd2hlbiB0aGUgcGFnZSBsb2Fkc1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgY2xvc2VNb2RhbCgpO1xuICAgIH0pO1xufVxuXG4vLyBGdW5jdGlvbiB0byBvcGVuIHRoZSBtb2RhbFxuZnVuY3Rpb24gb3Blbk1vZGFsKCkge1xuICAgIHZhciBtb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibXlNb2RhbFwiKTtcbiAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG59XG5cbi8vIEZ1bmN0aW9uIHRvIGNsb3NlIHRoZSBtb2RhbFxuZnVuY3Rpb24gY2xvc2VNb2RhbCgpIHtcbiAgICB2YXIgbW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm15TW9kYWxcIik7XG4gICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlTW9kYWxPcHRpb25zKFByb2plY3RzKSB7XG4gICAgLy8gQWRkIGF2YWlsYWJsZSBQcm9qZWN0cyB0byB0aGUgbW9kYWxcbiAgICBsZXQgbW9kYWxQcm9qZWN0TGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibW9kYWwtcHJvamVjdC1saXN0XCIpO1xuXG4gICAgLy8gQ2xlYXIgdGhlIGV4aXN0aW5nIGxpc3RcbiAgICBtb2RhbFByb2plY3RMaXN0LmlubmVySFRNTCA9IFwiXCI7XG5cbiAgICBmb3IgKGxldCBwcm9qZWN0IG9mIFByb2plY3RzKSB7XG4gICAgICAgIGxldCBwcm9qZWN0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICAgICAgcHJvamVjdERpdi50ZXh0Q29udGVudCA9IHByb2plY3QubmFtZTtcbiAgICAgICAgcHJvamVjdERpdi52YWx1ZSA9IHByb2plY3QubmFtZTtcbiAgICAgICAgbW9kYWxQcm9qZWN0TGlzdC5hcHBlbmRDaGlsZChwcm9qZWN0RGl2KTtcbiAgICB9XG59IiwiaW1wb3J0IFRvZG8gZnJvbSBcIi4vdG9kb1wiO1xuaW1wb3J0IHsgYWRkVG9EbyB9IGZyb20gXCIuL3RvZG9cIjtcbmltcG9ydCB7IHVwZGF0ZU1vZGFsT3B0aW9ucyB9IGZyb20gXCIuL2Zvcm1cIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvamVjdChuYW1lKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgbmFtZSxcbiAgICAgICAgdG9kb3M6IFtdLFxuICAgIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRQcm9qZWN0KHByb2plY3RMaXN0LCBwcm9qZWN0KSB7XG4gICAgcHJvamVjdExpc3QucHVzaChwcm9qZWN0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZVByb2plY3RMaXN0KFByb2plY3RzKSB7XG4gICAgbGV0IHByb2plY3RMaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0LWxpc3RcIik7XG5cbiAgICAvLyBDbGVhciB0aGUgZXhpc3RpbmcgbGlzdFxuICAgIHByb2plY3RMaXN0LmlubmVySFRNTCA9IFwiXCI7XG5cbiAgICAvLyBBcHBlbmQgdGhlIHVwZGF0ZWQgbGlzdCB0byB0aGUgd2VicGFnZVxuICAgIGZvciAobGV0IHByb2plY3Qgb2YgUHJvamVjdHMpIHtcbiAgICAgICAgbGV0IHByb2plY3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG4gICAgICAgIHByb2plY3REaXYuY2xhc3NMaXN0LmFkZChcInByb2plY3RcIik7XG4gICAgICAgIHByb2plY3REaXYudGV4dENvbnRlbnQgPSBwcm9qZWN0Lm5hbWU7XG4gICAgICAgIHByb2plY3REaXYuaWQgPSBwcm9qZWN0Lm5hbWUudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgcHJvamVjdExpc3QuYXBwZW5kQ2hpbGQocHJvamVjdERpdik7XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gbG9hZERlZmF1bHRQcm9qZWN0cyhQcm9qZWN0cykge1xuICAgIC8vIERlZmF1bHQgUHJvamVjdHNcbiAgICBsZXQgUGVyc29uYWwgPSBQcm9qZWN0KFwiUGVyc29uYWxcIik7XG4gICAgbGV0IHRlc3RUb0RvID0gVG9kbyhcInNcIiwgUGVyc29uYWwsIFwiYmxhIGJsYSBibGEsXCIsIDIsIFwiYnVzeVwiLCAxMTExLCAyMjIpO1xuICAgIGFkZFRvRG8oUGVyc29uYWwsIHRlc3RUb0RvKTtcbiAgICBhZGRQcm9qZWN0KFByb2plY3RzLCBQZXJzb25hbCk7XG4gICAgdXBkYXRlUHJvamVjdExpc3QoUHJvamVjdHMpO1xuXG4gICAgbGV0IFdvcmsgPSBQcm9qZWN0KFwiV29ya1wiKTtcbiAgICBsZXQgYW5vdGhlclRvRG8gPSBUb2RvKFwic1wiLCBQZXJzb25hbCwgXCJibGEgYmxhIGJsYSxcIiwgMiwgXCJidXN5XCIsIDExMTEsIDIyMik7XG4gICAgYWRkVG9EbyhXb3JrLCBhbm90aGVyVG9Ebyk7XG4gICAgYWRkUHJvamVjdChQcm9qZWN0cywgV29yayk7XG4gICAgdXBkYXRlUHJvamVjdExpc3QoUHJvamVjdHMpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkUHJvamVjdFRvUGFnZUJ0bihQcm9qZWN0cykge1xuICAgIGxldCBwcm9qZWN0TGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdC1saXN0XCIpOyAgIFxuICAgIGxldCBhZGRQcm9qQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBcbiAgICBhZGRQcm9qQnRuLmlubmVyVGV4dCA9IFwiKyBhZGQgcHJvamVjdFwiO1xuICAgIGFkZFByb2pCdG4uaWQgPSBcImFkZFByb2pCdG5cIlxuICAgIGFkZFByb2pCdG4uY2xhc3NMaXN0LmFkZChcImFkZC1wcm9qZWN0LWJ1dHRvblwiKTsgXG4gICAgYWRkUHJvakJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gT3BlblByb2plY3RNb2RhbChQcm9qZWN0cykpOyBcbiAgICBwcm9qZWN0TGlzdC5hcHBlbmRDaGlsZChhZGRQcm9qQnRuKTtcbn1cblxuZnVuY3Rpb24gT3BlblByb2plY3RNb2RhbChQcm9qZWN0cykge1xuICAgIG9wZW5Nb2RhbCgpO1xuICAgIC8vIEhhbmRsZSBmb3JtIHN1Ym1pc3Npb25cbiAgICBjb25zdCBhZGRQcm9qZWN0Rm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkUHJvamVjdFwiKTtcbiAgICBjb25zdCBzdWJtaXRIYW5kbGVyID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpOyAvLyBQcmV2ZW50IHRoZSBkZWZhdWx0IGZvcm0gc3VibWlzc2lvbiBiZWhhdmlvclxuXG4gICAgICAgIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3QtbmFtZVwiKS52YWx1ZTtcbiAgICAgICAgbGV0IG5ld1Byb2plY3QgPSBQcm9qZWN0KG5hbWUpO1xuXG4gICAgICAgIGFkZFByb2plY3QoUHJvamVjdHMsIG5ld1Byb2plY3QpO1xuICAgICAgICB1cGRhdGVQcm9qZWN0TGlzdChQcm9qZWN0cyk7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdC1uYW1lXCIpLnZhbHVlID0gJyc7IC8vIENsZWFyIHRoZSBpbnB1dCB2YWx1ZSBhZnRlciBzdWJtaXNzaW9uXG5cbiAgICAgICAgLy8gUmVtb3ZlIHRoZSBldmVudCBsaXN0ZW5lciBmb3IgdGhlIGZvcm0gc3VibWlzc2lvblxuICAgICAgICBhZGRQcm9qZWN0Rm9ybS5yZW1vdmVFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIHN1Ym1pdEhhbmRsZXIpO1xuXG4gICAgICAgIGFkZFByb2plY3RUb1BhZ2VCdG4oUHJvamVjdHMpO1xuICAgICAgICB1cGRhdGVNb2RhbE9wdGlvbnMoUHJvamVjdHMpO1xuICAgICAgICBjbG9zZU1vZGFsKCk7XG4gICAgfTtcblxuICAgIGFkZFByb2plY3RGb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgc3VibWl0SGFuZGxlcik7XG5cbiAgICAvLyBBdHRhY2ggZXZlbnQgbGlzdGVuZXJzIHRvIG9wZW4gYW5kIGNsb3NlIHRoZSBtb2RhbFxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkUHJvakJ0blwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgb3Blbk1vZGFsKTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNsb3NlUHJvamVjdE1vZGFsXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjbG9zZU1vZGFsKTtcblxuICAgIC8vIENsb3NlIHRoZSBtb2RhbCBpZiB0aGUgdXNlciBjbGlja3Mgb3V0c2lkZSBvZiBpdFxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIHZhciBtb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibXlQcm9qZWN0TW9kYWxcIik7XG4gICAgICAgIGlmIChldmVudC50YXJnZXQgPT0gbW9kYWwpIHtcbiAgICAgICAgICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgIGFkZFByb2plY3RGb3JtLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgc3VibWl0SGFuZGxlcik7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIEluaXRpYWxseSwgaGlkZSB0aGUgbW9kYWwgd2hlbiB0aGUgcGFnZSBsb2Fkc1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNsb3NlTW9kYWwoKTtcbiAgICB9KTtcblxuICAgIC8vIEZ1bmN0aW9uIHRvIG9wZW4gdGhlIG1vZGFsXG4gICAgZnVuY3Rpb24gb3Blbk1vZGFsKCkge1xuICAgICAgICB2YXIgbW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm15UHJvamVjdE1vZGFsXCIpO1xuICAgICAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gICAgfVxuXG4gICAgLy8gRnVuY3Rpb24gdG8gY2xvc2UgdGhlIG1vZGFsXG4gICAgZnVuY3Rpb24gY2xvc2VNb2RhbCgpIHtcbiAgICAgICAgdmFyIG1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJteVByb2plY3RNb2RhbFwiKTtcbiAgICAgICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICBhZGRQcm9qZWN0Rm9ybS5yZW1vdmVFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIHN1Ym1pdEhhbmRsZXIpO1xuICAgIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUb2RvKHRpdGxlLCBwcm9qZWN0LCBkZXNjcmlwdGlvbiwgcHJpb3JpdHksIHN0YXR1cywgZGF0ZSwgdGltZSkge1xuICAgIHJldHVybiB7dGl0bGUsIHByb2plY3QsIGRlc2NyaXB0aW9uLCBwcmlvcml0eSwgc3RhdHVzLCBkYXRlLCB0aW1lfTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRUb0RvKHByb2plY3QsIHRvZG8pIHtcbiAgICBwcm9qZWN0LnRvZG9zLnB1c2godG9kbyk7XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9mb3JtLmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
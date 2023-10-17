import { Projects } from ".";
import editIcon from './icons/square-edit-outline.svg';
import deleteIcon from './icons/delete-outline.svg';

export default function Todo(title, project, description, priority, status, date, time) {
    return {title, project, description, priority, status, date, time};
};

export function addToDo(project, todo) {
    project.todos.push(todo);
}

export function initializeContent(Project, Projects) {
    let project = Projects.find(project => project.name === Project);

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
        let options = document.createElement("div");
        options.classList.add("todo-otions");

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
        contentDate.innerText = `${"📅" + todo.date}`;
        contentDate.id = "todo-date";
        stats.appendChild(contentDate);

        let contentTime = document.createElement("p");
        contentTime.innerText = `${"🕒" + todo.time}`;
        contentTime.id = "todo-time";
        stats.appendChild(contentTime);

        let contentPriority = document.createElement("p");
        contentPriority.innerText = `${"❗" + todo.priority}`;;
        stats.appendChild(contentPriority);

        let contentEdit = document.createElement('img');
        contentEdit.src = editIcon;
        contentEdit.classList.add("todo-options");
        contentEdit.addEventListener("click", () =>  openEditor(todo));
        options.appendChild(contentEdit);

        let contentDelete = document.createElement('img');
        contentDelete.src = deleteIcon;
        contentDelete.classList.add("todo-options");
        contentDelete.addEventListener("click", () => Delete(todo));
        options.appendChild(contentDelete);
        

        contentDiv.appendChild(checkbox);
        contentDiv.appendChild(info);
        contentDiv.appendChild(stats);
        contentDiv.appendChild(options);

        main.appendChild(contentDiv);
    }
}

export function hideEditorModal() {
    // Initially, hide the modal when the page loads
    window.addEventListener("DOMContentLoaded", function () {
        var modal = document.getElementById("editorModal");
        modal.style.display = "none";
    });
}

function openEditor(todo) {
    openModal();
    clearModal();
    fillForm();

    const closeEditorModalButton = document.getElementById("closeEditorModal");
    const editTodoForm = document.getElementById("edit-todo");

    // Close the modal if the user clicks outside of it
    window.addEventListener("click", closeModalOnClickOutside);
    
    function closeModalOnClickOutside(event) {
        var modal = document.getElementById("editorModal");
        if (event.target === modal) {
            closeModal();
            // Remove the event listener
            window.removeEventListener("click", closeModalOnClickOutside);
            editTodoForm.removeEventListener("submit", handleFormSubmission);
        }
    }

    // Function to open the modal
    function openModal() {
        var modal = document.getElementById("editorModal");
        modal.style.display = "flex";
    }

    // Function to close the modal
    function closeModal() {
        var modal = document.getElementById("editorModal");
        modal.style.display = "none";

        // Remove event listners
        window.removeEventListener("click", closeModalOnClickOutside);
        closeEditorModalButton.removeEventListener("click", closeModal);
        editTodoForm.removeEventListener("submit", handleFormSubmission);
    }

    // Fill the form with its specific information
    function fillForm() {
        let editTitle = document.querySelector("#edit-title");   
        editTitle.value = todo.title;
        let editDescription = document.querySelector("#edit-description");
        editDescription.value = todo.description;
        let editPriority = document.querySelector("#edit-priority");
        editPriority.value = todo.priority;

        let editStatus = document.querySelector("#edit-status");
        for (let option of editStatus.options) {
            option.removeAttribute("selected");
        }
        let formattedStatus;
        formattedStatus = todo.status;
        editStatus.querySelector(`[value="${formattedStatus}"]`).selected = true;

        let editDate = document.querySelector("#edit-date");
        editDate.value = todo.date;
        let editTime = document.querySelector("#edit-time");
        editTime.value = todo.time;
    }

    // Handle form submission
    function handleFormSubmission(e) {
        e.preventDefault(); // Prevent the default form submission behavior

        const newName = document.getElementById("edit-title").value;
        const newDescription = document.getElementById("edit-description").value;
        const newPriority = document.getElementById("edit-priority").value;
        const newStatus = document.getElementById("edit-status").value;
        const newDate = document.getElementById("edit-date").value;
        const newTime = document.getElementById("edit-time").value;

        // Find the old Todo
        const todoProjectName = todo.project.name;
        const project = Projects.find(project => project.name === todoProjectName);
        const oldTodo = project.todos.find(todoItem => todoItem.title === todo.title);
        
        // Update with new info
        oldTodo.title = newName;
        oldTodo.description = newDescription;
        oldTodo.priority = newPriority;
        oldTodo.status = newStatus;
        oldTodo.date = newDate;
        oldTodo.time = newTime;

        initializeContent(todoProjectName, Projects);
        closeModal();
    }

    // Remove previous event listeners
    closeEditorModalButton.removeEventListener("click", closeModal);
    editTodoForm.removeEventListener("submit", handleFormSubmission);

    // Add event listeners
    closeEditorModalButton.addEventListener("click", closeModal);
    editTodoForm.addEventListener("submit", handleFormSubmission);

    function clearModal() {
        const editTitle = document.querySelector("#edit-title");
        const editDescription = document.querySelector("#edit-description");
        const editPriority = document.querySelector("#edit-priority");
        const editStatus = document.querySelector("#edit-status");
        const editDate = document.querySelector("#edit-date");
        const editTime = document.querySelector("#edit-time");
    
        // Reset input values to empty strings
        editTitle.value = "";
        editDescription.value = "";
        editPriority.value = "";
        editDate.value = "";
        editTime.value = "";
    
        // Reset the status select element, assuming the default option has an empty value
        editStatus.value = "";
    }
}

function Delete(todo) {
    let projectName = todo.project.name;
    let project = Projects.find(project => project.name === projectName);
    const todoIndex = project.todos.findIndex(todoItem => todoItem.title === todo.title);
    project.todos.splice(todoIndex, 1);

    initializeContent(projectName, Projects);
}
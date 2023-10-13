import { updateModalOptions } from "./form";
import { Projects } from ".";

export default function Todo(title, project, description, priority, status, date, time) {
    return {title, project, description, priority, status, date, time};
};

export function addToDo(project, todo) {
    project.todos.push(todo);
}

export function initializeContent(Project, Projects) {
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
        contentEdit.src = '../src/icons/square-edit-outline.svg';
        contentEdit.classList.add("todo-options");
        contentEdit.addEventListener("click", () => openEditor(todo));
        options.appendChild(contentEdit);

        let contentDelete = document.createElement('img');
        contentDelete.src = '../src/icons/delete-outline.svg';
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
    console.log(todo.title);
    // Attach event listeners to open and close the modal
    document.getElementById("closeEditorModal").addEventListener("click", closeModal);

    // Close the modal if the user clicks outside of it
    window.addEventListener("click", function (event) {
        var modal = document.getElementById("editorModal");
        if (event.target == modal) {
            modal.style.display = "none";       
        }
    });

    // Function to open the modal
    function openModal() {
        var modal = document.getElementById("editorModal");
        modal.style.display = "flex";
    }

    // Function to close the modal
    function closeModal() {
        var modal = document.getElementById("editorModal");
        modal.style.display = "none";
    }

    // Fill the form with its specific information
    let editTitle = document.querySelector("#edit-title");   
    editTitle.value = todo.title;
    let editDescription = document.querySelector("#edit-description");
    editDescription.innerText = todo.description;
    let editPriority = document.querySelector("#edit-priority");
    editPriority.value = todo.priority;

    let editStatus = document.querySelector("#edit-status");
    for (let option of editStatus.options) {
        option.removeAttribute("selected");
    }
    let formattedStatus;
    if (todo.status === "To do") {
        formattedStatus = "todo"
    } else if (todo.status === "inProgress") {
        formattedStatus = "inProgress"
    } else if (todo.status === "Completed") {
        formattedStatus = "completed"
    }
    editStatus.querySelector(`[value="${formattedStatus}"]`).selected = true;

    let editDate = document.querySelector("#edit-date");
    editDate.value = todo.date;
    let editTime = document.querySelector("#edit-time");
    editTime.value = todo.time;

    // Handle form submission
    document.getElementById("edit-todo").addEventListener("submit", function (e) {
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
        const oldTodo = project.todos.find(todoItem => todoItem.name === todo.name);

        // Update with new info
        oldTodo.title = newName;
        oldTodo.description = newDescription;
        oldTodo.priority = newPriority;
        oldTodo.status = newStatus;
        oldTodo.date = newDate;
        oldTodo.time = newTime;
        
        initializeContent(todoProjectName, Projects);
        console.log(Projects);
        closeModal();
    });
}

function Delete(todo) {

}
import './styles.css'
import Project from "./project";
import { addToDo } from "./project";
import { addProject } from "./project";
import Todo from "./todos";
import openModal from './modal';
import { closeModal } from './modal';

let projects = [];

const defaultProject = Project("default");
addProject(projects, defaultProject);

const groceries = Todo("groceries", "This weeks groceries", "Tomorrow", 7);
addToDo(defaultProject, groceries);

console.log(defaultProject.name);

//form
// Handle form submission
document.getElementById("addToDo").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent the default form submission behavior

    const todoName = document.getElementById("todoName").value;
    const todoDescription = document.getElementById("todoDescription").value;
    const todoDueDate = document.getElementById("todoDueDate").value;
    const todoPriority = document.getElementById("todoPriority").value;
    
    const newTodo = Todo(todoName, todoDescription, todoDueDate, todoPriority);
    addToDo(defaultProject, newTodo);

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
import Todo from "./todo";
import { addToDo } from "./todo";
import { updateProjectList } from "./project";

export default function calibrateForm(Projects) {
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

        const newTodo = Todo(todoName, todoProject, todoDescription, todoPriority, todoStatus, todoDate, todoTime);
        addToDo(todoProject, newTodo);
        
        updateProjectList(Projects); // Might be unneccesary
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
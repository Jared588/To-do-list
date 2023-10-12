import Todo from "./todo";
import { addToDo } from "./todo";
import { updateModalOptions } from "./form";
import { initializeContent } from "./todo";

export default function Project(name) {
    return {
        name,
        todos: [],
    };
}

export function addProject(projectList, project) {
    projectList.push(project);
}

export function updateProjectList(Projects) {
    let projectList = document.getElementById("project-list");

    // Clear the existing list
    projectList.innerHTML = "";

    // Append the updated list to the webpage
    for (let project of Projects) {
        let projectDiv = document.createElement("ul");
        projectDiv.classList.add("project");
        projectDiv.textContent = project.name;
        projectDiv.id = project.name.toLowerCase();
        projectDiv.addEventListener("click", () => initializeContent(project.name, Projects));
        projectList.appendChild(projectDiv);
    }
}

export function addProjectToPageBtn(Projects) {
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
        updateModalOptions(Projects);
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
export function loadDefaultProjects(Projects) {
    // Default Projects
    let Personal = Project("Personal");
    let testToDo = Todo("Do 30 minutes of yoga 🧘", Personal, "Find an instructor online and stick with it!", 5, "Completed", "2023-10-12", "07:00");
    let testToDo2 = Todo("Dentist appointment", Personal, "Don't forget to brush your teeth!", 9, "To do", "2023-10-12", "16:00");
    let testToDo3 = Todo("Buy bread 🍞", Personal, '', 5, "To do", "2023-10-12", "17:00");
    addToDo(Personal, testToDo);
    addToDo(Personal, testToDo2);
    addToDo(Personal, testToDo3);
    addProject(Projects, Personal);
    updateProjectList(Projects);

    let Work = Project("Work");
    let testToDo4 = Todo("Plan user research sessions", Personal, '', 5, "Completed", "2023-10-12" , "09:00");
    let testToDo5 = Todo("Provide feedback on Amy's design", Personal, 'And be nice!', 9, "Completed", "2023-10-12", "11:30");
    let testToDo6 = Todo("Afternoon meeting", Personal, '', 5, "To do", "2023-10-12", "13:30");
    let testToDo7 = Todo("Hand in report", Personal, 'Dont forget to double check for typos', 5, "To do", "2023-10-12", "15:00");
    addToDo(Work, testToDo4);
    addToDo(Work, testToDo5);
    addToDo(Work, testToDo6);
    addToDo(Work, testToDo7);
    addProject(Projects, Work);
    updateProjectList(Projects);
}
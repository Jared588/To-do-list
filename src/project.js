export default function Project(name) {
    return {
        name,
        todos: [],
    };
}

export function addToDo(project, todo) {
    project.todos.push(todo);
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
        projectList.appendChild(projectDiv);
    }
}

export function updateModalOptions(Projects) {
    // Add available Projects to the modal
    let modalProjectList = document.getElementById("modal-project-list");

    // Clear the existing list
    modalProjectList.innerHTML = "";

    for (let project of Projects) {
        let projectDiv = document.createElement("option");
        projectDiv.textContent = project.name;
        modalProjectList.appendChild(projectDiv);
    }
}
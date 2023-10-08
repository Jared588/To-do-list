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
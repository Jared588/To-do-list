export default function Project(name) {
    return {
        name,
        todos: [],
    };
}

export function addToProject(project, todo) {
    project.todos.push(todo);
}

export function addToProjectList(projectList, project) {
    projectList.push(project);
}
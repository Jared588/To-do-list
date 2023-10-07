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
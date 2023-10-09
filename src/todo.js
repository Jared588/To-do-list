export default function Todo(title, project, description, priority, status, date, time) {
    return {title, project, description, priority, status, date, time};
};

export function addToDo(project, todo) {
    project.todos.push(todo);
}
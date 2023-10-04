const Todo = (title, description, dueDate, priority) => {
    let title = () => title;
    let description = () => description;
    let dueDate = () => dueDate;
    let priority = () => priority;

    return {title, description, dueDate, priority};
}
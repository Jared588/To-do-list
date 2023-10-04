import './styles.css'
import Project from "./project";
import { addToProject } from "./project";
import { addToProjectList } from "./project";
import Todo from "./todos";

let projects = [];

const defaultProject = Project("default");
addToProjectList(projects, defaultProject);

const groceries = Todo("groceries", "This weeks groceries", "Tomorrow", 7);
addToProject(defaultProject, groceries);

console.log(defaultProject.name);
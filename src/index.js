import './styles.css';
import Project from "./project";
import { addToDo } from "./project";
import { addProject } from "./project";
import Todo from "./todos";
import { updateProjectList } from './project';
import calibrateForm from './form';

let Projects = [];

document.addEventListener("DOMContentLoaded", function () {
    // Default Projects
    let Personal = Project("Personal");
    let testToDo = Todo("s", Personal, "bla bla bla,", 2, "busy", 1111, 222);
    addToDo(Personal, testToDo);
    addProject(Projects, Personal);
    updateProjectList(Projects);

    let Work = Project("Work");
    let anotherToDo = Todo("s", Personal, "bla bla bla,", 2, "busy", 1111, 222);
    addToDo(Work, anotherToDo);
    addProject(Projects, Work);
    updateProjectList(Projects);

    console.log(Projects);

    // Allow form to work with our Project List
    calibrateForm(Projects);
});
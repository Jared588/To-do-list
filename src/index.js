import './styles.css';
import calibrateForm from './form';
import { loadDefaultProjects } from './project';

let Projects = [];

document.addEventListener("DOMContentLoaded", function () {
    // Allow form to work with our Project List
    calibrateForm(Projects);

    // Load default demo projects
    loadDefaultProjects(Projects);
});
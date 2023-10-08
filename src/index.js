import './styles.css';
import calibrateForm from './form';
import { loadDefaultProjects } from './project';

let Projects = [];

document.addEventListener("DOMContentLoaded", function () {
    // Load default demo projects
    loadDefaultProjects(Projects);

    // Allow form to work with our Project List
    calibrateForm(Projects);  
});
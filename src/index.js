import './styles.css';
import calibrateForm from './form';
import { loadDefaultProjects } from './project';
import { addProjectToPageBtn } from './project';
import { hideEditorModal } from './todo';

let Projects = [];
export { Projects };

document.addEventListener("DOMContentLoaded", function () {
    // Load default demo projects
    loadDefaultProjects(Projects);

    // Allow the user to add projects
    addProjectToPageBtn(Projects);
    
    // Allow form to work with our Project List
    calibrateForm(Projects);  

    // Load Main Title
    Home();

    // Hide editor modal
    hideEditorModal();

});

function Home() {
    let homeBtn = document.querySelector('#homeBtn');
    homeBtn.addEventListener("click", loadHome);
    loadHome();

    function loadHome() {
        let main = document.querySelector("#content");
        main.innerHTML = "";
        let title = document.createElement("p");
        title.textContent = "Your Daily Blueprint";
        title.classList.add("main-title");
        main.appendChild(title);
    }
}
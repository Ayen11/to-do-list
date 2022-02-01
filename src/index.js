import "./style.css"
import {task, project, test} from "./notes";
import { displayProject, displayProjectList } from "./loader";

let projectArray = [];

//casts to the inputs for tasks
let titleT = document.querySelector('#titleInput');
let descriptionT = document.querySelector('#descriptionInput');
let dueDateT = document.querySelector('#dueDateInput');
let priorityT = document.querySelector('#priorityInput');
let notesT = document.querySelector('#notesInput');

//casts to the inputs for projects
let titleP = document.querySelector('#PtitleInput');
let descriptionP = document.querySelector('#PdescriptionInput');

//initial casts
const containerRef = document.querySelector('#container');
const ProjectPopBoxRef = document.querySelector("#projects");
const taskBoxRef = document.querySelector("#tasks");
const projectBoxRef = document.querySelector(".project");
const projectDivRef = document.querySelector("#projectDiv");


//hides the popups
taskBoxRef.classList.add('hidden');
ProjectPopBoxRef.classList.add('hidden');


// sets up the default project/task
let defaultProject = new project("Default Project", "Created by default");
projectArray.push(defaultProject);
let selectedProject = defaultProject;
let taskNew = new task('Title', 'Description', 'DueDate', 1 , 'Notes');
selectedProject.addTask(taskNew); 
displayProject(selectedProject, projectBoxRef);
displayProjectList(projectArray, projectDivRef);

//button to add the pop up for tasks
const addTaskBoxPageRef = document.querySelector('#addTask')
addTaskBoxPageRef.onclick = () => taskBoxRef.classList.add('hidden');


//button to add the pop up for projects
const addProjectBoxPageRef = document.querySelector('#Project')
addProjectBoxPageRef.onclick = () => ProjectPopBoxRef.classList.remove('hidden');


//button to actually add the task from the popup
const addTaskPageBtnRef = document.querySelector('#Task');
addTaskPageBtnRef.addEventListener('click', () => {

    let taskNew = new task(titleT.value, descriptionT.value, 
    dueDateT.value, priorityT.value, notesT.value);

    taskBoxRef.classList.remove('hidden');
    selectedProject.addTask(taskNew);
    console.log('added');
    displayProject(selectedProject, projectBoxRef, selectedProject, projectBoxRef);
}); 

//button to actually add the project from the popup
const addProjectPageBtnRef = document.querySelector('#addProject');
addProjectPageBtnRef.addEventListener('click', () => {
    let projectNew = new project(titleP.value ,descriptionP.value);
    projectArray.push(projectNew);
    selectedProject = projectNew
    ProjectPopBoxRef.classList.add('hidden');
    console.log('added project');
    displayProjectList(projectArray, projectDivRef);
}); 


//tests :-P
let taskTest = new task('title', "desc", "date", 'prio', 'notes', 'checklist');
let taskTest2 = new task('title2', "desc", "date", 'prio', 'notes', 'checklist');

let projectTest = new project('test name', 'test description');
projectTest.addTask(taskTest);
projectTest.addTask(taskTest2);
let projectTest2 = new project('test name', 'test description');
projectTest2.addTask(taskTest2);







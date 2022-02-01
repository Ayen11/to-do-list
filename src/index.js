import "./style.css"
import {task, project, test} from "./notes";
import { printS, displayProject} from "./loader";



const containerRef = document.querySelector('#container');
const taskBoxRef = document.querySelector(".absolute");
const projectBoxRef = document.querySelector(".project");

const addTaskBoxPageRef = document.querySelector('#addTask')
addTaskBoxPageRef.onclick = () => taskBoxRef.classList.add('hidden');

const addTaskPageBtnRef = document.querySelector('#Task')
addTaskPageBtnRef.onclick = () => taskBoxRef.classList.remove('hidden');

taskBoxRef.classList.add('hidden');


let taskTest = new task('title', "desc", "date", 'prio', 'notes', 'checklist');
let taskTest2 = new task('title2', "desc", "date", 'prio', 'notes', 'checklist');

let projectTest = new project('test name', 'test description');
projectTest.addTask(taskTest);
projectTest.addTask(taskTest2);
let projectTest2 = new project('test name', 'test description');
projectTest2.addTask(taskTest2);

/*
function displayProject (project) {

    let length = project.content.length;
    projectBoxRef.innerHTML = '';

    for (let n = 0; n < length; n++) {
        let TaskRef = project.getIndex(n);
        const card = document.createElement('div');
        card.classList.add('content');
        card.textContent = (TaskRef.info());
        console.log(n);
        projectBoxRef.appendChild(card);
    };
};
*/


displayProject(projectTest2, projectBoxRef);





//let msg = test('ahey');

//alert(msg);
/*
let testp = new project('testname');

let task1 = new task('nametask')


testp.addTask(task1);

console.table(testp);

//printS();
*/
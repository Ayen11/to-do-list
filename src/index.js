import "./style.css"

import {task, project, test} from "./notes";
import { printS } from "./loader";

//let msg = test('ahey');

//alert(msg);

let testp = new project('testname');

let task1 = new task('nametask')


testp.addTask(task1);

console.table(testp);

//printS();
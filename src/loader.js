let printS = function () {
    alert('yo');
};

//gets the project to display and the html element to add it to
function displayProject (project, projectBoxRef) {

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

function displayProjectList (projectArray, ProjectDiv, project, projectBoxRef) {

    let length = projectArray.length;
    ProjectDiv.innerHTML = '';

    for (let n = 0; n < length; n++) {
        let ProjectRef = projectArray[n];
        const card = document.createElement('button');
        card.classList.add('content');
        card.textContent = (ProjectRef.name);
        console.log(n);
        ProjectDiv.appendChild(card);

        card.addEventListener('click', () => {
            displayProject(project, projectBoxRef);
        });
    };
};


export {printS, displayProject, displayProjectList};
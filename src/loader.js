let printS = function () {
    alert('yo');
};


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




export {printS, displayProject};
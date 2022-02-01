function project(name, description) {
    
    this.name = name;
    this.description = description;
    let content = [];

    const getIndex = function (index) {
        return content[index];
    };

    const addTask = function (task) {
        return content.push(task);
    };
    
    const getName = function (name) {
        return name;
    };

    return{ name, description, content, addTask, getIndex, getName};

};

// creates the basic tasks that fill up the projects
function task(title, description, dueDate, priority, notes, checklist) {
    
    //basic info inputted

    this.title = title
    this.description = description
    this.dueDate = dueDate
    this.priority = priority
    this.notes = notes
    this.checklist = checklist
    this.index = 0

    const info = function () {
        return (title + ' ' + description + ' ' + dueDate + ' ' + notes);
    };
    
    return{ title, description, dueDate, priority, notes, checklist, info };
};

const test = function (text) {
    let textmsg = text;
    return textmsg;
};

export {project, task, test};
function project(name, description) {
    
    this.name = name;
    this.description = description;
    let content = [];

    const addTask = function (task) {
        return content.push(task);
    };

    return{ name, description, content, addTask};

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
    
    return{ title, description, dueDate, priority, notes, checklist };
};

const test = function (text) {
    let textmsg = text;
    return textmsg;
};

export {project, task, test};
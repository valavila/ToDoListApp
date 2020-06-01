class ToDoItem{
    title: string;
    dueDate: Date;
    isCompleted: boolean;

    /*constructor(desiredTitle: string){
        this.title = desiredTitle;
    }*/
}


window.onload = function(){
    let addItem = document.getElementById("add");
    addItem.onclick = process;
}
function getInput(id):HTMLInputElement{
    return <HTMLInputElement>document.getElementById(id);
}

function process(){
    if(isValid()){
        let item = getToDoItem();
        displayTodoItem(item);
    }
}
/**
 * Check form data is valid
 */
function isValid():boolean{
    return true;
}
/**
 * Get all input off form and wrap in todo item object
 */
function getToDoItem(): ToDoItem{
    let myItem = new ToDoItem();
    //get title
    let titleInput = getInput("task");
    myItem.title = titleInput.value;

    //get due date
    let dueDateInput = getInput("due");
    myItem.dueDate = new Date(dueDateInput.value);

    let isCompleted = getInput("is-complete");
    myItem.isCompleted = isCompleted.checked;

    return myItem
    
}
/**
 * Display given ToDoItem on the webpage
 */
function displayTodoItem(item: ToDoItem): void{
    let itemText = document.createElement("h3");
    itemText.innerText = item.title;

    let itemDate = document.createElement("p");
    itemDate.innerText = item.dueDate.toDateString()

    let itemDiv = document.createElement("div");
    if(item.isCompleted){
        itemDiv.classList.add("completed");
    }
    
    itemDiv.appendChild(itemText);
    itemDiv.appendChild(itemDate);

    if(item.isCompleted){
        let completedToDos = document.getElementById("incomplete-items")
        completedToDos.appendChild(itemDiv);
    }
    else{
        let incompleteTodos = document.getElementById("incomplete-items");
        incompleteTodos.appendChild(itemDiv);
    }

    }
}


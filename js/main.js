var ToDoItem = (function () {
    function ToDoItem() {
    }
    return ToDoItem;
}());
window.onload = function () {
    var addItem = document.getElementById("add");
    addItem.onclick = process;
};
function getInput(id) {
    return document.getElementById(id);
}
function process() {
    if (isValid()) {
        var item = getToDoItem();
        displayTodoItem(item);
    }
}
function isValid() {
    return true;
}
function getToDoItem() {
    var myItem = new ToDoItem();
    var titleInput = getInput("task");
    myItem.title = titleInput.value;
    var dueDateInput = getInput("due");
    myItem.dueDate = new Date(dueDateInput.value);
    var isCompleted = getInput("is-complete");
    myItem.isCompleted = isCompleted.checked;
    return myItem;
}
function displayTodoItem(item) {
    var itemText = document.createElement("h3");
    itemText.innerText = item.title;
    var itemDate = document.createElement("p");
    itemDate.innerText = item.dueDate.toDateString();
    var itemDiv = document.createElement("div");
    if (item.isCompleted) {
        itemDiv.classList.add("completed");
    }
    itemDiv.appendChild(itemText);
    itemDiv.appendChild(itemDate);
    if (item.isCompleted) {
        var completedToDos = document.getElementById("incomplete-items");
        completedToDos.appendChild(itemDiv);
    }
    else {
        var incompleteTodos = document.getElementById("incomplete-items");
        incompleteTodos.appendChild(itemDiv);
    }
}

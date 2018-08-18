const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')

function newTodo() {
    var inputValue = document.getElementById("todo_text").value;
    var todoList = document.getElementById("todo-list");
    var li = document.createElement("li");
    li.innerHTML = inputValue;
    todoList.append(li);
    if (inputValue === '') {
        alert('Add ToDo Item');
    }    else {
            document.getElementById("todo-list").value = "";
        }
    }


let tasks = [];
const taskList = document.getElementById('list');
const addTaskInput = document.getElementById('add');
const tasksCounter = document.getElementById('tasks-counter');
let count = 0;



addTaskInput.addEventListener('keyup', handleEvent);

function handleEvent(e) {

    if (e.key == 'Enter') {
        const text = e.target.value;
        if (!text) {
            showNotification('add valid task');
            return;
        }
        const task = {
            text,
            id: Date.now().toString(),
            done: false
        }
        addTask(task);
        console.log(text);
        e.target.value = '';

    }
}





function markTaskAsComplete(taskId) {
    
    tasks.forEach((element) => {
        if (element.id == taskId) {
            element.done=true;
            showNotification(`${element.text} task is completed`);
        }
    })

}

function deleteTask(taskId) {
    let temp = tasks.filter((num) => {
        if (num.id == taskId) {
            console.log(num.id, taskId, 'hello jiii');

            document.getElementsByClassName(num.id)[0].remove();
            console.log(tasks);
            
        }
        return num.id != taskId;

    });
    tasks = temp;
    console.log(tasks);
   

    showNotification('task deleted succesfully');
}

function addTask(task) {


    tasks[count] = task;
    var li = document.createElement('li');




    li.innerHTML = `<input type="checkbox" id="${task.id}" data-id="12" class="custom-checkbox">

    <label for="${task.id}">${task.text}</label>  <i class="bi bi-trash3 delete"  data-id="${task.id}"></i>`

    li.classList.add(task.id);


    taskList.append(li);
    showNotification('Task added successfully');
    count++;


}

function showNotification(text) {
    alert(text);
}

function handle_Event(e) {

    if (e.target.classList.contains('delete')) {
        const idX = e.target.getAttribute('data-id');
        console.log(idX);
        deleteTask(idX);
        console.log(e.target);
    }
    console.log(e.target);

    markTaskAsComplete(e.target.getAttribute('id'));

}

document.addEventListener('click', handle_Event);


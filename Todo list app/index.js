// const add =()=>{
//     let inp= document.getElementById("taskInput")
//     let task=inp.value;
//     localStorage.setItem(`taskInput${localStorage.length}`,task)
//     document.getElementById("taskInput").value = '';
//     showTasks();
// }

// const showTasks=()=>{
//     let taskscon= document.getElementById('taskcon');
//     taskscon.className="taskcon"
//     taskscon.innerHTML=''
//     for(let i=0; i<localStorage.length; i++){
//         console.log("added")
//     let task= localStorage.getItem(`taskInput${i}`)
//     let ihtml= `<div class="tasklist">
//         <div class="task" id="task">${task}</div>
//         <div class="del" id="taskInput${i}" onclick=delfun(id)>delete</div>
//        </div>`
//     taskscon.innerHTML+=ihtml;
//     }
// }

// let click= document.getElementById("addTaskBtn")
// click.onclick=()=>{
//     // localStorage.clear()
   
//     let inp= document.getElementById("taskInput")
//     let task=inp.value;
//     if(task){
//     add();
//     }
//     else{
//         alert("Please enter a task")
//     }
// }

// const delfun=(id)=>{
//     localStorage.removeItem(id);
//     showTasks();
// }
// // localStorage.clear();

// gpt code
const add = () => {
    let inp = document.getElementById("taskInput");
    let task = inp.value;

    // Get tasks array from local storage, if task array is empty then it uses the array [] function
    let tasksArray = JSON.parse(localStorage.getItem("tasks")) || [];

    // Add new task
    tasksArray.push(task);

    // Save the updated array back to local storage
    localStorage.setItem("tasks", JSON.stringify(tasksArray));

    // Clear input field
    document.getElementById("taskInput").value = '';

    // Display updated task list
    showTasks();
}

const showTasks = () => {
    let taskscon = document.getElementById('taskcon');
    taskscon.className = "taskcon";
    taskscon.innerHTML = '';

    // Get tasks array from local storage
    let tasksArray = JSON.parse(localStorage.getItem("tasks")) || [];

    // Iterate and display each task
    tasksArray.forEach((task, index) => {
        let ihtml = `<div class="tasklist">
            <div class="task" id="task">${task}</div>
            <div class="del" onclick="delfun(${index})">delete</div>
        </div>`;
        taskscon.innerHTML += ihtml;
    });
}

let click = document.getElementById("addTaskBtn");
click.onclick = () => {
    let inp = document.getElementById("taskInput");
    let task = inp.value;

    if (task) {
        add();
    } else {
        alert("Please enter a task");
    }
}

const delfun = (index) => {
    // Get tasks array from local storage
    let tasksArray = JSON.parse(localStorage.getItem("tasks")) || [];

    // Remove the task at the specified index
    tasksArray.splice(index, 1);

    // Update local storage with the modified array
    localStorage.setItem("tasks", JSON.stringify(tasksArray));

    // Display updated task list
    showTasks();
}

// Load tasks on page load
localStorage.clear();
showTasks();

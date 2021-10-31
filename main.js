import DeleteButton from "./components/deleteTask.js";
import concludeButton from "./components/concludeTask.js";
const createTask = (event) =>{
    //preventDefault() will clear the default form config that is passed as a parameter; 
    event.preventDefault();
    const list = document.querySelector('[data-list]');
    const input = document.querySelector('[data-form-input]');
    const value = input.value;

    const calendar = document.querySelector('[data-form-date]');
    const date = moment(calendar.value);
    
    console.log(date.format('DD/MM/YYYY'));
    console.log(value);
    input.value = "";

    if(value != "")
    {
        const task = document.createElement('li');
        //classList.add() will add a CSS class to the task content
        task.classList.add('task');

        const content = `<p class="content">${value}</p>`;

        //inner.HTML defines a HTML or XML syntax
        task.innerHTML = content;
        
        task.appendChild(concludeButton());
        task.appendChild(DeleteButton());
        //appendChild will add task content to html as a tag
        list.appendChild(task);
        }
    }

    const newTask = document.querySelector('[data-form-button]');
    newTask.addEventListener('click', createTask);


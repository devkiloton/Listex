import DeleteButton from "./deleteTask.js";
import concludeButton from "./concludeTask.js";

let tasks = [];

//data
export const handleNewItem = (event) => {
     //preventDefault() will clear the default form config that is passed as a parameter; 
     event.preventDefault();
     const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
     
     const list = document.querySelector('[data-list]');
     
     const input = document.querySelector('[data-form-input]');
     const inputValue = input.value;
 
     const calendar = document.querySelector('[data-form-date]');
     const date = moment(calendar.value);
     const formattedDate = date.format('DD/MM/YYYY');

     const data = {
         inputValue,
         formattedDate
     }

     const updatedTasks = [...tasks, data]

     const creatingTask = Task(data);

    input.value = "";

    if(inputValue != "" && formattedDate != 'Invalid date')
    {
    //appendChild will add task content to html as a tag
     list.appendChild(creatingTask);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks))
    }
}

//UI
export const Task = ({inputValue, formattedDate}) =>{

    
        const task = document.createElement('li');
        //classList.add() will add a CSS class to the task content
        task.classList.add('task');

        const content = `<p class="content">${inputValue}${" - " + formattedDate}</p>`;

        //inner.HTML defines a HTML or XML syntax
        task.innerHTML = content;
        
        task.appendChild(concludeButton());
        task.appendChild(DeleteButton());

        return task;

        }

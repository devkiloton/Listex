import DeleteButton from "./components/deleteTask.js";
import concludeButton from "./components/concludeTask.js";

//data
const handleNewItem = (event) => {
     //preventDefault() will clear the default form config that is passed as a parameter; 
     event.preventDefault();
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

     const creatingTask = createTask(data);

    input.value = "";

    if(inputValue != "" && formattedDate != 'Invalid date')
    {
    localStorage.setItem('task', JSON.stringify(data))
     //appendChild will add task content to html as a tag
     list.appendChild(creatingTask);
    }
}

//UI
const createTask = ({inputValue, formattedDate}) =>{

    
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

    const newTask = document.querySelector('[data-form-button]');
    newTask.addEventListener('click', handleNewItem);


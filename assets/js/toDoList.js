const createTask = (event) =>{
    //preventDefault() will clear the default form config that is passed as a parameter; 
    event.preventDefault();
    const input = document.querySelector('[data-form-input]');
    const value = input.value;
    console.log(value);
    input.value = "";

    const task = document.querySelector('[data-task]');
    const content = `<p class="content">${value}</p>`;
    //inner.HTML defines a HTML or XML syntax
    task.innerHTML = content;
    input.value = "";
}

const newTask = document.querySelector('[data-form-button]');
newTask.addEventListener('click', createTask);
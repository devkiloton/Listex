const DeleteButton = () =>{
    const deleteButton = document.createElement('button');
    deleteButton.classList.add('delete-button');
    deleteButton.innerText = '✖';
    deleteButton.addEventListener('click', deleteTask
    );
    return deleteButton;
}

const deleteTask = (event) => {
    const deleteButton = event.target;

    const completeTask = deleteButton.parentElement;

    completeTask.remove();

    return deleteButton;
}

export default DeleteButton;
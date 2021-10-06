const concludeButton = () => {
    const concludeButton = document.createElement('button');

    concludeButton.classList.add('check-button');
    concludeButton.innerText = '✓';
    concludeButton.addEventListener('click', concludeTask);

    return concludeButton;
    }

    const concludeTask = (event) =>{
        const concludeButton = event.target;

        const completeTask = concludeButton.parentElement;

        completeTask.classList.toggle('done');
    }
export default concludeButton;
const addBtn = document.querySelector('.addTask')
const ol = document.querySelector('.taskList')
const input = document.querySelector('.inputValue')

const addTaskHandler =() => {
    if(input.value === ''){
        alert('Enter the task...')
    } else {
        let li = document.createElement('li')
        li.innerHTML = input.value
        ol.appendChild(li)

        let removeBtn = document.createElement('button')
            removeBtn.setAttribute('class', 'btn btn-danger removeBtn')
        let btnText = document.createTextNode('Remove')
        removeBtn.appendChild(btnText)
        li.appendChild(removeBtn)
    }
    input.value = ''
    updateTask()
}

const removeTaskHandler = (e) => {
    console.log(e.target.tagName);
    console.log( e.target.parentElement);
    
    if(e.target.tagName === 'BUTTON'){
        e.target.parentElement.remove()
    updateTask()
    }
}

// to add the task
addBtn.addEventListener('click', addTaskHandler)

// to remove the task
ol.addEventListener('click', removeTaskHandler)

// Local storage
function updateTask(){
    localStorage.setItem('task', ol.innerHTML)
}

// getting the task from local storage
function getTask(){
    ol.innerHTML = localStorage.getItem('task')
}
getTask()
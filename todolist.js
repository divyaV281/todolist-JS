const addBtn = document.querySelector('.addTask')
const ol = document.querySelector('.taskList')
const input = document.querySelector('.inputValue')

const addTaskHandler =() => {
    // console.log(e.target);

    let li = document.createElement('li')
    li.innerHTML = input.value
    ol.appendChild(li)
    input.value = ''

    let removeBtn = document.createElement('button')
        removeBtn.setAttribute('class', 'btn btn-danger removeBtn')
    let btnText = document.createTextNode('Remove')
    removeBtn.appendChild(btnText)
    li.appendChild(removeBtn)
}

const removeTaskHandler = (e) => {
    console.log(e.target.tagName);
    console.log( e.target.parentElement);
    
    if(e.target.tagName === 'BUTTON'){
        e.target.parentElement.remove()
    }
}

// to add the task
addBtn.addEventListener('click', addTaskHandler)

// to remove the task
ol.addEventListener('click', removeTaskHandler)
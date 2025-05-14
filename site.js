const we = document.querySelector("#welcome")
const previous = document.getElementById('prev')
const next = document.getElementById('next')
const submitNew = document.querySelector("input")
const input = document.getElementById('new-todo')
const submitItButton = document.querySelector('button[type="button"]')
const todoList = document.querySelector(".todo-list")





previous.addEventListener('click', () => {
    currentImage = currentImage - 1
    //
    if (currentImage < 0) {currentImage = 4}
    //
    showImages()
    //
});
next.addEventListener('click', () => {
    currentImage = currentImage + 1
    //
    if (currentImage > 4) {currentImage = 0}
    //
    showImages()
    //
});



const hours = new Date().getHours() // get the current hour

const isMorning = hours >= 4 && hours < 12 // is it morning?
const isAfternoon = hours >= 12 && hours < 17 // is it afternoon?
const isEvening = hours >= 17 || hours < 4 // is it evening?

//we.textContent

if (isMorning) {
    we.textContent = "Good morning!";
} else if (isAfternoon) {
    we.textContent = "Good afternoon!";
} else if (isEvening) {
    we.textContent = "Good evening!";
}

localStorage.setItem("It's a secret to everybody.", "super cool secret");

const urls = [
    'https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/933964/pexels-photo-933964.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/1251861/pexels-photo-1251861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/1370296/pexels-photo-1370296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
].map(url => { (new Image()).src = url; return url })

const images = document.querySelectorAll('#carousel img')

let currentImage = 0
const showImages = () => {
    const offset = currentImage % urls.length
    images.forEach((image, index) => {
        const imageIndex = (index + offset + urls.length) % urls.length
        image.src = urls[imageIndex]
    })
}

showImages()

setInterval(() => {
    currentImage = currentImage + 1
    //
    if (currentImage > 4) {currentImage = 0}
    //
    showImages()
    //
}, 5000)



console.log("1")


// Get the list from local storage
const todos = JSON.parse(localStorage.getItem('todo-list')) || []
console.log("2")
// Add a new item to the list
//todos.push({ text: input.value, completed: false })

// Save the list to local storage
//localStorage.setItem('todo-list', JSON.stringify(todos))

// Clear the li's before we recreate them
//todoList.innerHTML = ''

// Create and add new list items to the DOM
//const li = document.createElement('li')
// li.textContent = todo.text
// todoList.append(li)
console.log("3")
console.log({ text: input.value, completed: false })
submitItButton.addEventListener('click', () => {
    todos.push({ text: input.value, completed: false })
    localStorage.setItem('todo-list', JSON.stringify(todos))
renderTodos();



});




function renderTodos() {
todoList.innerHTML = ''

todos.forEach(todo => {
    const li = document.createElement('li')
   li.textContent = todo.text
todoList.append(li) 
})
}

renderTodos();
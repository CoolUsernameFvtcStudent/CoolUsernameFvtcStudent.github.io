const we = document.querySelector("#welcome")

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

console.log("https://fvtc.software/appel/modern-javascript/assignments/homepage"); 
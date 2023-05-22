// 1.1

let followship = document.querySelector(".followship");
let members = followship.querySelectorAll('p');

members.forEach(el => el.style.color = 'red')

// 1.2

let ul1 = document.querySelector('.ul-list');

let alllinks1 = ul1.querySelectorAll('a')
for(let i = 0; i < alllinks1.length; i+=2){
    alllinks1[i].style.color = 'red'
}


// 1.3


let ul = document.querySelector('.ul-list');
let alllinks = ul.querySelectorAll('a')

for(let link of alllinks){
    let href = link.etAttribute('href')
    if(!href) continue
    if(href.startsWith('/')) continue
    if(href.includes('://')) continue
    link.style.color = 'red'
};

// 1.4


let isvalid = (el) => el.hasAttribute('href')
let isours = (el) => el.getAttribute('href').startswith('/')
let isprotected = (el) => el.getAttribute('href').includes('://') 
let setcolor = (el) => el.style.color = 'red'

let linkarr = Array.from(alllinks)
linkarr
.filter(isvalid)
.filter(isours) 
.filter(isprotected)
.forEach(setcolor)

console.log(trashlink);


// 1.5

const NUMBER = Math.floor(Math.random() * 20) + 1; // დაამრგვალე ქვემოთ

const guessBtn = document.querySelector("button");
const input = document.getElementById("number");
guessBtn.addEventListener("click", function () {
  const userInput = Number(input.value);

  if (!userInput) return alert("Please enter the number");

  // შევამოწმოთ თუ გამოიცნო რიცხვი
  if (userInput === NUMBER) return alert("You are a genius");

  if (userInput < NUMBER)
    return alert("Your guess, " + userInput + ", is too low");

  if (userInput > NUMBER)
    return alert("Your guess, " + userInput + ", is too high");
});

//1.6

const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const email = document.querySelector("input");
  const password = document.querySelector('input[name="password"]');
  const confirmPassword = document.querySelector(
    'input[name="confirmPassword"]'
  );
  // Validations
  if (!email.value) {
    alert("Please enter the Email");
    return;
  }
  if (password.value !== confirmPassword.value) {
    alert("Passwords don't match");
    return;
  }

  alert("Congratulations, you have successfully registered");
  // Clear the inputs
  email.value = "";
  password.value = "";
  confirmPassword.value = "";
});
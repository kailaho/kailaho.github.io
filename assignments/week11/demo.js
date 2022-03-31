// const para = document.querySelector('p'); //declaration
// para.addEventListener('click', updateName); //waits for user of site to do something (what its looking for, what it should do)
// function updateName() {
//   const name = prompt('Enter a new name');
//   para.textContent = `Player 1: ${name}`;
// }

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUser(){
  let myName = prompt('Please enter your name');
  localStorage.setItem('name', myName);
  myHeading.textContent = ' Hi, ' + myName;
}

if(!localStorage.getItem('name')){
  setUser();
} else{
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'Mozilla is cool, ' + storedName;
}

myButton.onclick = function(){
  setUser();
}

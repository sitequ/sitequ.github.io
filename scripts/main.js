// let myHeading = document.querySelector('h1');
// myHeading.textContent = 'Hello world!';

let myHTML = document.querySelector('h1');
myHTML.onclick = function() {
    alert('Yeah!!! Nothing happened!!!')
};

let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/IMG_0779.JPG') {
      myImage.setAttribute('src', 'images/realpic.jpg');
    } else {
      myImage.setAttribute('src', 'images/IMG_0779.JPG');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('type in your nick name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Welcome to my boring website!!! ' + myName;
  }

if(!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Welcome to my boring website!!! ' + storedName;
}

myButton.onclick = function() {
    setUserName();
}
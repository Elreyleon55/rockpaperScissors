
//get length of greta studios letters

const getTotalLengthOfLetters = document.querySelectorAll(".logo path")
console.log(getTotalLengthOfLetters)

for (let i = 0; i < getTotalLengthOfLetters.length; i++) {
  console.log(`letter ${i} is ${getTotalLengthOfLetters[i].getTotalLength()}`);
  
}

// script to hide Pages


const animatedElement = document.querySelector(".logo");
const loaderScreen = document.querySelector(".container-loading-screen");
const  typeWriterScreen = document.querySelector(".container-typewriter-text");

const textWriterText = document.querySelector(".text-typewriter");
textWriterText.style.display = "none";

const textSquare = document.querySelector(".input-information");

const enterButton2 = document.querySelector(".enter-button");


const textwriterAnimation = document.querySelector(".text-typewriter");

//  window.addEventListener("load", ()=> {
//   loaderScreen.classList.add('hidden');
//   typeWriterScreen.classList.add('visible');
//  })

document.addEventListener('DOMContentLoaded', ()=> {
  loaderScreen.addEventListener('animationend', ()=>{
    loaderScreen.style.display = 'none';
    // typeWriterScreen.style.display = 'block';
    typeWriterScreen.classList.add('visible');
    textWriterText.style.display = "block";
  })
})


// hide text aquare

textSquare.style.display = "none"
enterButton2.style.display = "none"

// enter button appear
textwriterAnimation.addEventListener('animationend', () =>{
  textSquare.style.display = "block"
  enterButton2.style.display = "block"
})







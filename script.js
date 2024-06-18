
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

// pick payers class

const textwriterAnimation = document.querySelector(".text-typewriter");


document.addEventListener('DOMContentLoaded', ()=> {
  loaderScreen.addEventListener('animationend', ()=>{
    loaderScreen.style.display = 'none';
    textWriterText.style.display = "block";
  })
})

// hide text square

textSquare.style.display = "none"
enterButton2.style.display = "none"

// enter button appear
textwriterAnimation.addEventListener('animationend', () =>{
  textSquare.style.display = "block"
  enterButton2.style.display = "block"
})

// picking one player or two


const playerOne = document.querySelector(".player-one");
const playerTwo = document.querySelector(".player-two");


const playerSelectBtns = document.querySelectorAll(".player-select-btn")



// get my conainter for rock paper siccors
const onePlayerOption = document.querySelector(".start-game-one-player");
// hide my game
onePlayerOption.style.display = "none"

// big container to get rid off all text

const closeScreenToPlay = document.querySelector(".close-screen");

// display none
// closeScreenToPlay.style.display = "none";

playerSelectBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (btn.classList.contains("player-one")){
      console.log("yes")
      onePlayerOption.style.display = "block";
      pickPlayerContainer.style.display = "none";
      closeScreenToPlay.style.display = "none";

    } else {
      console.log("error this is not a valid choice yet")
    }

  })
  
})



// code for game 

// my paragapth inner html
const updateOnTheGame = document.querySelectorAll(".paragraphs-result p");
console.log(updateOnTheGame);

//declaring my veriables

const gameButtons = document.querySelectorAll(".game-buttons");
let htmlResult = document.querySelector(".result-of-game");
let htmlAnswers = document.querySelector(".result-of-answers");
let htmlScore = document.querySelector(".result-of-score");
console.log(gameButtons);

const scoreHtml = JSON.parse(localStorage.getItem("score-html"));
console.log(scoreHtml);

htmlScore.innerHTML = scoreHtml;

const score = JSON.parse(localStorage.getItem("score")) || {
  losses: 0,
  wins: 0,
  losses: 0,
};

// same thing as above text only that it uses a or opratort
// if (!score) {
//   score = {
//     losses: 0,
//     wins: 0,
//     losses: 0,
//   };
// }

// function to reset score

function resetButton() {
  score.losses = 0;
  score.wins = 0;
  score.ties = 0;
  localStorage.removeItem("score");
  updateOnTheGame[0].innerHTML = "";
  updateOnTheGame[1].innerHTML = "";
  htmlScore.innerHTML = `wins: ${score.wins} losses:${score.losses} ties:${score.ties}`;
}

// connect the resutl to the with the object of the score

let computerMove = "";
function defineComputerMove() {
  const randomeNumber = Math.random();
  if (randomeNumber > 0 && randomeNumber < 1 / 3) {
    computerMove = "rock";
  } else if (randomeNumber > 1 / 3 && randomeNumber < 2 / 3) {
    computerMove = "paper";
  } else if (randomeNumber > 2 / 3 && randomeNumber < 1) {
    computerMove = "scissors";
  }
  return computerMove;
}

let result = "";
function playGame(playerMove) {
  defineComputerMove();
  if (playerMove === "scissors") {
    if (computerMove === "scissors") {
      result = "You tie";
      score.ties++;
    } else if (computerMove === "rock") {
      result = "You lose";
      score.losses++;
    } else if (computerMove === "paper") {
      result = "You win";
      score.wins++;
    }
  }
  if (playerMove === "rock") {
    if (computerMove === "rock") {
      result = "You tie";
      score.ties++;
    } else if (computerMove === "paper") {
      result = "You lose";
      score.wins++;
    } else if (computerMove === "scissors") {
      result = "You win ";
      score.losses++;
    }
  }
  if (playerMove === "paper") {
    if (computerMove === "paper") {
      result = "You tie";
      score.ties++;
    } else if (computerMove === "scissors") {
      result = "You lose";
      score.losses++;
    } else if (computerMove === "rock") {
      result = "You win";
      score.wins++;
    }
  }

  localStorage.setItem("score", JSON.stringify(score));

  console.log(
    `You picked ${playerMove}. Computer picked ${computerMove}. You ${result}.
        wins: ${score.wins} losses:${score.losses} ties:${score.ties}`
  );
  htmlAnswers.innerHTML = `${result}`;
}

gameButtons.forEach((activate) => {
  let forEachButton = activate;
  console.log(forEachButton);
  forEachButton.addEventListener("click", () => {
    htmlAnswers.innerHTML = `You picked ${forEachButton.innerHTML} - Computer picked ${computerMove}`;
    htmlResult.innerHTML = `${result}`;
    htmlScore.innerHTML = `Wins: ${score.wins} Losses:${score.losses} Ties:${score.ties}`;
    localStorage.setItem(
      "score-html",
      JSON.stringify(htmlScore.innerHTML)
    );
  });
});


console.log(result);




//get variables 
const informationInput = document.querySelector(".input-information");
const enterButton = document.querySelector(".enter-button")
//inner html
const innerHtml2 = document.querySelector(".text-typewriter2");

// pick players
const pickPlayerContainer = document.querySelector(".pick-players");

//activate button
// hide my players
pickPlayerContainer.style.display = "none";

enterButton.addEventListener("click", () => {
  console.log(informationInput.value)
  // innerHtml2.innerHTML = (`${informationInput.value} nice to meet you. You have a beautiful name`)
  const message = `${informationInput.value}, nice to meet you.
  What a beautiful name.
  If you have freinds click two players, if not click one player`;
  typeWriter(innerHtml2, message, 100);
})

function typeWriter(element, text, speed) {
  let i = 0;
  element.innerHTML = ''; // Clear previous content
  function type() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(type, speed);
    
    } else {
      pickPlayerContainer.style.display = "block";
    }
  }
  type();
  
}



console.log(enterButton)
console.log(informationInput)
console.log(informationInput.value)
// Math.random()*(max-min)+1 // rand bwt range

// let num = parseInt("")
// console.log(num); // NaN

// usetInput.setAttribute("disabled", "")
//p.classList.add("button")
// -------------------------------------------------
let RanNum = parseInt(Math.random() * 100 + 1);
console.log(RanNum);

const userInput = document.querySelector("#guessField");
const submit = document.querySelector("#subt");
const prevGuess = document.querySelector(".guesses");
const guessRemain = document.querySelector(".lastResult");
const message = document.querySelector(".message");
const startOver = document.querySelector(".resultParas");

let guessCount = 1;
let playGame = true;
let guesses = []
const btn = document.createElement("button")


if (playGame) {
  
  submit.addEventListener("click", (e) => {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    if (validGuess(guess)) {
      userInput.value = "";
      console.log("check will execute");
      checkGuess(guess);
    } else {
      userInput.value = "";
      displayMessage("Enter a valid number from 1 to 100");
    }
  });
}

function validGuess(guess) {
  // check value in userInput is valid number
  if (guess < 1 || guess > 100 || isNaN(guess)) return false;
  else return true;
}

function checkGuess(guess) {
  // check after validGuess whethter number with RanNum
  if (guessCount != 10) {
    if (guess === RanNum) {
      //console.log("true");
      displayMessage(`You Guess it Right! Number is ${RanNum}`);
      endGame();
      console.log(playGame);
    } else {
      // high and low of guessed num acc to random num
      if(guess<RanNum){
        displayMessage(`gussed number is tooo low`);
      }else{
        displayMessage(`gussed number is tooo high`);
      }
      displayGuess(guess)
    }
  } else {
    displayMessage(`All Attempt are used And the number is : ${RanNum}`);
    endGame();
  }
}

function displayGuess(guess) {
  // changes Pre guess and guess remain field
  guessCount++
  guesses.push(guess)
  prevGuess.innerHTML = `${guesses.join(", ")}`
  guessRemain.innerHTML = `${10-(guessCount-1)}`
}
function displayMessage(msg) {
  // change message const acc to the above function
  message.innerHTML = `${msg}`;
}
function endGame() {
  prevGuess.innerHTML = ""
  guessRemain.innerHTML = "10"
  submit.style.display = "none"
   guessCount = 1;
   playGame = false;
   guesses = []
   RanNum = parseInt(Math.random() * 100 + 1)
  btn.innerHTML = "start again"
  startOver.appendChild(btn).addEventListener("click",(e)=>{
           e.preventDefault()
          startGame()
  })
}
function startGame() {
  playGame = true;
  message.innerHTML = ""
  prevGuess.innerHTML = ""
  submit.style.display = "inline-block";
  btn.remove()
}

//JS Code for game to work

//var playerName = "";
var playerChoice = "";
var computerChoice = "";
var emojis = ["🪨", "📄", "✂️"];
var currentEmojiNumber = 0;
var shuffleIntervalID = setInterval(shuffleEmojis, 150);
var playerChoiceContainer = document.querySelector("#player-choice-container");
var emojiShuffleElement = document.querySelector("#emoji-shuffle");
var buttonElement = document.querySelector("#mybutton");

var resultTextElement = document.querySelector("#game-result-message"); // Add this line

playerChoiceContainer.addEventListener("click", handlePlayerChoice);

function determineWinner() {
  var resultText = "";

  if (playerChoice === computerChoice) {
    resultText = "It's a tie!";
  } else if (
    (playerChoice === "🪨" && computerChoice === "✂️") ||
    (playerChoice === "📄" && computerChoice === "🪨") ||
    (playerChoice === "✂️" && computerChoice === "📄")
  ) {
    resultText = "Player wins!";
  } else {
    resultText = "AI wins!";
  }
  resultTextElement.textContent = resultText + " Click Restart to play again!";
  buttonElement.style.display = "inline-block";
}

function handlePlayerChoice(event) {
  if (!event.target.classList.contains("emoji")) return;

  playerChoice = event.target.textContent;
  playerChoiceContainer.innerHTML = `<p class="emoji">${playerChoice}</p>`;
  clearInterval(shuffleIntervalID);
  determineWinner();
}

function shuffleEmojis() {
  computerChoice = emojis[currentEmojiNumber];
  emojiShuffleElement.textContent = computerChoice;
  if (currentEmojiNumber < emojis.length - 1) {
    currentEmojiNumber++;
  } else {
    currentEmojiNumber = 0;
  }
}

buttonElement.addEventListener("click", RestartGame);

function RestartGame() {
  location.reload();
}

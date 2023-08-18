// Function to get computer's choice
function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissor'];
  const randomIndex = Math.floor(Math.random() * 3);
  return choices[randomIndex];
}

// Function to determine the winner
function determineWinner(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    document.getElementById('resultshow').innerText = 'Draw!';
    return 'Draw!';
  } else if ((playerChoice === 'rock' && computerChoice === 'scissor') ||
    (playerChoice === 'paper' && computerChoice === 'rock') ||
    (playerChoice === 'scissor' && computerChoice === 'paper')) {
    document.getElementById('resultshow').innerText = 'You win!';
    return 'You win!';
  } else {
    document.getElementById('resultshow').innerText = 'Computer wins!';
    return 'Computer wins!';
  }
}

// Function to update the counts
function updateCounts(result) {
  const youCount = document.getElementById('count-1');
  const computerCount = document.getElementById('count-3');
  const resultCount = document.getElementById('count-2');

  if (result === 'You win!') {
    youCount.textContent = 'You: ' + (parseInt(youCount.textContent.split(' ')[1]) + 1);
  } else if (result === 'Computer wins!') {
    computerCount.textContent = 'Computer: ' + (parseInt(computerCount.textContent.split(' ')[1]) + 1);
  }
  else {
    resultCount.textContent = 'Draw: ' + (parseInt(resultCount.textContent.split(' ')[1]) + 1);
  }
}

// Function to play the game
function playGame(playerChoice) {
  const computerChoice = getComputerChoice();
  const result = determineWinner(playerChoice, computerChoice);
  updateCounts(result);
}

// Add click event listeners to buttons
document.getElementById('btn-1').addEventListener('click', function () {
  playGame('rock');
});

document.getElementById('btn-2').addEventListener('click', function () {
  playGame('paper');
});

document.getElementById('btn-3').addEventListener('click', function () {
  playGame('scissor');
});




const getUserChoice = userInput => {
userInput = userInput.toLowerCase();

if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
return userInput;
} else {
  console.log('error');
}
};

const getComputerChoice = computerInput => {
  const choice = Math.floor(Math.random()* 3 );
  switch (choice){
  case 0:
  return 'rock';
  break;
  case 1:
  return 'paper';
  break;
  case 2:
  return 'scissors';
  break;
  }
}

function determineWinner(userChoice , computerChoice) {
if (userChoice === computerChoice) {
  return 'Its a tie';
} else if(userChoice === 'rock'&& computerChoice === 'paper') {
  return 'pc wins'
} else if(userChoice === 'rock'&& computerChoice === 'scissors') {
  return 'user wins'
} else if(userChoice === 'paper'&& computerChoice === 'rock') {
  return 'user wins'
} else if(userChoice === 'paper'&& computerChoice === 'scissors') {
  return 'pc wins'
} else if(userChoice === 'scissors'&& computerChoice === 'paper') {
  return 'user wins'
} else if(userChoice === 'scissors'&& computerChoice === 'rock') {
  return 'pc wins'
}
}
//console.log(determineWinner('paper', 'rock'));
function playGame() {
  const userChoice = getUserChoice('paper');
  const computerChoice = getComputerChoice();
  console.log('user threw: ' + userChoice);
  console.log('The computer threw: ' + computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
}
playGame();

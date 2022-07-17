let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

const generateTarget = () => {
//this will generate a random number between 0 and 9.
  Math.floor(Math.random()* 10);
}

let compareGuesses = (humanNum, computerNum, target) => {
  let userG =  Math.abs(target - humanNum);
  let compG = Math.abs(target - computerNum);
  if (userG <= compG){
    return true;
  }else{
    return false;
  }
}





let updateScore = winner => {
    if (winner === 'human') {
        humanScore += 1;
    } else if (winner === 'computer') {
        computerScore += 1;
    }
};

const advanceRound = () => {
  currentRoundNumber += 1;
}


updateScore('human');
console.log(humanScore);
updateScore('computer');
console.log(computerScore);
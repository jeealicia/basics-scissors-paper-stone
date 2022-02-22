/* Scissors Paper Stone
User inputs 'scissors', 'paper' or 'stone'
Output is either User wins, lost or it's a draw
*/

var numberOfUserWins = 0;
var numberOfPlays = 0;

var main = function (input) {
  console.log(`User: ${input.toLowerCase()}`);
  var lowerCaseInput = input.toLowerCase();
  // If input is not valid, return invalid input message
  if (
    lowerCaseInput != "scissors" &&
    lowerCaseInput != "paper" &&
    lowerCaseInput != "stone"
  ) {
    return `Your input is invalid. <br> Please key in either 'Scissors', 'Paper' or 'Stone'.`;

    // Else, if input is valid, play game
  } else {
    numberOfPlays = numberOfPlays + 1;
    var programHand = randomGenerator();
    console.log(`Computer: ${programHand}`);
    // Default output is lose
    var outputValue = `The computer chose ${programHand}. <br> You chose ${lowerCaseInput}. <br> You lose! <br> You have been winning ${numberOfUserWins} of ${numberOfPlays} turns so far.`;

    // If user input and computer hand is the same, return draw message
    if (lowerCaseInput == programHand) {
      outputValue = `The computer chose ${programHand}. <br> You chose ${lowerCaseInput}. <br> It's a draw! <br> You have been winning ${numberOfUserWins} of ${numberOfPlays} turns so far.`;
      return outputValue;
      // Else if any of below scenarios are met, return win message
    } else if (
      (lowerCaseInput == "scissors" && programHand == "paper") ||
      (lowerCaseInput == "paper" && programHand == "stone") ||
      (lowerCaseInput == "stone" && programHand == "scissors")
    ) {
      numberOfUserWins = numberOfUserWins + 1;
      outputValue = `The computer chose ${programHand}. <br> You chose ${lowerCaseInput}. <br> You win! <br> You have been winning ${numberOfUserWins} of ${numberOfPlays} turns so far.`;
      return outputValue;
      // Otherwise, return default lose message
    } else {
      return outputValue;
    }
  }
};

var randomGenerator = function () {
  // Generate a decimal from 0 through 3, inclusive of 0 and exclusive of 3
  var randomDecimal = Math.random() * 3;
  // Remove the decimal with the floor operation to get an integer from 0 to 2 inclusive
  var randomInteger = Math.floor(randomDecimal);
  if (randomInteger == 0) {
    return `scissors`;
  } else if (randomInteger == 1) {
    return `paper`;
  } else {
    return `stone`;
  }
};

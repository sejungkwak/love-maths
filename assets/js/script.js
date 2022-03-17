// wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them

document.addEventListener('DOMContentLoaded', getButtons);

function getButtons() {
  let buttons = document.getElementsByTagName('button');

  for (let button of buttons) {
    button.addEventListener('click', clickHandler);
  }

  runGame('addition');
}

function clickHandler(e) {
  let buttonType = e.currentTarget.getAttribute('data-type');

  if (buttonType === 'submit') {
    alert('You clicked submit!');
  } else {
    runGame(buttonType);
  }
}

/**
 * The main game "loop", called when the script is first loaded
 * and after the user's answer has been processed
 */

function runGame(gameType) {

  // creates two random numbers between 1 and 25
  let num1 = Math.floor(Math.random() * 25) + 1;
  let num2 = Math.floor(Math.random() * 25) + 1;

  if (gameType === 'addition') {
    displayAdditionQuiestion(num1, num2);
  } else {
    alert(`unknown game type: ${gameType}`);
    throw `unknown game type: ${gameType}. Aborting!`;
  }
}

function checkAnswer() {

}

function calculateCorrectAnswer() {

}

function incrementScore() {

}

function incrementWrongAnswer() {

}

function displayAdditionQuiestion(operand1, operand2) {
  document.getElementById('operand1').textContent = operand1;
  document.getElementById('operand2').textContent = operand2;
  document.getElementById('operator').textContent = '+';
}

function displaySubtractQuestion() {

}

function displayMultiplyQuestion() {

}
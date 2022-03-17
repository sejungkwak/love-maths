// wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them

document.addEventListener('DOMContentLoaded', getButtons);

function getButtons() {
  let buttons = document.getElementsByTagName('button');

  for (let button of buttons) {
    button.addEventListener('click', clickHandler);
  }
}

function clickHandler(e) {
  let buttonType = e.currentTarget.getAttribute('data-type');

  if (buttonType === 'submit') {
    alert('You clicked submit!');
  } else {
    alert(`You clicked ${buttonType}`);
  }
}

function runGame() {

}

function checkAnswer() {

}

function calculateCorrectAnswer() {

}

function incrementScore() {

}

function incrementWrongAnswer() {

}

function displayAdditionQuiestion() {

}

function displaySubtractQuestion() {

}

function displayMultiplyQuestion() {

}
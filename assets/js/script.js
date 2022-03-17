// wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them

document.addEventListener('DOMContentLoaded', getButtons);

function getButtons() {
  let buttons = document.getElementsByTagName('button');

  for (let button of buttons) {
    button.addEventListener('click', clickHandler);
  }

  document.getElementById('answer-box').addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      checkAnswer();
    }
  })

  runGame('addition');
}

function clickHandler(e) {
  let buttonType = e.currentTarget.getAttribute('data-type');

  if (buttonType === 'submit') {
    checkAnswer();
  } else {
    runGame(buttonType);
  }
}

/**
 * The main game "loop", called when the script is first loaded
 * and after the user's answer has been processed
 */

function runGame(gameType) {

  let answerBox = document.getElementById('answer-box');
  answerBox.value = '';
  answerBox.focus();

  // creates two random numbers between 1 and 25
  let num1 = Math.floor(Math.random() * 25) + 1;
  let num2 = Math.floor(Math.random() * 25) + 1;

  if (gameType === 'addition') {
    displayAdditionQuiestion(num1, num2);
  } else if (gameType === 'subtract') {
    displaySubtractQuestion(num1, num2);
  } else if (gameType === 'multiply') {
    displayMultiplyQuestion(num1, num2);
  } else if (gameType === 'division') {
    displayDivisionQuestion(num1, num2);
  } else {
    alert(`unknown game type: ${gameType}`);
    throw `unknown game type: ${gameType}. Aborting!`;
  }
}

/**
 * Checks the answer against the first element in
 * the returned calculateCorrectAnswer array
 */
function checkAnswer() {
  let userAnswer = +document.getElementById('answer-box').value;
  let calculatedAnswer = calculateCorrectAnswer();
  let isCorrect = userAnswer === calculatedAnswer[0];

  if (isCorrect) {
    alert('Hey! You got it right! :D');
    incrementScore();
  } else {
    alert(`Awww... you answered ${userAnswer}. The correct answer was ${calculatedAnswer[0]}`);
    incrementWrongAnswer();
  }

  runGame(calculatedAnswer[1]);
}

/**
 * Gets the operands (the numbers) and the operator (plus, minus, etc)
 * directly from the DOM, and returns the correct answer.
 */
function calculateCorrectAnswer() {
  let operand1 = +document.getElementById('operand1').innerText;
  let operand2 = +document.getElementById('operand2').innerText;
  let operator = document.getElementById('operator').innerText;

  if (operator === '+') {
    return [operand1 + operand2, 'addition'];
  } else if (operator === '-') {
    return [operand1 - operand2, 'subtract'];
  } else if (operator === 'x') {
    return [operand1 * operand2, 'multiply'];
  } else if (operator === '/') {
    return [operand1 / operand2, 'division'];
  } else {
    alert(`unimplemented operator ${operator}`);
    throw `unimplemented operator ${operator}. Aborting!`;
  }
}

/**
 * Gets the current score from the DOM and increments it by 1
 */
function incrementScore() {
  let oldScore = +document.getElementById('score').innerText;
  document.getElementById('score').innerText = ++oldScore;
}

/**
 * Gets the current tally of incorrect answers from the DOM and increments it by 1
 */
function incrementWrongAnswer() {
  let oldScore = +document.getElementById('incorrect').innerText;
  document.getElementById('incorrect').innerText = ++oldScore;
}

function displayAdditionQuiestion(operand1, operand2) {
  document.getElementById('operand1').textContent = operand1;
  document.getElementById('operand2').textContent = operand2;
  document.getElementById('operator').textContent = '+';
}

function displaySubtractQuestion(operand1, operand2) {
  document.getElementById('operand1').textContent = operand1 >= operand2 ? operand1 : operand2;
  document.getElementById('operand2').textContent = operand1 >= operand2 ? operand2 : operand1;
  document.getElementById('operator').textContent = '-';
}

function displayMultiplyQuestion(operand1, operand2) {
  document.getElementById('operand1').textContent = operand1;
  document.getElementById('operand2').textContent = operand2;
  document.getElementById('operator').textContent = 'x';
}

function displayDivisionQuestion(operand1, operand2) {
  document.getElementById('operand1').textContent = operand1 >= operand2 ? operand1 - (operand1 % operand2) : operand2 - (operand2 % operand1);
  document.getElementById('operand2').textContent = operand1 >= operand2 ? operand2 : operand1;
  document.getElementById('operator').textContent = '/';
}
"use strict";

const btn = document.querySelector('.btn');
const submitBtn = document.getElementById('submit-btn');

let submitValue = document.getElementById('submit-value');

let submitId = document.getElementById('submit-id');
let rundeID = document.getElementById('runde-id').innerHTML;
let spillerID = document.getElementById('spiller-id').innerHTML;

let t1 = document.querySelector('.t1');
let t2 = document.querySelector('.t2');
let t3 = document.querySelector('.t3');
let t4 = document.querySelector('.t4');
let t5 = document.querySelector('.t5');

let diceInfo = document.querySelector('.dice-info');

// Round counter
let roundNr = 1;

// EventListener for updating player info and roll dices. End -> Insert dice value to form/scoreboard and show send button.
btn.addEventListener('click', () => {
  if (roundNr <= 3) {
    if (roundNr == 1) {
      diceInfo.innerHTML = 'Trykk paa de terningene du vil beholde. Du har 2 kast igjen';
    } else if (roundNr == 2) {
      diceInfo.innerHTML = 'Trykk paa de terningene du vil beholde. Du har 1 kast igjen ';
    } else {
      diceInfo.innerHTML = 'Send inn ditt trekk';
    }

    if (!t1.classList.contains('check')) {
      t1.innerHTML = rollDice();
    }
    if (!t2.classList.contains('check')) {
      t2.innerHTML = rollDice();
    }
    if (!t3.classList.contains('check')) {
      t3.innerHTML = rollDice();
    }
    if (!t4.classList.contains('check')) {
      t4.innerHTML = rollDice();
    }
    if (!t5.classList.contains('check')) {
      t5.innerHTML = rollDice();
    }

    if (roundNr == 3) {
      let result = antallTerningerPaaKast(parseInt(t1.innerHTML),parseInt(t2.innerHTML),parseInt(t3.innerHTML),parseInt(t4.innerHTML),parseInt(t5.innerHTML),rundeID);
      
      log(rundeID, result, spillerID);
      submitValue.value = result;
      submitId.value = rundeID;
      submitBtn.classList.toggle('show');
    }
    roundNr++;
  }
});

t1.addEventListener('click', () => {
  if (roundNr > 1) {
    t1.classList.toggle('check');
  }
});

t2.addEventListener('click', () => {
  if (roundNr > 1) {
    t2.classList.toggle('check');
  }
});

t3.addEventListener('click', () => {
  if (roundNr > 1) {
    t3.classList.toggle('check');
  }
});

t4.addEventListener('click', () => {
  if (roundNr > 1) {
    t4.classList.toggle('check');
  }
});

t5.addEventListener('click', () => {
  if (roundNr > 1) {
    t5.classList.toggle('check');
  }
});

function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}
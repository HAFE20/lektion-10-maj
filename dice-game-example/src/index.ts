let throws: number = 0; //Antal kast som har gjorts
let currentGoal: number = 1; //Nuvarande tärningsmål som ska slås
let lastThrow: number = 1; //Tidigare tärningskast

interface Dice {
  sides: number,
  throw(): number //En metod som returnerar ett nummer
}

let dice: Dice = {
  sides: 6,
  throw() {
    return Math.ceil(Math.random() * this.sides); //Slumpar ett nummer mellan 1-6
  }
}

const buttonElem: HTMLElement = document.querySelector('button');
const diceElem: HTMLElement = document.querySelector('#diceElem');

buttonElem.addEventListener('click', () => {
  let result: number = dice.throw();

  diceElem.classList.add('dice', `dots-${result}`);
  console.log(`Du slog en ${result}`);
});

/**
 * Typescript - 3 centrala koncept
 * 
 * 1. Alla variabel deklarationer ska ha en datatyp (inklusive funktionsparametrar etc)
 * 2. Definera interface (en sorts ritning) för hur ett objekt ska se ut
 * 3. Ska en funktion returna något och isåfall vad för datatyp? Ifall den inte
 * returnerar något så blir det void
 * 
 */


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

function resetUI(numberOfDices: number): void {
  for(let i: number = 1; i <= numberOfDices; i++) {
    document.querySelector(`.dots-${i}`).classList.add('faded'); //Loopa igenom varje tärning och lägg på klassen faded
  }
}

buttonElem.addEventListener('click', () => {
  //Kastar tärning och sparar resultatet
  let result: number = dice.throw();

  //Visar tärningen i gränssnittet
  diceElem.classList.remove(`dots-${lastThrow}`);
  diceElem.classList.add('dice', `dots-${result}`);
  console.log(`Du slog en ${result}`);

  throws++ //Öka antal kast med 1

  //Om resultat är lika med currentGoal och currentGoal är mindre än 6
  if (result === currentGoal && currentGoal < 6) {
    console.log('Yay, ökar målet');

    document.querySelector(`.dots-${result}`).classList.remove('faded');

    currentGoal++;
  }
  //Annars om resultat är lika med currentGoal och currentGoal är lika med 6
  else if (result === currentGoal && currentGoal === 6) {
    console.log(`Du kastade totalt ${throws} kast!`);

    document.querySelector(`.dots-${result}`).classList.remove('faded');

    setTimeout(() => {
      alert(`Du kastade totalt ${throws} kast!`);
      throws = 0;
      currentGoal = 1;

      resetUI(6);
    }, 100);
  }
  lastThrow = result;
});

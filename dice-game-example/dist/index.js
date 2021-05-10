let throws = 0; //Antal kast som har gjorts
let currentGoal = 1; //Nuvarande tärningsmål som ska slås
let lastThrow = 1; //Tidigare tärningskast
let dice = {
    sides: 6,
    throw() {
        return Math.ceil(Math.random() * this.sides); //Slumpar ett nummer mellan 1-6
    }
};
const buttonElem = document.querySelector('button');
const diceElem = document.querySelector('#diceElem');
buttonElem.addEventListener('click', () => {
    let result = dice.throw();
    diceElem.classList.add('dice', `dots-${result}`);
    console.log(`Du slog en ${result}`);
});

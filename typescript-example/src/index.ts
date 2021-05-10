let greeting: string = 'Hello World';
let booleanValue: boolean = false;
let randomNumber: number = Math.floor(Math.random() * 10);

//Denna variabel kan ha vilken datatyp som helst
let changing: any = 'Hej';
changing = 1;

//Denna array kan ha värden av typen strängar och nummer
let names: (string | number)[] = ['Ada', 'Alice'];

names.push(1);

//Denna variabel kan ha både strängar och booleans
let twoTypes: string | boolean = 'Hej';

//lastname är en frivillig parameter alltså måste inte skickas med i funktionsanrop
//Visas med ? efter parameternamn
function fullname(firstname: string, lastname?: string): string {
  return `${firstname} ${lastname}`;
}

const myName: string = fullname('Christoffer');

//city är en frivillig parameter alltså måste inte användas
//Visas med ? efter egenskapen
interface Person {
  firstname: string,
  lastname: string,
  age: number,
  city?: string
}

let person: Person = {
  firstname: 'Christoffer',
  lastname: 'Wallenberg',
  age: 32
}
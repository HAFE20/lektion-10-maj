let greeting = 'Hello World';
let booleanValue = false;
let randomNumber = Math.floor(Math.random() * 10);
//Denna variabel kan ha vilken datatyp som helst
let changing = 'Hej';
changing = 1;
//Denna array kan ha värden av typen strängar och nummer
let names = ['Ada', 'Alice'];
names.push(1);
//Denna variabel kan ha både strängar och booleans
let twoTypes = 'Hej';
//lastname är en frivillig parameter alltså måste inte skickas med i funktionsanrop
//Visas med ? efter parameternamn
function fullname(firstname, lastname) {
    return `${firstname} ${lastname}`;
}
const myName = fullname('Christoffer');
let person = {
    firstname: 'Christoffer',
    lastname: 'Wallenberg',
    age: 32
};

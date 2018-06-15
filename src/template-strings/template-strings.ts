let names: string = `Javier Ruiz`;

let age: number = 28;

// This is a multiline string
let sentence: string = `Hola, mi nombre es ${ names }.
Este año voy a cumplir ${ age + 1 } años.`;

// This string is printed in two lines
let sentence2: string = "Hola, mi nombre es " + names + ".\n" + "Este año voy a cumplir " + (age + 1) + " años.";

console.log(sentence);
console.log(sentence2);
// String data type
let names: string = 'Tu nombre';
names = 'Otro nombre'; // This is a correct assignment
names = 2 // Cannot assign a number to as string

// Number data type
let age: number = 29;
age = 0xf00d; // Es hexadecimal y es correcto
age = '3'; // Es un string e incorrecto

// Boolean data type
var havePets: boolean = true;
havePets = false; // This is a correct assignment
havePets = 3 // You cannot assign a number to a boolean

// Ejemplo
const test = names + havePets; // No se puede sumar number + boolean
console.log(test);
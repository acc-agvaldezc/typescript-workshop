let arrayNumber: number[] = [1, 2, 3];
let arrayString: string[] = ['1', '2', '3'];

// This is equivalent to the lines declared before
// This uses a template type (Array<T>)
let arrayNumber2: Array<number> = [1, 2, 3];
let arrayString2: Array<string> = ['1', '2', '3'];

// When you know know the order of the data inside the array
//  you can declare it using the type names.
// This is called a tuple
let array: [string, number];
array = ['Hola', 2]; // This is a correct assignment
array = [2, 'hola']; // This is an incorrect assignment

// When you want to have an array populated by multiple types
//  use the any type
let arrayMixed: any[] = [2, '5', 3];
/* THIS IS AN EXTERNAL DEPENDENCY TO COLOR OUTPUT */
let colors = require('colors'); // ECMAScript import statement

// This is a regular TypeScript function
function createCube(size: number): Object {
    let cube = {
        size: size,
        faceArea: this.size ** 2,
        volume: this.size ** 3
    };

    return cube;
};

// This is a default parameter function
// If this function is called but no parameter is given
//  it assigns the default value of 2 to size parameter.
function defaultCube(size: number = 2): Object {
    let cube = {
        size: size,
        faceArea: this.size ** 2,
        volume: this.size ** 3
    };

    return cube
};

// This is a common function that takes a function reference as a parameter
function useArrowFunction(arrowFunction: Function): void {
    // Here you need a function reference to call it.
    arrowFunction();
};

// This is an arrow function
// This notation can be used instead of generating a function and then
//  passing its reference as a parameter to be used
useArrowFunction(() => {
    console.log(colors.cyan('This is an arrow/lambda function'));
});

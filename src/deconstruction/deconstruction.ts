//Old Way
let values = [9.99, .50];
let oldTotal = values[0],
    oldTax = values[1];

//New Way (Destructuring)
let [total, tax] = [9.99, .50];
let {total2, tax2} = { total2: total, tax2: tax };

console.log('Destructuring an array.');
console.log('Total: ' + total + ' Tax: ' + tax);

console.log('\nDestructuring an object literal.');
console.log('Total2: ' + total2 + ' Tax2: ' + tax2);

let colors = ['red', 'yellow', 'green'],
    redOld = colors[0],
    yellowOld = colors[1],
    greenOld = colors[2];

let [red, yellow, green] = ['red', 'yellow', 'green'];
console.log(`Destructuring colors: ${red} ${yellow} ${green}`);

let [red2, , green2] = ['red', 'yellow', 'green'];
console.log(`Destructuring with an ignore: ${red2} ${green2}`);
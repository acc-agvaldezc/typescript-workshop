let ages: number[] = [2, 10, 20, 23, 40, 12];

// The iterator of gives you the reference to the object that is pointed inside the array
for (let age of ages) {
    console.log(age); // This will print the exact values inside the array one by one
}

// The iterator in gives you the index of the element inside the array
for (let age in ages) {
    console.log(age);
    //0, 1, 2, 3, 4, 5
}

// This will print the numbers using index access on the ages array
for (let age in ages) {
    console.log(ages[age]);
}
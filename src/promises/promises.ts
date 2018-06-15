// Example of successful Promise resolution
const promise = new Promise((resolve, reject) => {
    resolve(123);
});
promise.then((res) => {
    console.log('I get called:', res === 123); // I get called: true
});
promise.catch((err) => {
    // This is never called
});

// Example of failing Promise resolution
const promise2 = new Promise((resolve, reject) => {
    reject(new Error("Something awful happened"));
});
promise2.then((res) => {
    // This is never called
});
promise2.catch((err) => {
    console.log('I get called:', err.message); // I get called: 'Something awful happened'
});

// Example of Promise Chaining
Promise.reject(new Error('something bad happened'))
    .then((res) => {
        console.log(res); // not called
        return 456;
    })
    .then((res) => {
        console.log(res); // not called
        return 123;
    })
    .then((res) => {
        console.log(res); // not called
        return 123;
    })
    .catch((err) => {
        console.log(err.message); // something bad happened
    });


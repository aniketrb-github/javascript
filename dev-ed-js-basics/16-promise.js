// --------- ES6 - PROMISE -----------
const dbPromise = new Promise((resolve, reject) => {
    // All code written here is Async
    setTimeout(() => {
        resolve({userName: 'Roger31', password: 'a12f41sd4131svcxa14ds14'}); 
        //reject(new Error("Database layer exception"));
    }, 500);
});

// async promise if success then work on data received
dbPromise.then(data => {
    console.log(data);
}) // if the then() fails due to error then display the error or whatever
.catch(error => {
    console.error(error);
});


// --------- PROMISE Example-2 --------- 
let promise = new Promise((resolve, reject) => {
    let a = 11 + 1;
    if(a == 2) {
        resolve("Success! . . GreatWork!");
    } else {
        reject("Failure. . .Shame on you!");
    }
});

promise.then((msg1) => {
    console.log(msg1);
})
.catch(msg2 => {
    console.error(msg2);
});

// --------- Promise Example-3 --------- 
const switch2Promise = new Promise((resolve, reject) => {
    resolve("Switch 2 completed!");
});

const frenchPromise = new Promise((resolve, reject) => {
    resolve("French Language learning resumed!");
});

const forces = new Promise((resolve, reject) => {
    resolve("Greate! joined forces!");
});

// when we want multiple promise to execute & write a common then & catch
Promise.all([
    switch2Promise, frenchPromise, forces
]).then((message) => {
    console.log(message);
}).catch((error) => {
    console.error(error);
});
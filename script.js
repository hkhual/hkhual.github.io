

// document.getElementById("projects").innerText = "Hello World";

function f1() {
    console.log('f1');
}

function f2() {
    console.log('f2');
}

function f3() {
    console.log('f3');
}

function main() {
    console.log('main');

    setTimeout(f1, 0);

    new Promise((resolve, reject) =>
        resolve('I am a promise')).then(resolve => console.log(resolve))

    f2();
    f3();
}

main();

const promise = new Promise((resolve, reject) => {
    resolve('I am a resolved promise');
})

promise.then(result => console.log(result));



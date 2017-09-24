/**
 * Timer functions
 */
let waitTime = 3000;

let waitIntervel = 500;

let currentWaiting = 0;

console.log(`Please wait for ${ Math.floor(waitTime/1000)} seconds`)
function showPercentage(p) {

    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    process.stdout.write(` Waiting ... ${p}%`)

}

showPercentage(0)

let interval = setInterval(function() {

    currentWaiting  += waitIntervel;

    showPercentage((Math.floor((currentWaiting/waitTime)*100)))

},waitIntervel);


setTimeout(function () {
    clearTimeout(interval);
    showPercentage(100)
    console.log('!! DONE !! ');
}, waitTime)


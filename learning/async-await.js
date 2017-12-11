console.log('Async Await')

function Stuffs() {

    let name = "";

    return new Promise((resolve, reject) => {
        setTimeout(function() {
            name = "Sarath";
            resolve(name)
        },2000)
    });

    

} 

async function  getStuffs() {

    let newname = await Stuffs()

    console.log(`Name is ${newname}`)

    return newname;

}

let p = getStuffs();

p.then(data => {
    console.log(`Promise resolved ${data}`)
})
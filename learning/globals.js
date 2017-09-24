

// __dirname
console.log(__dirname) // => Current directory path

// __filename 
console.log(__filename) // => Current file path


// The process object;

console.log(process.version)

console.log(process.arch)



console.log('process.env', process.env)
process.on('exit', code => {
    console.log(`About to exit with the code ${code}`)
})
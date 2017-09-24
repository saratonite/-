// Standard Input and Output
process.stdout.write('Hello\n')
process.stdout.write('World \n')

let questions = [
    'What is your name?',
    'What is your age?'
]

let answers = [];


function ask(index) {
    process.stdout.write(` ${questions[index]} \n\n`);
}


ask(0);


process.stdin.on('data', function(data) {
    //console.log(data.toString());

    answers.push(data.toString().trim());

    if(answers.length < questions.length) {
        ask(answers.length);
    }
    else {
        process.exit();
    }
    
})

process.on('exit', function() {

    console.log('In Summery : %j',answers);
})
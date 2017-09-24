var Person = require('./libs/Person');

var max = new Person('max');
max.say('Hello');
max.say('How are you');

max.on('complete', function(text) {
    console.log(` ${this.name} :: %j`,this.sayings)
})

max.finish('Thanks');

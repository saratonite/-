var EventEmitter = require('events').EventEmitter;
var util = require('util');



function Person( name ) {

    this.name = name;

    this.sayings = [];

    

}

util.inherits(Person,EventEmitter);

// Person.prototype = EventEmitter.prototype;

Person.prototype.say = function(says) {


    this.sayings.push(says);
    console.log(`${this.name} says ${says}`);

}

Person.prototype.finish = function(text) {
    this.say(text)
    this.emit('complete')
}
module.exports = Person;
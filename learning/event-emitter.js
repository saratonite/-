/**
 * Node event emitter
 */

var events = require('events');
var util = require('util');

var myEmitter = new events.EventEmitter();

myEmitter.on('someEvent',function(data){
  console.log(data);
})

myEmitter.emit('someEvent','Hello Universe');

// Inherit EventEmitter

function Person(name){
  this.name = name;
}

util.inherits(Person,events.EventEmitter);

var me = new Person("Sarath");
me.on('speak',function(data){
  //console.log(this);
  console.log(this.name + "  says, "+data);
})
me.on('speak',function(data){
  //console.log(this);
  console.log(this.name + "  -------says, "+data);
})


me.emit('speak','Hello');

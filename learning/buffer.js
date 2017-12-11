/**
 * 
 * 
 * Buffer - Buffer class is a global class 
 */

 // Method 1
let buf1 = new Buffer(10);

console.log(buf1)
console.log(buf1.toString())


// Method 2 Create buffer from array

let buf2 = new Buffer([1,2,3,4,5,6]);

console.log(buf2)
console.log(buf2.toString("ascii"))

// Method 3 Following is the syntax to create a Buffer from a given string and optionally 

let buf3 = new Buffer("Hello World","utf-8")
console.log(buf3);
console.log(buf3.toString())

// Write Buffer

let len = buf3.write("Hey Kid")

console.log(len)

console.log(buf3.toString())

// Append Buffer

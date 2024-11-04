// Start by manipulating a simple string

let str = "Hello World";

//Extract a substring from the string

let substring = str.substring(0,5); //Does not include the element at the last index

let newstr = str.replace("World","Universe");

let lowercase = str.toLowerCase();

console.log("Original string " + str);
console.log("Substring " + substring)
console.log("New String " + newstr);
console.log("Lower case " + lowercase);
// Start by manipulating a simple string

let str = "Hello World";

//Extract a substring from the string

let substring = str.substring(0,5); //Does not include the element at the last index

let newstr = str.replace("World","Universe");

let lowercase = str.toLowerCase();

console.log("Original string : " + str);
console.log("Substring : " + substring)
console.log("New String : " + newstr);
console.log("Lower case : " + lowercase);





//Search and replace


const originalStory = `The quick brown fox jumps over the lazy dog
The quick brown fox is known for its agility`

console.log(originalStory);


//Perform search and replace

const manipulatedStory = originalStory.replace(/quick/g, "slow");

console.log(manipulatedStory);
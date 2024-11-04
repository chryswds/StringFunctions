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

const manipulatedStory = originalStory.replace(/quick/g, "slow");// /g - REGEX

console.log(manipulatedStory);



//Function to validate and process email

function validateEmail(email) {
    //Validate the email
    //Email: username @ company . domain
    const emailRegex = /^[a-zA-Z0-9._-]{2,}@[a-zA-Z0-9_.-]{2,}\.[a-zA-Z]{2,} $/
    //+ is used for repetition but this case uses explicit limits {2,}


    //Validate that we have an email that complies with the requirement

    if(emailRegex.test(email)) {
        //if the email passes the regex test
        //We get a true and do the following
        return email.toLowerCase();
    }
    else {

        return "Invalid Email Format!"
    }

}

//test email input and check if they comply
const userEmail = "John.Doe@example.com"

console.log(userEmail);

//Format the email and return the email if it passes in small letters
const formattedEmail = validateEmail(userEmail);

console.log(formattedEmail);
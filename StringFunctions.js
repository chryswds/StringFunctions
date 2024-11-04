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



//Simulate CSV data Structure
//Using template Literals
const csvData = `"John Doe", 30, "John.Doe@example.com"
"Jane Smith", 25, "Jane_Smith@example.com"
"Michael Johnson", 37, "MichaelJohnson@example.com"`

//Create a function to process this data
//Making sure the file follows a csv data structure

function processCSVData(csvData){
    //Split the columns and rows
    const rows = csvData.split('\n'); //the data is separated by line breaks \n
    const formattedData = rows.map(row => {
        //Iterating and mapping all the values in the rows
        //csv, comma separated

        const columns = row.split(',');
        //C and R "michal Johnson" == [0,2]
        //C and R

        return{
            //return a key:value pair data structure
            name : columns[0].replace(/"/g, '').trim(),
            //name == C0 and R0 == "John Doe" -> replace "" with nothing = John Doe
            age : parseInt(columns[1]),
            email : columns[2].replace(/"/g, '').trim()
            //Name: John Doe
            //Age: 30
            //Email: John.Doe@example.com
        };
    });
    return formattedData; //contains the C and R matrix as Key:Value pairs
}

const formattedCSVData = processCSVData(csvData);
console.log("Formatted Data: ", formattedCSVData);




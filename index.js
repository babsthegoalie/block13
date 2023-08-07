//IS TRUTHY

// Define a function to check if a value is truthy or falsy
 function checkTruthyFalsy(value) {
    // Check if the value is truthy
    if (value) {
        console.log("true"); // Print "true" if the value is truthy
    } else if (value === false) {
        console.log("The boolean value false is falsy"); // Print if the value is exactly false
    } else if (value === null) {
        console.log("The null value is falsy"); // Print if the value is exactly null
    } else if (value === undefined) {
        console.log("undefined is falsy"); // Print if the value is exactly undefined
    } else if (value === 0) {
        console.log("The number 0 is falsy (the only falsy number)"); // Print if the value is exactly 0
    } else if (value === "") {
        console.log("The empty string is falsy (the only falsy string)"); // Print if the value is an empty string
    }
}

    // Test truthy/falsy statements
    checkTruthyFalsy("I am a string"); // Will print "true"
    checkTruthyFalsy(false); // Will print "The boolean value false is falsy"
    checkTruthyFalsy(null); // Will print "The null value is falsy"
    checkTruthyFalsy(undefined); // Will print "undefined is falsy"
    checkTruthyFalsy(0); // Will print "The number 0 is falsy (the only falsy number)"
    checkTruthyFalsy(""); // Will print "The empty string is falsy (the only falsy string)"


// NUMBER LINE

    // Define the two numbers
            let num1 = -5; // First number
            let num2 = 0; // Second number
            
            // Calculate the sum of the two numbers
            const sum = num1 + num2;
    
            // Check different conditions using if/else statements
            if (sum < -1000) {
                // Print if sum is less than -1000
                console.log(sum + " is less than -1000");
            } else if (sum < 0) {
                // Print if sum is negative
                console.log(sum + " is a negative number");
            } else if (sum === 0) {
                // Print if sum is equal to 0
                console.log(sum + " is equal to 0");
            } else if (sum > 0 && sum <= 100) {
                // Print if sum is larger than 0 but not greater than 100
                console.log(sum + " is greater than 0");
            } else {
                // Print if sum is greater than 100
                console.log(sum + " is greater than 100");
            }



// GREATER THAN 5


function checkBothGreaterOrEqual(num1, num2) {
    // If num1 is greater than or equal to 5 AND num2 is greater than or equal to 5 print "true"
    if (num1 >= 5 && num2 >= 5) {
      console.log(true);
    } // Otherwise print "false"
    else {
      console.log(false);
    }
  }

  // Test values
checkBothGreaterOrEqual(5, 6); // Should print true
checkBothGreaterOrEqual(10, 11); // Should print true
checkBothGreaterOrEqual(0, 0); // Should print false
checkBothGreaterOrEqual(1000, -1000); // Should print false
checkBothGreaterOrEqual(6, 4); // Should print false
checkBothGreaterOrEqual(5, 5); // Should print true




// PAIR & COMPARE

// Compare param2A and param2B using strict equality
// If either of the comparisons is truthy, print true
// Otherwise, print false

// Test values:

let param1A = "cat";
let param1B = "cat";
let param2A = 6;
let param2B = "6";


// let param1A = "five";
// let param1B = 5;
// let param2A = "dog";
// let param2B = "dawg";


// let param1A = 0;
// let param1B = false;
// let param2A = "horse";
// let param2B = "horse";


// let param1A = "eight";
// let param1B = "eight";
// let param2A = "ate";
// let param2B = "ate";


// let param1A = 11;
// let param1B = "eleven";
// let param2A = "four";
// let param2B = "for";


// let param1A = "cake";
// let param1B = "cake";
// let param2A = "pie";
// let param2B = "pie";

// Compare pairs and print result
if (param1A === param1B || param2A === param2B) {
    console.log(true);
} else {
    console.log(false);
}

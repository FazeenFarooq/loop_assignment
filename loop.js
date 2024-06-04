// ################  Creating a Lesson Plan(Using for loop ) ###################
// Step 1: Create an empty array to hold lesson objects
var myWork = [];
// Step 2: Use a loop to create lessons
for (var i_1 = 1; i_1 <= 10; i_1++) {
    // Step 2a: Create an object representing a lesson
    var lessonName = "Lesson ".concat(i_1);
    // Step 2b: Set the status property using a ternary operator
    var lessonStatus = (i_1 % 2 === 0) ? false : true;
    var lesson = {
        name: lessonName,
        status: lessonStatus
    };
    // Step 3: Add the lesson to the array
    myWork.push(lesson);
}
// Step 4: Print the result
console.log(myWork);
// ################## Guessing Game (Using while loop ) ###################
// Step 1: Set a maximum value
var maxValue = 10;
// Step 2: Generate a random number
var randomNumber = Math.floor(Math.random() * maxValue) + 1;
console.log("Random Number:", randomNumber);
// Step 3: Track the guess status
var correctGuess = false;
// Step 4: Predefined guesses
var guesses = [3, 17, 5, 9, 2];
// Step 5: Iterate over guesses using a while loop
var i = 0;
while (i < guesses.length && !correctGuess) {
    var currentGuess = guesses[i];
    console.log(guesses[i]);
    // Step 6: Check user's guess
    if (currentGuess === randomNumber) {
        console.log("Congratulations! You guessed the correct number:", randomNumber);
        correctGuess = true;
    }
    else if (currentGuess < randomNumber) {
        console.log("Too low. Try again with a higher number.");
    }
    else {
        console.log("Too high. Try again with a lower number.");
    }
    i++;
}
if (!correctGuess) {
    console.log("Sorry, you've used all your guesses. The correct number was:", randomNumber);
}
// ################# Counter Incrementer (Using do while loop ) #############
// Step 1: Set the starting counter to 0
var counter = 0;
// Step 2: Define a variable to hold the step value
var step = 5;
// Step 3: Use a do...while loop to print the counter and increment it by the step value
do {
    console.log("Counter:", counter);
    counter += step;
    // Step 4: Continue the loop until the counter reaches or exceeds 100
} while (counter < 100);
// ################ Exploring Objects with for...in Loop #############
// Step 1: Create a simple object with three items
var myObject = {
    item1: "APPLE",
    item2: "MANGO",
    item3: "BANANA"
};
// Step 2: Use a for...in loop to iterate through the properties of myObject and print it's value and property
for (var key in myObject) {
    console.log("Property:", key, "\n", "Value:", myObject[key]);
}
// ########### Exploring Arrays with Loops(Using loop ) #############
// Step 1: Create an empty array
var myArray = [];
// Step 2: Run a loop 10 times, adding a new incrementing value to the array
for (var i_2 = 1; i_2 <= 10; i_2++) {
    // Add a new incrementing value to myArray
    myArray.push(i_2);
}
// Step 3: Log the array into the console
console.log("myArray:", myArray);
// Step 4: Use a for loop to iterate through the array elements and output each element with its index
console.log("Using a for loop:");
for (var i_3 = 0; i_3 < myArray.length; i_3++) {
    console.log("Index:", i_3, "Value:", myArray[i_3]);
}
// Step 5: Use a for...of loop to output the value directly into the console
console.log("Using a for...of loop:");
for (var _i = 0, myArray_1 = myArray; _i < myArray_1.length; _i++) {
    var value = myArray_1[_i];
    console.log("Value:", value);
}

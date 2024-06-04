// ################  Creating a Lesson Plan(Using for loop ) ###################

// Step 1: Create an empty array to hold lesson objects
let myWork = [] as { name: string; status: boolean }[];

// Step 2: Use a loop to create lessons
for (let i = 1; i <= 10; i++) {
    // Step 2a: Create an object representing a lesson
    const lessonName = `Lesson ${i}`;
    // Step 2b: Set the status property using a ternary operator
    const lessonStatus = (i % 2 === 0) ? false : true;
    const lesson = { 
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
const maxValue = 10;

// Step 2: Generate a random number
const randomNumber = Math.floor(Math.random() * maxValue) + 1;
console.log("Random Number:", randomNumber);

// Step 3: Track the guess status
let correctGuess = false;

// Step 4: Predefined guesses
const guesses = [3, 17, 5, 9, 2];

// Step 5: Iterate over guesses using a while loop
let i = 0;
while (i < guesses.length && !correctGuess) {
    const currentGuess = guesses[i];
    console.log(guesses[i]);
    
    // Step 6: Check user's guess
    if (currentGuess === randomNumber) {
        console.log("Congratulations! You guessed the correct number:", randomNumber);
        correctGuess = true;
    } else if (currentGuess < randomNumber) {
        console.log("Too low. Try again with a higher number.");
    } else {
        console.log("Too high. Try again with a lower number.");
    }
    
    i++; 
}

if (!correctGuess) {
    console.log("Sorry, you've used all your guesses. The correct number was:", randomNumber);
}


// ################# Counter Incrementer (Using do while loop ) #############

// Step 1: Set the starting counter to 0
let counter = 0;

// Step 2: Define a variable to hold the step value
const step = 5; 

// Step 3: Use a do...while loop to print the counter and increment it by the step value
do {
    console.log("Counter:", counter);
    counter += step;
    
// Step 4: Continue the loop until the counter reaches or exceeds 100
} while (counter < 100);


// ################ Exploring Objects with for...in Loop #############

// Step 1: Create a simple object with three items
let myObject = {
    item1: "APPLE",
    item2: "MANGO",
    item3: "BANANA"
};

// Step 2: Use a for...in loop to iterate through the properties of myObject and print it's value and property
for (let key in myObject) {
    console.log("Property:", key,"\n","Value:", myObject[key]);
}


// ########### Exploring Arrays with Loops(Using loop ) #############

// Step 1: Create an empty array
let myArray: number[] = [];

// Step 2: Run a loop 10 times, adding a new incrementing value to the array
for (let i = 1; i <= 10; i++) {
    myArray.push(i);
}

// Step 3: Log the array into the console
console.log("myArray:", myArray);

// Step 4: Use a for loop to iterate through the array elements and output each element with its index
console.log("Using a for loop:");
for (let i = 0; i < myArray.length; i++) {
    console.log("Index:", i, "Value:", myArray[i]);
}

// Step 5: Use a for...of loop to output the value directly into the console
console.log("Using a for...of loop:");
for (const value of myArray) {
    console.log("Value:", value);
}

/*Practice exercise 5.1
In this exercise we will create a number guessing game that takes user input and 
replies based on how accurate the user's guess was.
1. Create a variable to be used as the max value for the number guessing game.
2. Generate a random number for the solution using Math.random() and 
Math.floor(). You will also need to add 1 so that the value is returned as 
1-[whatever the set max value is]. You can log this value to the console for 
development to see the value as you create the game, then when the game is 
complete you can comment out this console output.
Chapter 5
[ 91 ]
3. Create a variable that will be used for tracking whether the answer is correct 
or not and set it to a default Boolean value of false. We can update it to be 
true if the user guess is a match. 
4. Use a while loop to iterate a prompt that asks the user to enter a number 
between 1 and 5, and convert the response into a number in order to match 
the data type of the random number.
5. Inside the while loop, check using a condition to see if the prompt value is 
equal to the solution number. Apply logic such that if the number is correct, 
you set the status to true and break out of the loop. Provide the player with 
some feedback as to whether the guess was high or low, and initiate another 
prompt until the user guesses correctly. In this way we use the loop to keep 
asking until the solution is correct, and at that point we can stop the iteration 
of the block of code*/

 /*const  maxValue = 5
 const solution =  Math.floor(Math.random()*maxValue +1);
 let iscorrect = false;
 while (!iscorrect) {
    
    const userGuess = parseInt(prompt(`Enter a number between 1 and ${maxValue}:`), 10);
    if (userGuess === solution) {
        isCorrect = true;
        alert("Congratulations! You guessed the correct number!");
    } else {
        const feedback = userGuess > solution ? "Too high!" : "Too low!";
        alert(`Incorrect! ${feedback} Try again.`);
    }} /*

/*Practice exercise 5.2
In this exercise, we will create a basic counter that will increase a dynamic variable 
by a consistent step value, up to an upper limit.
1. Set the starting counter to 0
2. Create a variable, step, to increase your counter by
3. Add a do while loop, printing the counter to the console and incrementing it 
by the step amount each loop
4. Continue to loop until the counter is equal to 100 or more than 100*/

let Counter= 0
let step = 10;

do {
    console.log("Counter:", Counter);
    Counter += step;
} while (Counter < 100)




//EXERCISE NO 5.3

// Step 1: Setup a blank array, myWork.
let myWork = [];

// Step 2-5: Create lessons and push them to the myWork array.
for (let i = 1; i <= 10; i++) {
  // Step 3: Use a ternary operator for alternating true/false status.
  let status = i % 2 === 0 ? true : false;

  // Step 4: Create a lesson using a temporary object variable.
  let lesson = {
    name: `Lesson ${i}`,
    status: status
  };

  // Step 5: Push the object to the myWork array.
  myWork.push(lesson);
}

// Step 6: Output the array to the console.
console.log(myWork);

//EXERCISE NO 5.4

// Step 1: Create an empty array to hold table data
let myTable = [];

// Step 2: Set variable values for the number of rows and columns
let numRows = 3; // Set the desired number of rows
let numCols = 4; // Set the desired number of columns

// Step 3: Set up a counter variable with an initial value of 0
let counter = 0;

// Step 4: Create a for loop to construct each row of the table
for (let i = 0; i < numRows; i++) {
    // Set up a temporary array to hold each row of data
    let tempTable = [];

    // Step 5: Nest a second loop to count the columns
    for (let j = 0; j < numCols; j++) {
        // Step 6: Increment the main counter
        counter++;

        // Step 7: Push counter values to the temporary array
        tempTable.push(counter);
    }

    // Step 8: Push the temporary array to the main table
    myTable.push(tempTable);
}

// Step 9: Output the table structure to the console
console.table(myTable);

//Exercise 5.5
// Step 1: Create a grid array variable.
let grid = [];

// Step 2: Set a value of 64 for the number of cells.
const numberOfCells = 64;

// Step 3: Set a counter to 0.
let coounter = 0;

// Step 4: Create a global variable to be used for the row array.
let row = [];

// Step 5: Create a loop that will iterate up to the number of cells you want in the array.
for (let i = 0; i <= numberOfCells; i++) {
  
  // Step 6: Add an outer if statement to check if the counter is divisible by 8.
  if (coounter % 8 === 0) {
    
    // Step 7: Inside the if statement, check if the row is undefined.
    if (row !== undefined) {
      // Add the row to the main grid array.
      grid.push(row);
    }

    // Step 8: If the counter is divisible by 8, clear the row array.
    if (coounter % 8 === 0) {
      row = [];
    }
  }

  // Step 9: Increment the main counter by 1.
  coounter++;

  // Step 10: Set up a temporary variable to hold the value of the counter and push it to the row array.
  let tempValue = coounter;
  row.push(tempValue);

  // Step 11: Within the loop iteration, check if the value of the counter is equal to the total number of columns you want.
  if (coounter === 8) {
    // Add the current row to the grid.
    grid.push(row);
  }
}

// Step 12: Output the grid into the console.
console.log(grid);

//EXERCISE 5.6
// Step 1: Create an empty array
let myArray = [];

// Step 2: Run a loop 10 times, adding a new incrementing value to the array
for (let i = 0; i < 10; i++) {
  myArray.push(i + 1);
}

// Step 3: Log the array into the console
console.log("Array:", myArray);

// Step 4: Use the for loop to iterate through the array and output into the console
console.log("Using for loop:");
for (let j = 0; j < myArray.length; j++) {
  console.log("Index", j, ":", myArray[j]);
}

// Step 5: Use the for of loop to output the value into the console from the array
console.log("Using for...of loop:");
for (const value of myArray) {
  console.log(value);
}
 //EXERCISE NO 5.7
 // 1. Create a simple object with three items
const myObject = {
  item1: "Apple",
  item2: "Banana",
  item3: "Orange",
};

// 2. Using the for...in loop for the object
console.log("Object Properties and Values:");
for (const key in myObject) {
  if (myObject.hasOwnProperty(key)) {
    console.log(`${key}: ${myObject[key]}`);
  }
}

// 3. Create an array containing the same three items
const MyArray = ["Apple", "Banana", "Orange"];

// Using a for loop for the array
console.log("\nArray Values:");
for (let i = 0; i < MyArray.length; i++) {
  console.log(MyArray[i]);
}
//EXERCISE NO 5.8
// Step 1: Set up a string variable to use as output.
let output = "";

// Step 2: Select a number to skip and set that number as a variable.
const skipNumber = 3; // Change this to the number you want to skip

// Step 3: Create a for loop that counts to 10.
for (let i = 1; i <= 10; i++) {
  // Step 4: Add a condition to check if the value of the looped variable is equal to the number that should be skipped.
  if (i === skipNumber) {
    // Step 5: If the number is to be skipped in the condition, continue to the next number.
    continue; // Change to 'break' in the next step to see the difference
  }

  // Step 6: As you iterate through the values, append the new count value to the end of the main output variable.
  output += i + " ";
}

// Step 7: Output the main variable after the loop completes.
console.log("Output:", output);

// Step 8: Reuse the code, but change 'continue' to 'break' and see the difference. It should now stop at the skip value in JavaScript.
let outputWithBreak = "";

for (let i = 1; i <= 10; i++) {
  if (i === skipNumber) {
    break; // Change to 'continue' to see the difference
  }

  outputWithBreak += i + " ";
}

console.log("Output with break:", outputWithBreak);



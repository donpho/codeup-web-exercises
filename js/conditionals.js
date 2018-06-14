"use strict";

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 */
function numberId(number) {
    number = parseInt(number);
    // parseInt(number);
    console.log(number);
    if (number % 2 === 0){
        alert('Your number is even.')
    }
    else {
        alert('Your number is odd');
    }
    number += 100;
    alert('The number you enter + 100 is ' + number);
    number -= 100;
    if (number <= 0){
        alert('Your number is negative.');
    }
    else {
        alert('Your number is positive');
    }
    return "This is the end of this exercise."
}

var user = confirm('Would you like to enter a number?');
if (user === true){
    alert(numberId(prompt('Please enter a number')));
}
else {
    alert('Ok, have a nice day!')
}

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined above, if the color passed is not
 * one of the ones defined above, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color everytime the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message everytime you refresh the page
 */

function color() {
    return randomColor;
}
console.log(color());

/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */

switch (randomColor) {
    case "red" :
        alert('Maybe its ' + randomColor + ' like roses.');
        break;
    case "orange" :
        alert('Annoying ' + randomColor);
        break;
    case "yellow" :
        alert(randomColor + ' beauty burns gold.');
        break;
    case "green" :
        alert('Is your grass ' + randomColor + '?');
        break;
    case "blue" :
        alert('A good beach will have clear ' + randomColor + ' water');
        break;
    case "indigo" :
        alert('What is the difference between ' + randomColor + " and violet");
        break;
    case "violet" :
        alert('What is the difference between ' + randomColor + " and indigo");
        break;
    default:
        alert('Something went wrong!');
}

/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

function analyzeColor(userColor) {

    //Both switch and if else works just comment one out to use. Did this just for practice both conditionals.

    // switch (userColor) {
    //     case "blue" :
    //         return "Hey you guessed right!";
    //     case "green" :
    //         return "Good guess!";
    //     default:
    //         return "Sorry but " + userColor + " is not the color that I am thinking of."
    // }


    if (userColor === "red"){
        return "Red like roses fills my dreams and brings me to the place you rest.";
    }
    else if (userColor === "white"){
        return "White is cold and always yearning, burdened by a royal test.";
    }
    else if (userColor === "black"){
        return "Black the beast descends from shadows.";
    }
    else if (userColor === "yellow") {
        return "Yellow beauty burns gold."
    }
    else {
        return "Ooh, sorry, but " + userColor + " is not the color that I am thinking of!"
    }

}
alert(analyzeColor(prompt('Find what color am I thinking of?')));


/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */
var random = Math.floor((Math.random() * 6));
console.log(random);
alert('You pulled a Lucky #' + random + '!');
function calculateTotal(random,total) {
    total = parseInt(total);
    if (random === 1) {
        alert("You received a 10% discount!");
        return total - (total*.1);
    }
    else if (random === 2) {
        alert("You received a 25% discount!");
        return total - (total*.25);
    }
    else if (random === 3) {
        alert("You received a 35% discount!");
        return total - (total*.35);
    }
    else if (random === 4) {
        alert("You received a 50% discount!");
        return total - (total*.50);
    }
    else if (random === 5) {
        alert("You received a 100% discount!");
        return total - (total*1.00);
    }
    else {
        alert("You received no discount");
        return total;
    }
}
alert("$" + calculateTotal(random,prompt('What is your total?'))+" is your total.");

/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
// var luckyNumber = Math.floor(Math.random() * 6);
// Should have combine this TODO and the TODO above.
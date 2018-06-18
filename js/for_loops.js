"use strict";

(function () {
console.log('Testing from for_loops.js');
    //Create a function named showMultiplicationTable that accepts a number and console.logs the multiplication table for that number (just multiply by the numbers 1 through 10)
   //showMultiplicationTable(prompt('Please enter a number.'));
    function showMultiplicationTable(input) {
        input = parseInt(input);
        for (var x = 1;x <= 10; x++){
            console.log(input + ' x ' + x + " = " + (input*x));
        }
    }
    //Use a for loop and the code from the previous lessons to generate 10 random numbers between 20 and 200 and output to the console whether each number is odd or even.
    var number = Math.floor(Math.random() *180)+20;
    function OddsOrEven(generated) {
        for (var y =0; y<10; y++){
            generated = Math.floor(Math.random() *180)+20;
            if(generated % 2 === 0)
            {
                console.log(generated + ' is even.');
            }
            else {
                console.log(generated + ' is odd.');
            }
        }
    }
    //OddsOrEven(number);

    function stacked() {
        var num = "";
        for (var z = 1; z < 10; z++){
            num = z.toString();
            console.log(num.repeat(z));
        }
    }
    //stacked();
    //console.log("test".repeat(5));

    function decrement() {
        for ( var x = 100; x>0; x -= 5){
            console.log(x);
        }
    }
    //decrement();
})();
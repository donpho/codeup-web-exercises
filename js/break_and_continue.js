"use strict";
(function () {
console.log('Testing from break_and_continue.js');
    userNumber(prompt('Please enter an odd number between 0 to 50.'));
    function userNumber(someOddNumber) {
        someOddNumber = parseInt(someOddNumber);
        if (someOddNumber % 2 === 0){
            console.log("Sorry this is an even number.");
        }
        else if (someOddNumber >= 50){
            console.log('Sorry that number is too big!')
        }
        else{
            for (var i = 1; i < 50; i++) {

                if (i % 2 === 0) {
                    // number is even
                    // even numbers aren't as cool
                    // skip the rest of the loop and continue with the next iteration
                    continue;
                }
                else if (someOddNumber === i){
                    console.log('Yikes! Skipping number: ' + i);
                    continue;
                }

                console.log('Here is an odd number: ' + i);
            }
        }
    }
})();
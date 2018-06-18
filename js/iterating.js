(function(){
    "use strict";

    /**
     * TODO:
     * Create an array of 4 people's names and store it in a variable called
     * 'names'.
     */
    var names= ['Bob', 'Bobby', 'Bill', 'Billy'];
    /**
     * TODO:
     * Create a log statement that will log the number of elements in the names
     * array.
     */
    console.log('The number of elements in this array is: ' + names.length);
    /**
     * TODO:
     * Create log statements that will print each of the names individually by
     * accessing each element's index.
     */
    function log() {
        for (var x = 0; x < names.length; x++){
            console.log('The name at the index ' + x + ' is ' + names[x]);
        }
    }
    log();
    /**
     * TODO:
     * Write some code that uses a for loop to log every item in the names
     * array.
     */
    //log();
    /*
     * TODO:
     * Refactor your above code to use a `forEach` loop
     */
    names.forEach(function(name) {
        console.log('Here is one of the names in the array, ' + name + '.')
    });
    /**
     * TODO:
     * Create the following three functions, each will accept an array and
     * return an an element from it
     * - first: returns the first item in the array
     * - second: returns the second item in the array
     * - last: returns the last item in the array
     *
     * Example:
     *  > first([1, 2, 3, 4, 5]) // returns 1
     *  > second([1, 2, 3, 4, 5]) // returns 2
     *  > last([1, 2, 3, 4, 5]) // return 5
     */
    
    var list = [1,2,3,4,5];
    
    function first() {
        console.log('The first item in this array is: ' + list[0]);
    }
    
    function second() {
        console.log('The second item in this array is: ' + list[1]);
    }
    
    function last() {
        console.log('The last item in this array is: ' + list[list.length-1]);
    }

    first();
    second();
    last();
})();
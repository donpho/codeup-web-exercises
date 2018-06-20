(function(){
    "use strict";

    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    var planetsArray;

    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */
    planetsArray = planetsString.split('|');
    //console.log(planetsArray);

    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?
     *
     * BONUS:
     * Create another string that would display your planets in an undordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     */


    // planetsArray.unshift('PlaceHolder');
    // var planets = planetsArray;
    // console.log(planets);
    // ////Add a placeholder in front of the array
    // planets = planets.join('*<br> ');
    // console.log(planets);
    // ////Made the array into a string with '*<br> '
    // planets = planets.split('*'); // Indicating where the split is going to be and the rest of the tag will go right if split left and vice versa.
    // console.log(planets);
    // planets.shift(); // Removed the PlaceHolder as it served its purpose of allowing us to join array with <br> to the actual beginning of the array.
    // console.log(planets);

    // The code below will add '<li>' to the front of each array element.

    function addTags(arr, openingTag, closingTag) {
        var fill = 'PlaceHolder';
        var splitHere = '*';
        var spacing = ' ';

        var addSymbol = arr.slice();
        addSymbol.unshift(fill);
        addSymbol.push(fill);

        addSymbol = addSymbol.join(splitHere + '\n'+ openingTag + spacing);
        addSymbol = addSymbol.split(splitHere);
        addSymbol.shift();

        addSymbol = addSymbol.join(spacing + closingTag + splitHere );
        addSymbol = addSymbol.split(splitHere);
        addSymbol.pop();

        console.log(addSymbol.join(" "));

    }
    addTags(planetsArray,'<br>','');
    addTags(planetsArray,'<li>','</li>');
    console.log(planetsArray);

    // planetsArray.unshift('PlaceHolder');
    // var planets = planetsArray;
    // planets = planets.join('*\n<li> ');
    // console.log(planets);
    // planets = planets.split('*');
    // console.log(planets);
    // planets.shift();
    // console.log(planets);
    //
    // // The code below will add '</li>' to the end of each array element.
    //
    // planets.push('PlaceHolder');
    // planets = planets.join(' </li>8');
    // planets = planets.split('8');
    // planets.pop();
    //
    // // The code bellow will take out the first element of the array, then add '<ul>' in front of the element that was pulled out and then added it back to the original array
    //
    // var list = planets.shift();
    // list = list.split();
    // list.unshift('PlaceHolder');
    // list = list.join('^<ul> ');
    // list = list.split('^');
    // list.shift();
    //
    // planets.unshift(list.shift());
    //
    // // Same thing as above but instead of the first element of the array, it will apply to the last element of the array and added the '</ul>' at the end of the element
    // var fill = 'PlaceHolder';
    // var end = planets.pop();
    // end = end.split();
    // end.push(fill);
    // end = end.join(' \n</ul>^');
    // end = end.split('^');
    // end.pop();
    //
    // planets.push(end.shift());
    // planets = planets.join(' ');
    // console.log(planets);

})();
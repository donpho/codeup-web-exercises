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
    // console.log(planets); // Add a placeholder in front of the array
    // planets = planets.join('*<br> ');
    // console.log(planets); // Made the array into a string with '*<br> '
    // planets = planets.split('*'); // Indicating where the split is going to be and the rest of the tag will go right if split left and vice versa.
    // console.log(planets);
    // planets.shift(); // Removed the PlaceHolder as it served its purpose of allowing us to join array with <br> to the actual beginning of the array.
    // console.log(planets);


    planetsArray.unshift('PlaceHolder');
    var planets = planetsArray;
    console.log(planets);
    planets = planets.join('*<li> ');
    console.log(planets);
    planets = planets.split('*');
    console.log(planets);
    planets.shift();
    console.log(planets);

    console.log('added "<li>" to the front');

    // DO NOT TOUCH THE CODE ABOVE!!!!

    planets.push('PlaceHolder');
    console.log(planets);
    planets = planets.join(' </li>8');
    console.log(planets);
    planets = planets.split('8');
    console.log(planets);
    planets.pop();
    console.log(planets);

    var list = planets.shift();
    console.log(list);
    list = list.split();
    console.log(list);
    list.unshift('PlaceHolder');
    console.log(list);
    list = list.join('^<ul> ');
    console.log(list);
    list = list.split('^');
    console.log(list);
    list.shift();
    console.log(list);

    planets.unshift(list.shift());
    console.log(planets);

    var end = planets.pop();
    console.log(end);

    end = end.split();
    end.push('PlaceHolder');
    end = end.join(' </ul>^');
    end = end.split('^');
    console.log(end);
    end.pop();
    console.log(end);

    console.log(planets);
    planets.push(end.shift());
    planets = planets.join(' ');
    console.log(planets);

})();
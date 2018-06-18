"use strict";
(function () {
    console.log('Testing from while.js');
    var count = 0;
    var two = 2;
    while (count <=15){
        //console.log(two);
        two = two*2;
        count++;
    }

    // This is how you get a random number between 50 and 100
    //var allCones = Math.floor(Math.random() * 50) + 50;
// This expression will generate a random number between 1 and 5
    //Math.floor(Math.random() * 5) + 1;

    // 5 cones sold...  // if there are enough cones
    //     Cannot sell you 6 cones I only have 3...  // If there are not enough cones
    //     Yay! I sold them all! // If there are no more cones

    // console.log(allCones + ' cones');
    // var i =0;
    //
    // while (allCones >0 || i<1) {
    //     var sales = Math.floor(Math.random()*5) + 1;
    //     console.log(allCones + ' left...');
    //
    //     if (allCones > 0 && allCones >= sales){
    //         allCones = allCones - sales;
    //         console.log(sales + ' sold...');
    //     }
    //     else if (allCones === 0){
    //         i++;
    //         console.log('Yay! I sold them all!');
    //     }
    //     else {
    //         console.log('I cannot sell you  ' + sales + ', I only have ' + allCones +'...');
    //     }
    // }
})();
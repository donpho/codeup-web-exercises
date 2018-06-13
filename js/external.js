"use strict";

console.log('Hello from external JavaScript!');

alert("Welcome to my Website!");

var userInput = prompt('What is your favorite color?');
console.log('The user entered: ' + userInput);

alert('Great, '+ userInput + ' is my favorite color too!');

alert("Ok onward to the real questions.");

var movie1 = "The Little Mermaid", movie2 = "Brother Bear", movie3 = "Hercules";
var days;
var price1 = 3, price2 = 3, price3 = 3, totalPrice = 0;

console.log('Current prices for movies 1, 2, and 3 are $' + price1 + ', $' + price2 + ' and $' + price3);

days = prompt('How many days will you rent the movie ' + movie1 + '?');
console.log('The user entered: ' + days);
Number(days);
totalPrice = totalPrice + (price1*days);
console.log('Current total is: $'+totalPrice);

days = prompt('How many days will you rent the movie ' + movie2 + '?');
console.log('The user entered: ' + days);
Number(days);
totalPrice = totalPrice + (price2*days);
console.log('Current total is: $'+totalPrice);

days = prompt('How many days will you rent the movie ' + movie3 + '?');
console.log('The user entered: ' + days);
Number(days);
totalPrice = totalPrice + (price3*days);
console.log('Current total is: $'+totalPrice);

alert("Your current total came out to be: $" + totalPrice);

alert("Ok onwards to your work hours.");

var Amazon=380, Facebook=350, Google=400, hours, totalPay = 0;

hours = prompt('How many hours did you work for Amazon?');
console.log('The user entered: ' + hours);
Number(hours);
totalPay = totalPay + (Amazon*hours);
console.log('The current pay is: $' + totalPay);

hours = prompt('How many hours did you work for Facebook?');
console.log('The user entered: ' + hours);
Number(hours);
totalPay = totalPay + (Facebook*hours);
console.log('The current pay is: $' + totalPay);

hours = prompt('How many hours did you work for Google?');
console.log('The user entered: ' + hours);
Number(hours);
totalPay = totalPay + (Google*hours);
console.log('The current pay is: $' + totalPay);

alert('Your total paycheck is: $' + totalPay);

alert('Ok, let us talk about enrollment.');

var classIsNotFull; // boolean
var classSchedulesCheck; // boolean
var studentEnrolled;

classIsNotFull = confirm('Is the class full?');
console.log('The user entered: ' + classIsNotFull);
classSchedulesCheck = confirm('Will it conflict with your current schedule?');
console.log('The user entered: ' + classSchedulesCheck);
studentEnrolled = classIsNotFull && classSchedulesCheck;
console.log(studentEnrolled);

if (studentEnrolled == true){
    alert('OK! You are all good to enroll into the class!');
}
else if (classIsNotFull == false) {
    alert('Sorry, but the class is full!');
}
else {
    alert('Sorry, but the class will cause conflict within your schedule!')
}

alert('Last, we need the information on the coupon.');
var numberOfItemsForDiscount;
var numberOfItems; // number
var offerIsNotExpired; // boolean
var isPremiumMember; // boolean
var productDiscountApplied = premiumMember || (numberOfItems >= numberOfItemsForDiscount && offerIsNotExpired);
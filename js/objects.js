(function() {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */

    var person = {
        firstName: "Rick",
        lastName: "Sanchez",
        sayHello: function () {
            return "Hello from " + this.firstName + ' ' + this.lastName;
        }
    };
    console.log(person.firstName); // "Rick"
    console.log(person.lastName); // "Sanchez"

    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */

    console.log(person.sayHello());

    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    var shoppers = [
        {name: 'Cameron',
            amount: 180},
        {name: 'Ryan',
            amount: 250},
        {name: 'George',
            amount: 320}

    ];
    shoppers.detail = function() {
        shoppers.forEach(function (elements, index) {
            if (shoppers[index].amount > 200) {
                console.log('Shopper: ' + shoppers[index].name + ' has made a purchase of: ' + shoppers[index].amount + ' and receive a 12% discount! The new total is: ' +
                    (shoppers[index].amount - shoppers[index].amount * .12));
            }
            else {
                console.log('Shopper: ' + shoppers[index].name + ' has made a purchase of: ' + shoppers[index].amount + ' and receive no discounts. The total is: ' + shoppers[index].amount);
            }
        })
    };
    shoppers.detail();

    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */

    var books = [
        {
            title: "Douluo Dalu",
            author: {
                firstName: "San Shao",
                lastName: "Tang Jia"
            }
        },
        {
            title: "Douluo Dalu: Legend of the Divine Realm",
            author: {
                firstName: "San Shao",
                lastName: "Tang Jia"
            }
        },
        {
            title: "Douluo Dalu 2: The Unrivaled Tang Sect",
            author: {
                firstName: "San Shao",
                lastName: "Tang Jia"
            }
        },
        {
            title: "Douluo Dalu 3: The Legend of the Dragon King",
            author: {
                firstName: "San Shao",
                lastName: "Tang Jia"
            }
        }

    ];

    // author's full name will be printed last name + first name for chinese formality.

    books.list = function () {
        books.forEach(function (elements, index){
            console.log('Book # ' + (index+1) + '\n' + 'Title: ' + books[index].title + '\n' + 'Author: ' + books[index].author.lastName + ' ' + books[index].author.firstName);
        })
    };

    books.list();

    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */

    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */

    function createBook(bookTitle, authorFirstName, authorLastName){
        //books.title = books.title.push(bookTitle);
        //books.title.author.firstName = books.title.author.firstName.push(authorFirstName);
       //books.title.author.lastName = books.title.author.lastName.push(authorLastName);
        books.push.title.author.firstName.lastName(bookTitle,authorFirstName,authorLastName);
    }

    function showBookInfo(){
        var user = confirm('Would you like to view a book information?');
        while (user === true){
            alert('We have ' + books.length + ' books.');
            var bookNumber = parseInt(prompt('Please select a book number.'));
            console.log('Book # ' + (bookNumber-1) + '\n' + 'Title: ' + books[bookNumber-1].title + '\n' + 'Author: ' + books[bookNumber-1].author.lastName + ' ' + books[bookNumber-1].author.firstName);
            user = confirm('Would you like to view a book information?');
        }
    }


    showBookInfo();
    //createBook(prompt('Please enter the title of the book.'),prompt('Please enter the author\' first name.'),prompt('Please enter the author\' last name.'));

})();
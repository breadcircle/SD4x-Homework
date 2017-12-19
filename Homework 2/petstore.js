
/**
 * This function should calculate the total amount of pet food that should be
 * ordered for the upcoming week.
 * @param numAnimals the number of animals in the store
 * @param avgFood the average amount of food (in kilograms) eaten by the animals
 * 				each week
 * @return the total amount of pet food that should be ordered for the upcoming
 * 				 week, or -1 if the numAnimals or avgFood are less than 0 or non-numeric
 */
function calculateFoodOrder(numAnimals, avgFood) {
    // IMPLEMENT THIS FUNCTION!
    if (numAnimals < 0 || Number.isInteger(numAnimals) === false) {
        return -1;
    }
    if (avgFood < 0 || Number.isInteger(avgFood) === false) {
        return -1;
    }
    return Number.parseInt(numAnimals) * Number.parseInt(avgFood);
}

/**
 * Determines which day of the week had the most nnumber of people visiting the
 * pet store. If more than one day of the week has the same, highest amount of
 * traffic, an array containing the days (in any order) should be returned.
 * (ex. ["Wednesday", "Thursday"]). If the input is null or an empty array, the function
 * should return null.
 * @param week an array of Weekday objects
 * @return a string containing the name of the most popular day of the week if there is only one most popular day, 
 * and an array of the strings containing the names of the most popular days if there are more than one that are most popular
 */

var day1 = new Weekday("Sunday", 100);
var day2 = new Weekday("Monday", 300);
var day4 = new Weekday("Wednesday", 300);
var day3 = new Weekday("Tuesday", 150);

var testWeekdays = [day1, day2, day3, day4];

function mostPopularDays(week) {
    // IMPLEMENT THIS FUNCTION!

    if (week == null || week.length === 0 || week === undefined) {
        return null;
    }

    var arrayOfWeekdays = [week[0]];
    var returnString = [];

    for (var i = 1; i < week.length; i++) {
        // console.log("week" + i + " traffic is " + week[i].traffic);
        // console.log("arrayOfWeekdays[0].traffic is " + arrayOfWeekdays[0].traffic);

        if (week[i].traffic === arrayOfWeekdays[0].traffic) {
            arrayOfWeekdays.push(week[i]);
        } else if (week[i].traffic > arrayOfWeekdays[0].traffic) {
            arrayOfWeekdays = [week[i]];
            // console.log("new arrayOfWeekdays " + arrayOfWeekdays);
        }
    }

    if (arrayOfWeekdays.length === 1) {
        // console.log("for length 1, final arrayOfWeekdays is " + arrayOfWeekdays[0].name);
        return arrayOfWeekdays[0].name;
    } else {
        for (var i = 0; i < arrayOfWeekdays.length; i++) {
            returnString.push(arrayOfWeekdays[i].name);
        }
        return returnString;
    }
}

var testnames = ["Skippy The Rabbit", "Slowy the Turtle"];
var testtypes = ["rabbit", "turtle"];
var testbreeds = ["white rabbit", "giant turtle"];

/**
 * Given three arrays of equal length containing information about a list of
 * animals - where names[i], types[i], and breeds[i] all relate to a single
 * animal - return an array of Animal objects constructed from the provided
 * info.
 * @param names the array of animal names
 * @param types the array of animal types (ex. "Dog", "Cat", "Bird")
 * @param breeds the array of animal breeds
 * @return an array of Animal objects containing the animals' information, or an
 *         empty array if the array's lengths are unequal or zero, or if any array is null.
 */
function createAnimalObjects(names, types, breeds) {
    var arrayOfAnimalObjects = [];

    if (names === null || types === null || breeds === null) {
        return [];
    }

    if (names.length === 0 || types.length === 0 || breeds.length === 0 || names.length !== types.length || names.length !== breeds.length || types.length !== breeds.length) {
        return [];
    }

    for (var i = 0; i < names.length; i++) {
        var testObject = new Animal(names[i], types[i], breeds[i]);
        arrayOfAnimalObjects.push( testObject );
    }

    return arrayOfAnimalObjects;
}

/////////////////////////////////////////////////////////////////
//
//  Do not change any code below here!
//
/////////////////////////////////////////////////////////////////


/**
 * A prototype to create Weekday objects
 */
function Weekday (name, traffic) {
    this.name = name;
    this.traffic = traffic;
}

/**
 * A prototype to create Item objects
 */
function Item (name, barcode, sellingPrice, buyingPrice) {
     this.name = name;
     this.barcode = barcode;
     this.sellingPrice = sellingPrice;
     this.buyingPrice = buyingPrice;
}
 /**
  * A prototype to create Animal objects
  */
function Animal (name, type, breed) {
    this.name = name;
     this.type = type;
     this.breed = breed;
}


/**
 * Use this function to test whether you are able to run JavaScript
 * from your browser's console.
 */
function helloworld() {
    return 'hello world!';
}

function TrieNode() {
    this.children = [];
    for (var i = 0; i < 27; i++)
    {
        this.children.push(null);
    }
}

var root = new TrieNode();
root.children[0] = new TrieNode();

var test = root.children[1];
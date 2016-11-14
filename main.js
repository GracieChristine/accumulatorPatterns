/*
----------------------------------------
SAMPLE
----------------------------------------
Challenge: Write function named test that returns the string "This Works!".
Solution: This one has already been complete for you.
*/

function test() {
    var string = "This Works!";
    return string;
}

/*
----------------------------------------
CHALLENGE
----------------------------------------
Write function named sum that will take an array of numbers and return the sum of them
Example: if you pass it [1,2,3] then it should return 6 (which is 1 + 2 + 3)
*/

function sum(numArray) {
    var sum = 0;

    for (var i = 0; i < numArray.length; i++) {
        sum += numArray[i];
    }
    return sum;
}

console.log(sum([1, 2, 3]));

/*
----------------------------------------
CHALLENGE
----------------------------------------
Write function named doubleNumbers that will take an array of numbers and return an array with those numbers doubled
Example: if you pass it [1,2,3] then it should return [2,4,6]
*/

function doubleNumbers(numArray) {
    var doubledNumArray = [];

    for (var i = 0; i < numArray.length; i++) {
        doubledNumArray.push(numArray[i] *= 2);
    }
    return doubledNumArray;
}

console.log(doubleNumbers([2, 4, 6, 8]));

/*
----------------------------------------
CHALLENGE
----------------------------------------
Write function named multiplyNumbers that will take an array of numbers and
return an array with those numbers multiplied by another value
Examples:
- if you call multiplyNumbers([1,2,3], 0) you'd get [0,0,0]
- if you call multiplyNumbers([1,2,3], 5) you'd get [5,10,15]
*/

function multiplyNumbers(numArray, multipliedBy) {
    var multipliedNumArray = [];

    for (var i = 0; i < numArray.length; i++) {
        multipliedNumArray.push(numArray[i] * multipliedBy);
    }
    return multipliedNumArray;
}

console.log(multiplyNumbers([2, 4, 6, 8], 5));

/*
----------------------------------------
CHALLENGE
----------------------------------------
Write function named doubleLetters that will take a string and double every letter in the string
Example: if you pass it "abc" then it should return "aabbcc"
*/

function doubleLetters(string) {
    var modifiedString = string.split("");
    var newString = [];

    for (var i = 0; i < modifiedString.length; i++) {
        newString.push(modifiedString[i] + modifiedString[i]);
    }
    return newString.join("");
}

console.log(doubleLetters("Grace"));

/*
----------------------------------------
CHALLENGE
----------------------------------------
Write function named interleave that will take two arrays and interleaves them
Example: if you pass it ["a", "b", "c"] and ["d", "e", "f"] then it should return ["a", "d", "b", "e", "c", "f"]
NOTE: you can assume each input will be the same length
*/

function interleave(array1, array2) {
    var newArray = [];

    for (var i = 0; i < array1.length; i++) {
        newArray.push(array1[i], array2[i]);
    }
    return newArray;
}

console.log(interleave(["a", "b", "c"], ["d", "e", "f"]));

/*
----------------------------------------
CHALLENGE
----------------------------------------
Write function named createRange that will take a number and a default value and return an array of that many values
Example: if you pass it 4 and "Hello" then it should return ["Hello", "Hello", "Hello", "Hello"]
*/

function createRange(num, value) {
    var newArray = [];

    for (var i = 0; i < num; i++) {
        newArray.push(value);
    }
    return newArray;
}

console.log(createRange(4, "Hello"));

/*
----------------------------------------
CHALLENGE
----------------------------------------
Write function named flipArray that will take an array and return an object where the keys are the items and the values are the indices
Example:
If you pass it ["quick", "brown", "fox"] then it should return { "quick": 0, "brown": 1, "fox": 2 }
*/

function flipArray(array) {
    var object = new Object();

    for (var i = 0; i < array.length; i++) {
        object[array[i]] = i;
    }
    return object;
}

console.log(flipArray["quick", "brown", "fox"]);


/*
----------------------------------------
CHALLENGE
----------------------------------------
Write function named arraysToObject that will take an array of 2-element arrays, and return an object of key/value pairs
Example:
If you pass it [[2014, "Horse"], [2015, "Sheep"]] then it should return { 2014: "Horse", 2015: "Sheep" }
*/

function arraysToObject(array) {
    var object = new Object();

    for (var i = 0; i < array.length; i++) {
        object[array[i][0]] = array[i][1];
    }
    return object;
}

console.log(arraysToObject([
    [2014, "Horse"],
    [2015, "Sheep"]
]));

/*
----------------------------------------
CHALLENGE
----------------------------------------
Write function named reverseString that will reverse a string without calling the built-in .split or .reverse methods
Example:
If you pass it "hello" then it should return "olleh"
*/

function reverseString(string) {
    var modifiedString = [];
    var newString = [];

    for (var i = 0; i < string.length; i++) {
        modifiedString.push(string[i]);
    }
    for (var j = modifiedString.length - 1; j >= 0; j--) {
        newString.push(modifiedString[j]);
    }
    return newString.join("");
}

console.log(reverseString("hello"));

/*
----------------------------------------
CHALLENGE
----------------------------------------
Write a function named repeats that returns true if the first half of the string equals the last half, and false if not
Example:
If you pass it "haha" then it should return true because "ha" (the first half) equals "ha" (the second half)
If you pass it "yay" then it should return false because it's odd
If you pass it "heehaw" then it should return false because "hee" doesn't equal "haw"
*/

function repeats(string) {
    var array = string.split("");
    var leftHalf = array.slice(0, (array.length / 2));
    var rightHalf = array.slice((array.length / 2), array.length);

    if (string.length % 2 !== 0)
        return false;

    for (var i = 0; i < leftHalf.length; i++) {
        console.log("entered loop");
        console.log(leftHalf[i] + " and " + rightHalf[i]);
        if (leftHalf[i] !== rightHalf[i]) {
            console.log(leftHalf[i], rightHalf[i]);
            return false;
        }
    }
    return true;
}

/*
----------------------------------------
CHALLENGE
----------------------------------------
Write a function named everyOther that returns every other character in the string
Example:
If you pass it "abcdef" then it should return "ace" because those represent every other letter
*/

function everyOther(string) {
    var newString = [];

    for (var i = 0; i < string.length; i++) {
        if (i % 2 === 0) {
            newString.push(string[i]);
        }
    }
    return newString.join("");
}

console.log(everyOther("abcdef"));

/*
----------------------------------------
CHALLENGE
----------------------------------------
Write a function named allEqual that returns true if every character in the string is the same
Example:
If you pass "aaa" it should return true
If you pass "aba" it should return false
*/

function allEqual(string) {
    var modifiedString = string.split("");
    var firstCharacter = modifiedString[0];

    for (var i = 0; i < modifiedString.length; i++) {
        if (firstCharacter !== modifiedString[i]) {
            return false;
        }
    }
    return true;
}

console.log(allEqual("aaa"));
console.log(allEqual("aba"));

/*
----------------------------------------
CHALLENGE
----------------------------------------
Write a function named sumLetters that returns the sum of every character in the string
Example:
If you pass "45" it should return 9
If you pass "246" it should return 10
*/

function sumLetters(string) {
    var modifiedString = string.split("");
    var numSum = 0;

    for (var i = 0; i < modifiedString.length; i++) {
        var num = parseInt(modifiedString[i]);

        numSum += num;
    }
    return numSum;
}

console.log(sumLetters("246"));

/*
----------------------------------------
CHALLENGE
----------------------------------------
Write a function named countVowels that returns the number of vowels in a string, excluding "y"
Example:
If you pass "you" it should return 2
*/

function countVowels(string) {
    var newString = [];

    for (var i = 0; i < string.length; i++) {
        switch (string[i]) {
            case "a":
            case "e":
            case "i":
            case "o":
            case "u":
                newString.push(string[i]);
                break;
            default:
                break;
        }
    }
    return (newString.join("").length);
}
countVowels("you");

/*
----------------------------------------
CHALLENGE
----------------------------------------
Write a function named split that takes a string and returns an array of the letters
Example:
If you pass "you" it should return ["y", "o", "u"]
NOTE: do not use the builtin `split` method
*/

function split(string) {
    var newArray = [];

    for (var i = 0; i < string.length; i++) {
        newArray.push(string[i]);
    }
    return newArray;
}

console.log(split("You"));

/*
----------------------------------------
CHALLENGE
----------------------------------------
Write a function named getCodePoints that takes a string and returns an array of the codePoints of the letters
See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/codePointAt
Example:
If you pass "Hello" it should return [ 72, 101, 108, 108, 111 ]
*/

function getCodePoints(string) {
    var array = [];

    for (var i = 0; i < string.length; i++) {
        array.push(string.codePointAt(i));
    }
    return array;
}

console.log(getCodePoints("Hello"));

/*
----------------------------------------
CHALLENGE
----------------------------------------
Write a function named letterMap that takes a string and returns an object of the letters and their positions in the string
Example:
If you pass "Yo" it should return {Y: 0, o: 1}
If you pass "Hello" it should return {H: 0, e: 1, l: 3, o: 4}
*/

function letterMap(string) {
    var object = {};

    for (var i = 0; i < string.length; i++) {
        object[string[i]] = i;
    }
    return object;
}

console.log(letterMap("Hello"));

/*
----------------------------------------
CHALLENGE
----------------------------------------
Write a function named letterCount that takes a string and returns an object with the letters and the number of their occurrences
Example:
If you pass "Yo" it should return {Y: 1, o: 1}
If you pass "Hello" it should return {"H": 1, "e": 1, "l": 2, "o": 1}
*/

function letterCount(string) {
    var array = string.split("");
    var object = {};

    array.forEach(function(i) {
        // the right side evaluates first and it is saying. 'if b[i](a for example) exists then increment the value of the key by one. If not assign one to the value and insert the key'
        object[i] = object[i] + 1 || 1
    })
    return object;
}

console.log(letterCount("Hello"));

/*
----------------------------------------
CHALLENGE
----------------------------------------
Write a function named threeOdds that takes 2 numbers and returns true if there are 3 odd numbers _between_ those two numbers
Example:
If you pass 0,2 it should return false because the only number between 0 and 2 is 1
If you pass 0,6 it should return true because between 0 and six (the numbers 1,2,3,4,5) there are three odds - 1, 3 and 5
*/

function threeOdds(num1, num2) {
    var array = [];

    for (var i = num1; i < num2; i++) {
        if (i % 2 !== 0 && i !== 0) {
            array.push(num2[i]);
        }
    }
    if (array.length > 2) {
        return true;
    } else {
        return false;
    }
}

console.log(threeOdds(0, 2));
console.log(threeOdds(0, 6));

/*
----------------------------------------
CHALLENGE
----------------------------------------
Write a function called leftPad that takes a string, a length and a fill character and returns a string padded to length with the fill character
Example:
If you pass "a", 3, "*" it should return "**a" - that is, a string of length 3, padded on the left by the "*" character
*/

function leftPad(string, stringLength, character) {
    var newString = [];

    if (string.length > stringLength) {
        return string;
    } else {
        for (var i = 0; i < stringLength - string.length; i++) {
            newString.push(character);
        }
        newString.push(string);
    }
    return newString.join("");
}

console.log(leftPad("k", 5, "*"));

/*
----------------------------------------
CHALLENGE
----------------------------------------
Write a function named createString that takes a number and a letter and creates a string of that many letters
Example:
If you pass "a", 3 it should return "aaa"
If you pass "b", 3 it should return "bb"
*/

function createString(num, letter) {
    var newString = [];

    for (var i = 1; i <= num; i++) {
        newString.push(letter);
    }
    return newString.join("");
}

console.log(createString(3, "lo"));

/*
----------------------------------------
CHALLENGE
----------------------------------------
Write a function named factorial that takes a number and returns its factorial
Factorial of 4 means 4 * 3 * 2 * 1
Example:
If you pass 4 it should return 24 since that's 4 * 3 * 2 * 1
If you pass 5 it should return 120 since that's 5 * 4 * 3 * 2 * 1
*/

function factorial(num) {
    var factorialNum = 1;
    var x = num;

    while (x > 0) {
        factorialNum = factorialNum * x;
        console.log(factorialNum);
        x--;
    }
    return (factorialNum);
}

console.log(factorial(5));

/*
----------------------------------------
CHALLENGE
----------------------------------------
Write a function named arrayOfNumbers that takes a number and returns an array of all the numbers between 1 and that number, inclusive
Example:
If you pass 1 it should return [1]
If you pass 3 it should return [1,2,3]
*/

function arrayOfNumbers(num) {
    var newArray = [];

    for (var i = 1; i <= num; i++) {
        newArray.push(i);
    }
    return newArray;
}

console.log(arrayOfNumbers(3));

/*
----------------------------------------
CHALLENGE
----------------------------------------
Write a function named evenOdd that takes a number and returns an object with the numbers and whether they are even or odd
Example:
If you pass 1,4 it should return {"1": "odd", "2": "even", "3": "odd", "4": "even"}
*/

function evenOdd(num1, num2) {
    var object = {};

    if (num2 === 0)
        return object;

    for (var i = num1; i <= num2; i++) {
        if (i % 2 === 0) {
            object[i] = "even";
        } else {
            object[i] = "odd";
        }
    }
    // console.log(object);
    return object;
}

console.log(evenOdd(1, 4));

/*
----------------------------------------
CHALLENGE
----------------------------------------
Write a function named growingKeys that takes a number and a string and returns an object where the keys are that string, repeated one more each time
Example:
If you pass 2,"d" it should return {"d": true, "dd": true}
*/

function growingKeys(num, string) {
    var obj = new Object();
    var dupString = string;

    for (var i = 0; i < num; i++) {
        obj[string] = true;
        string += dupString;
    }
    return obj;
}

console.log(growingKeys(5, "K"));

/*
----------------------------------------
CHALLENGE
----------------------------------------
Write a function named every that takes an array and a value and returns true if every element of the array equals the value
Example:
If you pass [1,1], 1 it should return true
If you pass [1,2], 1 it should return false
*/

function every(array, value) {
    for (var i = 0; i < array.length; i++) {
        if (array[i] !== value) {
            return false;
        }
    }
    return true;
}

console.log(every([1, 1], 1));
console.log(every([1, 2], 1));

/*
----------------------------------------
CHALLENGE
----------------------------------------
Write a function named some that takes an array and a value and returns true if at least one element of the array equals the value
Example:
If you pass [1,2], 1 it should return true
If you pass [3,2], 1 it should return false
*/

function some(array, value) {
    for (var i = 0; i < array.length; i++) {
        if (array[i] === value) {
            return true;
        }
    }
    return false;
}

console.log(some([1, 2], 1));
console.log(some([3, 2], 1));

/*
----------------------------------------
CHALLENGE
----------------------------------------
Write a function named toSentence that takes an array and returns a string with the elements joined by commas, with a trailing 'and'
Example:
If you pass ["Sue", "Will"] it should return "Sue and Will"
If you pass ["Sue", "Will", "Rachel"] it should return "Sue, Will and Rachel"
*/

function toSentence(array) {
    var string = "";

    for (var i = 0; i < array.length; i++) {
        if (i === array.length - 1) {
            string += ("and " + array[i]);
        } else if (i === array.length - 2) {
            string += (array[i] + " ");
        } else {
            string += (array[i] + ", ");
        }
    }
    // console.log(string);
    return string;
}

console.log(toSentence(["Grace", "Joice", "Frances"]));

/*
----------------------------------------
CHALLENGE
----------------------------------------
Write a function named acronym that takes an array and returns a string that is an acronym of the items in the array
Example:
If you pass ["Sue", "Will"] it should return "SW"
If you pass ["Java", Script", "Object", "Notation"] it should return "JSON"
*/

function acronym(array) {
    var string = [];

    for (var i = 0; i < array.length; i++) {
        string.push(array[i][0])
    }
    return (string.join(""));
}

console.log(acronym(["Java", "Script", "Object", "Notation"]));

/*
----------------------------------------
CHALLENGE
----------------------------------------
Write a function named min that takes an array and returns minimum value of the array
Example:
If you pass [0,-3,2,5] it should return -3
*/

function min(array) {
    var minArray = array[0];

    for (var i = 0; i < array.length; i++) {
        if (minArray > array[i]) {
            minArray = array[i];
        }
    }
    return minArray;
}

console.log(min([0, -3, 2, 5]));

/*
----------------------------------------
CHALLENGE
----------------------------------------
Write a function named index that takes an array of objects, and a property name, and returns an object where the keys are the specified property
Example:
If you pass [{id: 1, name: "Joe"}, {id: 2, name: "Sue"}] it should return {1: {id: 1, name: "Joe"}, 2: {id: 2, name: "Sue"}}
*/

function index(array, property) {
    var obj = new Object();

    if (array.length === 0) {
        return {};
    }
    for (var i = 0; i < array.length; i++) {
        for (var j in array[i]) {
            if (j === property) {
                console.log(array[i][j]);

                var key = array[i][j];
                j = key;
                obj[key] = array[i];
            }
        }
    }
    return obj;
}

console.log(index([{
    id: 1,
    name: "Will"
}, {
    id: 2,
    name: "Sue"
}], 'id'));

/*
----------------------------------------
CHALLENGE
----------------------------------------
Write a function named invert that takes an object and returns an object where the keys and values have been inverted
Example:
If you pass {id: 1, name: "Joe"} it should return {1: "id", Joe: "name"}
*/

function invert(theObject) {
    var obj = new Object();
    var key = "new";

    for (var i in theObject) {
        key = theObject[i];
        obj[key] = i;
    }
    return obj;
}

console.log(invert({
    id: 1,
    name: "Joseph"
}));

/*
----------------------------------------
CHALLENGE
----------------------------------------
Write a function named addSignature that takes an object and a name, and returns an object where
- the keys are suffixed with "-signed"
- the values are suffixed with " - <name>"
Example:
If you pass {"contract": "foo"}, "Fred" it should return {"contract-signed": "foo - Fred"}
*/

function addSignature(object, name) {
    var newObject = {};

    for (var i in object) {
        var key = i;
        i += "-signed";
        newObject[i] = object[key] + (" - " + name);
    }
    return newObject;
}

console.log(addSignature({
    contract: "foo"
}, "Fred"));


/*
----------------------------------------
CHALLENGE
----------------------------------------
Write a function named pairs that takes an object and returns an array of strings of key/value pairs
Example:
If you pass {name: "Will", age: 24} it should return ["name - will", "age - 24"]
*/

function pairs(object) {
    var array = [];
    var empty = Object.keys(object).length;
    if (empty === 0)
        return [];
    console.log(empty)
    for (var i in object) {
        array.push(i + " - " + object[i]);
    }
    return (array);
}
pairs({
    name: "Will",
    age: 24
});

/*
----------------------------------------
CHALLENGE
----------------------------------------
Write a function named sumValues that takes an object and returns the sum of the values
Example:
If you pass {a: 1, b: 2} it should return 3
*/

function sumValues(object) {
    var sum = 0;

    for (var i in object) {
        sum += object[i];
    }
    return sum
}

console.log(sumValues({
    a: 1,
    b: 2
}));

/*
----------------------------------------
CHALLENGE
----------------------------------------
Write a function named biggestProperty that takes an object and returns the name of the property with the highest value
Example:
If you pass {1999: 4036, 2000: 7654} it should return '2000'
*/

function biggestProperty(theObject) {
    if (Object.getOwnPropertyNames(theObject).length === 0) {
        return undefined;
    }

    for (var j in theObject) {
        var highestValue = theObject[j];
        break;
    }
    // console.log(highestValue);

    for (var i in theObject) {
        if (theObject[i] > highestValue) {
            highestValue = i;
        }
    }
    // console.log(highestValue);
    return highestValue;
}

console.log(biggestProperty({
    1999: 4036,
    2000: 7654
}));

/*
----------------------------------------
CHALLENGE
----------------------------------------
Write a function named keyForValue that takes an object and a value and returns the name of the property that matches that value
Example:
If you pass {1999: 4036, 2000: 7654} and 4036, it should return '1999'
*/

function keyForValue(object, value) {
    for (var i in object) {
        if (object[i] === value) {
            return i;
        }
    }
}

console.log(keyForValue({
    1999: 4036,
    2000: 7654
}, 4036));

/*
----------------------------------------
CHALLENGE
----------------------------------------
Write a function named containsValue that takes an object and a value and returns true if the object contains the value
Example:
If you pass {1999: 4036, 2000: 7654} and 4036, it should return true
*/

function containsValue(object, value) {
    for (var i in object) {
        if (object[i] === value)
            return true;
    }
    return false;
}
console.log(containsValue({
    1999: 4036,
    2000: 7654
}, 4036));

//

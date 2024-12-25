// Javascript most important data type is the object.
// An object is a collection name of name/value pairs, or a string to value map.
var book = {                            // Objects are enclosed with curly braces.
    topic: "Javascript",                // The property "topic" has value "javascript".
    fat: true                           // The property "fat" has true value true.
};                                      // The curly brace mark the end of the object.

// Acess the properties of an object with . or []:
book.topic                              // => "Javascript"
book["fat"]                             // => true: another way to access property values.
book.author = "Flanagan";               // Create new properties by assignment.
book.contents = {};                     // {} is an empty object with no properties.

// Javascript also supports array (numerically indexed lists) of values:
var primes = [2, 3, 5, 7];              // An array of 4 values, delimited with [ and ].
primes[0]                               // => 2: the first element (index 0) of the array.
primes.length                           // => 4: how many element in the array.
primes[primes.length-1]                 // => 7: the last element of the array.
primes[4] = 9;                          // Add a new element by assignment.
primes[4] = 11;                         // Or alter an existing element by assignment.
var empty = [];                         // [] is an empty array with no elements.
empty.length                            // => 0

// Arrays objects can hold other arrays and objects:
var points = [                          // An array with 2 elements.
    {x:0, y:0},                         // Each element is an object.
    {x:1, y:1}
];
var data = {                            // An object with 2 properties
    trial1: [[1,2], [3,4]],             // The value of each propertie is an array.
    trial2: [[2,3], [4,5]]              // The elements of the arrays are arrays.
};
// Functions are parameterized blocks of JavaScript code that we can invoke.
function plus1(x) {                 // Define function named "plus1" with parameter "x"
    return x+1;                     // Return a value one larger than the value passed in
}                                   // Function are enclosed in curly braces

var x = 2, y = 3;

plus1(y)                            // => 4: y is 3, so this invocation returns 3+1

var square = function(x) {          // Functions are values and can be assigned to vars
    return x*x;                     // Compute the function's value
};                                  // Semicolon marks the end of assignment.

square(plus1(y))                    // => 16: invoke two functions in one expression

// When functions are assigned to the properties to the properties of an object, we call
// them "methods". All JavaScript objects have methods:
var a = [];                         // Create an empty array
a.push(1,2,3);                      // The push() method adds elements to an array
a.raverse();                        // Another method: reverse the order of elements

// we can define out own methods, too. The "this" keyword refers to the object
// on which the method is defined: in this case, the points array from above.
points.dist = function() {          // Define a method to compute distance between points
    var p1 = this[0];               // First element of array we're invoked on
    var p2 = this[1];               // Second element of the "this" object
    var a = p2.x-p1.x;              // Difference in x coordinates
    var b = p2.y-p1.y;              // Difference in Y coordinates
    return Math.sqrt(a*a +          // The Pythagorean theorem
                     b*b);          // Math.sqrt() computes the square root
};
points.dist()                       // => 1.414: distance between our 2 points

// Javascript statements include conditionals and loops using the syntax
// of C, C++, Java, and other languages.
function abs(x) {                   // A function to compute the absolute value
    if (x >= 0) {                   // The if statement...
        return x;                   //      executes this code if the comparison is true
    }                               // This is the end of the if clause.
    else {                          // The optional else clause executes its code if
        return -x;                  //      the comparison is false.
    }                               // Curly braces optional whe 1 statement per clause.
}                                   // Note return statement nested inside if/else.

function factorial(n) {             // A function to compute factorials
    var product = 1;                // Start with a product of 1
    while(n > 1) {                  // Repeat statements in {} while expr in () is true
        product *= n;               // Shortcut for product = product * n;
        n--;                        // Shortcut for n = n - 1
    }                               // End of loop
    return product;                 // Return the product
}
factorial(4)                        // => 24: 1*4*3*2

function factorial2(n) {            // Another version using a different loop
    var i, product = 1;             // Start with 1
    for(i=2; i <= n; i++)           // Automatically increment i from 2 up to n
        product *= i;               // Do this each time. {} not needed for 1-line loops
        return product;             // Return the factorial
}
factorial2(5)                       // => 120: 1*2*3*4*5
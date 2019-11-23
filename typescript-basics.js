"use strict";
console.log("Hello World!");
/* ======================
   TypeScript Variables
*/
var found = true;
var grade = 97.5;
var firstName = "John";
var lastName = "Doe";
var data = 6;
found = false;
grade = 96;
data = "Test";
data = true;
/* ======================
   Displaying Output
*/
console.log("Hi " + firstName + " " + lastName);
console.log("Hi " + firstName + ", your grade is " + grade);
/* ======================
   Loops & Arrays
*/
var rev = [1, 5.9, 4.1, 8, 2];
for (var i = 0; i < rev.length; i++) {
    console.log(rev[i]);
}
rev.push(27.9);
var total = 0;
for (var _i = 0, rev_1 = rev; _i < rev_1.length; _i++) {
    var num = rev_1[_i];
    total += num;
}
console.log("Total of rev is " + total);
/* ======================
   Classes
*/
var Customer = /** @class */ (function () {
    function Customer(tFirst, tLast) {
        this._first = tFirst;
        this._last = tLast;
    }
    Object.defineProperty(Customer.prototype, "first", {
        get: function () {
            return this._first;
        },
        set: function (value) {
            this._first = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Customer.prototype, "last", {
        get: function () {
            return this._last;
        },
        set: function (value) {
            this._last = value;
        },
        enumerable: true,
        configurable: true
    });
    return Customer;
}());
var myCustomer = new Customer("Ray", "Poret");
console.log("Customer is" + myCustomer.first + " " + myCustomer.last);

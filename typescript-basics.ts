console.log("Hello World!");

/* ======================
   TypeScript Variables
*/
let found: boolean = true;
let grade: number = 97.5;
let firstName: String = "John";
let lastName: string = "Doe";
let data: any = 6;
found = false;
grade = 96;
data = "Test";
data = true;

/* ======================
   Displaying Output
*/
console.log("Hi " + firstName + " " + lastName);
console.log(`Hi ${firstName}, your grade is ${grade}`);

/* ======================
   Loops & Arrays 
*/
let rev: number[] = [1, 5.9, 4.1, 8, 2];
for (let i = 0; i < rev.length; i++) {
  console.log(rev[i]);
}
rev.push(27.9);
let total: number = 0;
for (let num of rev) total += num;
console.log(`Total of rev is ${total}`);

/* ======================
   Classes
*/

// Traditional
class Customer {
  private _first: string;
  private _last: string;

  constructor(tFirst: string, tLast: string) {
    this._first = tFirst;
    this._last = tLast;
  }

  public get first(): string {
    return this._first;
  }
  public set first(value: string) {
    this._first = value;
  }
  public get last(): string {
    return this._last;
  }
  public set last(value: string) {
    this._last = value;
  }
}

// Short Cut
// class Customer_2 {
//    constructor(private _first: string, private _last: string) {}
//    // setters / getters
// }

let myCustomer = new Customer("Ray", "Poret");
console.log("Customer is " + myCustomer.first + " " + myCustomer.last);

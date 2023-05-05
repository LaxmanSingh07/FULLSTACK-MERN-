//function in the js 

// what is a function

//a block of code which is used to perform a particular task

//function is a reusable block of code
//function is a set of statements that performs a task or calculates a value

//function() is a function declaration

//function is a keyword

console.log("How are you?")

function run() {
    console.log("Running");
}

//fucntion invocation

run();

//function hoisting --> function declaration is hoisted to the top of the file

//function assignment 

//named function assignement
let started = function walk() {
    console.log("Walking");
}

started();
// walk(); //it will not work because walk is not defined

//hositing is not allowed in case of function assignment

let jump = started;
jump();

//anonymous function assignement
let stand2 = function () {
    console.log("I am anonymous function");
}
stand2()


function sum(a, b) {
    console.log(arguments); //it will return all the arguments passed in the function
    return a + b;
};

console.log(sum(2, 3));

console.log(sum(4))// it will return NaN because we are not passing the second argument

console.log(sum(12, 3, 4, 4))//it will return 15 because it will take only first two argument

// vairable arguments in the function

function sum1(a, b) {
    let total = 0;
    for (let value of arguments) {
        total += value;
    }
    return total;
}

console.log(sum1(1, 2, 3, 4, 5, 6, 67, 7));

//rest operator

function sum3(num1, num2, ...args) {
    let total = 0;
    for (let value of args) {
        total += value;
    }
    return total;
}

//rest parameter should be the last parameter in the function

console.log(sum3(1, 2, 3, 4, 5, 6, 67, 7));


//default parameter

function interest(principal, rate = 3.5, years = 5) {
    return principal * rate / 100 * years;
}
console.log(interest(10000));
console.log(interest(10000, undefined, 5));




//getter and setter

//getter --> access properties
//setter --> change (mutate) them

// function fullName(value) {
//     return `${this.fName} ${this.lName}`;
// }


let person = {
    fName: "Rahul",
    lName: "Sharma",
    get fullName() {
        return `${this.fName} ${this.lName}`;
    },
    set fullName(value) {
        if (typeof value !== 'string') {
            throw new Error("Value is not a string");
        }
        let parts = value.split(' ');
        this.fName = parts[0];
        this.lName = parts[1];
    }
}

//issue ---> read only
// console.log(fullName.call(person));

// console.log(person.fullName);
// console.log(person.fullName = "Laxman Singh");


//try and catch

//try --> try to execute this block of code
//catch --> if there is an exception then catch it


try {
    person.fullName = 1;
}
catch (e) {
    console.log(typeof (e)); //e is an object
    console.log("Exception " + e);
}

function a() {

}
function b() {

}


//Reducing an array 

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let total = 0;
// for (let i = 0; i < arr.length; i++) {
//     total += arr[i];
// }
// console.log(total);


//reduce method

let totlSum=arr.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue;
}, 0);
//accumulator --> total of all the previous values

//intial value of the acummulator is 0

console.log(totlSum);
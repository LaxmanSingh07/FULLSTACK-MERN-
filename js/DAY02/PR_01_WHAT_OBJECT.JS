// // console.log("Hello ");

const { chownSync } = require("fs");




// //FACTORY FUNCTION IN JS 

// function creaeRectangle(l, b) {
//     return rectangle = {
//         length: l,
//         breadth: b,
//         // draw: function () {
//         //     console.log('draw');
//         // }
//         draw() {
//             console.log(this.length, this.breadth);
//         }
//     };

// }

// let rectangleObj = creaeRectangle(4, 5);
// console.log(rectangleObj);
// rectangleObj.draw();

// //second way to create the object 
// //PASCAL NOTATION is followed 


// //Constructor Function 

// function Rectangle() {
//     this.length = 1;
//     this.breadth = 2;
//     this.draw = function () {
//         console.log("drawing");
//     }
// }



// //object creation using constructor function 

// let rectangleObj2 = new Rectangle();
// rectangleObj2.draw();


// //dynamically add/delete in the object

// rectangleObj2.color = "red";
// console.log(rectangleObj2);

// delete rectangleObj2.color;
// console.log(rectangleObj2);

// console.log(rectangleObj.constructor); // it will print the bydefault constructror c
// console.log(rectangleObj2.constructor);



// // how the default constructor of the object will be created and call 


// let Rectangle2 = new Function(
//     'len', 'bre',
//     `this.length=len;
//     this.breadth=bre;
//     this.draw=function()
//     {
//         console.log('drawing');
//     }`
// )

// let rec = new Rectangle2(2, 3);

// console.log(rec.length);



//functions are obejcts 


// types in js 

// Primitive or Value types
// Reference types or Objects


let a = 10;
let b = a;
a++;
console.log(a, b);



let c = { value: 10 };
let d = c;
c.value++;

console.log(c.value, d.value);


// Note: Primitive are copied by their value
// referces are copied by their address/referces


let k = 10;

function inc(k) {
    k++;
}
inc(k);
console.log(k);






let rectangle = {
    length: 2,
    breadth: 4,

};

//for in loop 

for (key in rectangle) {
    //keys are reflected through key variable
    //values are reflected through reactangle key
    console.log(key, rectangle[key]);
}

//for-of loop

// for (let key of Object.keys(rectangle)) {
//     console.log(key);
// }
// for (let key of Object.entries(rectangle)) {
//     console.log(key);
// }

//to check wheather color is present in the object or not 
// if ('color' in rectangle) {
//     console.log(present);
// }
// else {
//     console.log("Not present");
// }


//object cloning

//iteration
//Assign
//spread operator



let rectangle2 = {};

// for (let key in rectangle) {
//     rectangle2.key = rectangle[key];
// }
// console.log(rectangle2);

//spread
rectangle2 = { ...rectangle };
console.log(rectangle2);

//assign

let src2=
{
    value:78
}

let dest=Object.assign({},rectangle,src2);
console.log(dest);
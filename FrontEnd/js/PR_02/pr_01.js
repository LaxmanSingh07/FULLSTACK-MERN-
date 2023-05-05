// console.log("Hello ");



function creaeRectangle(l, b) {
    return rectangle = {
        length: l,
        breadth: b,
        // draw: function () {
        //     console.log('draw');
        // }
        draw() {
            console.log(this.length, this.breadth);
        }
    };

}

let rectangleObj = creaeRectangle(4, 5);
console.log(rectangleObj);
rectangleObj.draw();

//second way to create the object 
//PASCAL NOTATION is followed 


function Rectangle() {
    this.length = 1;
    this.breadth = 2;
    this.draw = function () {
        console.log("drawing");
    }
}



//object creation using constructor function 

let rectangleObj2 = new Rectangle();
rectangleObj2.draw();


//dynamically add/delete in the object

rectangleObj2.color = "red";
console.log(rectangleObj2);

delete rectangleObj2.color;
console.log(rectangleObj2);

console.log(rectangleObj.constructor); // it will print the bydefault constructror c
console.log(rectangleObj2.constructor);



// how the default constructor of the object will be created and call 


let Rectangle2 = new Function(
    'len', 'bre',
    `this.length=len;
    this.breadth=bre;
    this.draw=function()
    {
        console.log('drawing');
    }`
)

let rec = new Rectangle2(2, 3);

console.log(rec.length);



//functions are obejcts 


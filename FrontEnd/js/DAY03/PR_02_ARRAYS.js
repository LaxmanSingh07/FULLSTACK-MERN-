// //Adding new Elements 
// //Finding Elements 
// //Removing elements 

// const { chownSync } = require("fs")
// const { contains } = require("micromatch")


// // Insertion 


// let numbers = [1, 2, 3, 4,]
// console.log(typeof (numbers))


// //insertion in the array in the js 

// numbers.push(89)
// console.log(numbers)

// numbers.unshift(1000) //to insert the element in the begin 
// console.log(numbers)

// numbers.splice(2, 0, 'a', 'b');
// //start index , totalElmentwill be dele
// console.log(numbers)


// //Searching in the js 

// console.log(numbers)

// console.log(numbers.indexOf(7))

// //we want to check if element exists in array or not 

// console.log(numbers.includes(7))
// //numbers.includes return 

// //2nd argument is a index from which we want to start the search
// console.log(numbers.indexOf(5, 3));


// let courses = [
//     {
//         no: 1,
//         naam: 'Love'
//     },
//     {
//         no: 2,
//         naam: 'Babbar'
//     }
// ]
// console.log(courses)


// console.log(courses.indexOf({ no: 1, naam: 'Love' }));

// //callback function or predicate function 
// //it return the object of which property you are finding 

// // let course = courses.find(function (course) {
// //     return course.naam = 'Love';
// // })
// let course = courses.find(course => course.naam === 'Love');

// console.log(course);


// //removing elemment 

// let counter = [1, 3, 4, 5, 6]

// //from the end 
// counter.pop();

// console.log(counter)
// counter.shift();
// console.log(counter)
// counter.splice(1, 2)
// console.log(counter)


// //Empttying the array 

// mine = counter
// // counter = []
// // console.log(counter)
// // console.log(mine)


// // counter.length = 0;
// // console.log(mine, counter)


// counter.splice(0, counter.length)
// console.log(counter)

// //Combining & Slicing array 


// let first = [1, 2, 3, 4, 5]
// let second = [4, 3, 5, 5]
// let combined = first.concat(second)
// console.log(combined)

// console.log(combined.slice(2, 5)) //start to end-1

// //spread operator
// //in javascript 

// let combined2 = [...first, 'a', ...second]
// console.log(combined2)

// combined2.forEach(Number => console.log(Number))

// // interating an Array:

// let arr = [1, 2, 3, 4, 5, 6, 7, 8]

// for (let value of arr) {
//     console.log(value);
// }

// //forEach loop 

// //we have to give a call back function to the forEach loop
// arr.forEach((value) => {
//     console.log(value);
// })


// //joining an array 

// arr1 = [1, 2, 3, 4, 5, 6, 7];
// arr2 = arr.join('_') //it will join the all the element of the array and return the string

// console.log(arr2)

// let messsage = "This is my first message";
// let parts = messsage.split(' ');
// console.log(parts) //it will create the array of the string


//sorting in order


let num1 = [12, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
// num1.sort();
// console.log(num1)
// num1.reverse()

//sort method convert the array into string and then sort it



//filtering Arrays:


// let numbers = [1, 2, 3 - 4, 6] //predicate function or callback function

// let filtered=numbers.filter(n=>n>=0);

// console.log(filtered)

// let filteredNegative = numbers.filter(n => n < 0);
// console.log(filteredNegative);


//map in the array

// let mapped = numbers.map(n => 'student' + n);
// console.log(mapped)


//mapping with objects 

let numbers2 = [1, 2, 3, 4, 5, -23]
// let filtered = numbers2.filter(n => n >= 0);

// let items = filtered.map(n => ({ value: n }));
// console.log(items)

//channing 


let items = numbers2.filter(value => value >= 0).map(num => ({ value: num }));
console.log(items);

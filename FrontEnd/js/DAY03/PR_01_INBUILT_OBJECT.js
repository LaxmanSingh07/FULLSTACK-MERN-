//in built objects and arrays in javascripot 

// Math object ---> in built object 

console.log(Math.random()); // it will give the random
console.log(Math.PI);
console.log(Math.round(4.56));
console.log(Math.abs(-89.0))


//String ------> primitive 

let lastName = "Bisht"

//there are two types of the strings in the js 
let firstName = new String("Laxmansingh");
console.log(typeof (lastName)) // it is a string literal 
console.log(typeof (firstName)) //it is a string object 

console.log(lastName.length);
console.log(lastName.charAt(0))
console.log(lastName.startsWith("Bi"));

console.log(lastName.endsWith("ht"))
console.log(lastName.includes("singh"))
console.log(lastName.toUpperCase())

let name1 = "       Laxman Singh"

console.log(name1.trim()) //it will trim the all the leading spaces

console.log(lastName.replace("Bish", "Laxman Singh"));



let message = "This is my messages";
let words = message.split(' ');
console.log(words)
console.log(typeof (words))



//template literals 


let myMessage = 'This is my first time\''
console.log(message)


//with the help of the backticks ` `

let message2 = `
    Hello World
    I am from the nature 
    `

console.log(message2)


let date2 = new Date()
console.log(date2)

let date3 = new Date(1998,6,20,7)//0 base indexing in the month 
date3.setFullYear(1994);
console.log(date3)
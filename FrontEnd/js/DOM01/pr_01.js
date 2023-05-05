//
// console.log(document)
// console.log(document.body)

//Dom is stand for the document object model

//document is the root object of the dom


console.log (document.body.childNodes) //it will show the child nodes of the body tag

//BOM is stand for the browser object model
//window is the root object of the BOM
//window is the global object of the browser


//<> is the tag
//<> is the element
//<> is the node

//getElementById is the method of the document object
//it will return the element with the given id

// console.log(document.getElementById('myId'))
//it the id is not present in the document then it will return null

//getElementById ----> it is called on the document object
//----> it is retrun the element with the given id

//multiple object 

// console.log(document.getElementsByClassName('myClass'))

// console.log(document.getElementsByTagName('p'))
//HTMLCollection(3) [p, p, p]

// console.log(document.getElementsByTagName('p')[0])

//list return by the getElementsByClassName and getElementsByTagName is called HTMLCollection they are not array but they are array like object

//$0 is the last selected element in the console

//docuemnt.querySelector('p') it will return the first element with the given selector

//document.querySelectorAll('p') it will return the all element with the given selector
//it will return the NodeList


//update existing content

// console.log(document.getElementById('myId').innerHTML) //it will return the innerHTML of the element with the given id

//innerhtml is the property of the element
    //---> it can set the content of the element



//outerhtml is the property of the element
//it can set the content of the element and also the element itself




//doucment.getElementById('myId').innerHTML = 'new content' //it will set the new content to the element with the given id4

//document.getElementById('myId').outerHTML = 'new content' //it will set the new content to the element with the given id and also the element itself

//document.getElementById('myId').textContent = 'new content' //it will set the new content to the element with the given id and also the element itself

//what is the difference between the innerHtml and textContent
//textContent will not render the html tag
//innerHtml will render the html tag

//document.getElementById('myId').innerText = 'new content' //it will set the new content to the element with the given id and also the element itself

//what is the difference between the innerText and textContent

//if Display is hidden then innerText will not return the content
//if Display is hidden then textContent will return the content


//aDDING NEW element/content

//.createElement('p') it will create the new element with the given tag name


//.appendChild() it will add the new element to the parent element

// let content=document.querySelector('#content')
// let newP=document.createElement('p')
// content.appendChild(newP)


//it will add at the end of the parent element


//what is text Node ----->  it is the text inside the element


//there are two ways to create the text node
//let newP=document.createElement('p')
//1. let textPara= document.createTextNode('new content')
    // newP.appendChild(textPara)

//2. newP.textContent='new content'

//there is a problem with this appraoch because new element will always be added as the last child of the parent element

//how to solve this? 

//.insertAdjacentElement() 
// has to be called with 2 arguments
//1. position (where)
//2. element (what )


//location are of four types
//1. beforebegin
//2. afterbegin
//3. beforeend
//4. afterend


// let content=document.querySelector('#content')
// let newP=document.createElement('p')
// newP.textContent='Hello'
// content.insertAdjacentElement('beforebegin',newP)
// content.insertAdjacentElement('afterbegin',newP)



//remove element

//remveChild() it will remove the child element from the parent element

//there are some condition to remove the child element
//1.parent should be known
//3. child element should be the element


// let childElment=document.querySelector('.tempText')

//let parentElment=dcoument.querySelector('#content')

//parentElment.removeChild(childElment)



//Another way to remove the child element

//.remove() it will remove the element itself

// let childElment=document.querySelector('.tempText')
//childElment.parentElement.removeChild(childElment)

//style page using javascript

//.style is the property of the element
//it is used to set the style of the element
//it is an object
//it has many properties
//it has many methods
//it has many events

// let content=document.querySelector('#content')
// content.style.backgroundColor='red'

//the drawback is that you can only change the color of only one element 



//.cssText is the property of the style object
//it is used to set the style of the element


//it will help in multiple 
// contet.style.cssText="color:green; background-color:yellow;"



//set attribute
//.setAttribute() it will set the attribute of the element
//content.setAttribute('class','tempClass')
//it will take the two argument
//1. attribute name
//2. attribute value


//content.className ----> //it will give the sring of all the class name of the element
//typeof content.className ----> //it will give the string

//content.class.split(' ') ----> //it will give the array of all the class name of the element
//typeof content.class.split(' ') ----> //it will give the object


// i can use the for loop and iterate over  the class loop 

//classList metho 

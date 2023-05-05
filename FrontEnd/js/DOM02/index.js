//browser event



// monitorEvents(document);----- > it will monitor all the event of the document

//TRUN OFF 
//unmonitorEvents(document);----> it will unmonitor all the event of the document

//event listener

//CLASSES   


//event listener ---> it is a function that will be called when the event is fired
//event+ target ---> it is the element on which the event is fired

//addEventListener() ---> it will add the event listener to the element
//removeEventListener() ---> it will remove the event listener from the element
//dispatchEvent() ---> it will fire the event on the element


//event target is an interface 


//pseudo code
/* <event-target>.addEventListner(<event-to-listen<,<function to happen when even it happen>) */

//it i want to add the event listener to an element
//1. get the element
//2. add the event listener to the element

//document.addEventListener('click',function(){
//     console.log('document is clicked')
// })


let content=document.querySelector('#content');
// console.log(content)
content.addEventListener('click',function(){
  console.log('content is clicked');
  content.style.backgroundColor='red';
});


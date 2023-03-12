// //adding 100paragraphs to the DOM

// //standard way to measure the time taken by the code to execute
// //performance.now() ---> timespan in milliseconds


// //it will take more time to execute as compared to the below code
// let t1=performance.now()
// for(let i=1;i<=100;i++){
//     let newElement=document.createElement('p')
//     newElement.textContent=`this is the paragraph number ${i}`
//     document.body.appendChild(newElement)
// }
// let t2=performance.now()
// console.log("tgis tool "+(t2-t1)+" milliseconds");
// //optimsing a bit 


// //it will take less time to execute as compared to the above code
// t1=performance.now()
// let myDiv=document.createElement('div')
// for(let i=1;i<=100;i++){
//     let newElement=document.createElement('p')
//     newElement.textContent=`this is the paragraph number ${i}`
//     myDiv.appendChild(newElement)
// }
// t2=performance.now()
// console.log("tgis tool "+(t2-t1)+" milliseconds");

// document.body.appendChild(myDiv)

//reflow and repaint 

// reflow is the process of calculating the position of the element on the page
// repaint is the process of drawing the element on the page pixel by pixel

//care should be taken that 

//repaint is faster than reflow


//DocumentFragment is a special type of node which is used to store the list of nodes

//it is used to store the list of nodes
//DocumentFragment is not a part of the DOM
//if we are adding some node inside the DocumentFragment then it will not cause the reflow and repaint


//when you are trying to update dom many times 

// let fragment=document.createDocumentFragment();
// for(let i=1;i<=100;i++){
//     let newElement=document.createElement('p');
//     newElement.textContent=`this is the paragraph number ${i}`;
//     fragment.appendChild(newElement);
// }
// document.body.appendChild(fragment); //1 reflow and 1 repaint

//SINGLE-THREDING

//one command at a time (js ---> single-threded language)
//The CALL STACK


function addParagraph(){
    let para=document.createElement('p');
    para.textContent="this is a paragraph1";
    document.body.appendChild(para);
}
function appendNewMessage(){
  let para=document.createElement('p');
  para.textContent="this is a paragraph2";
  document.body.appendChild(para);
}
addParagraph();
appendNewMessage();


// observation
// 1. run to completion
//2. doesn't execute the multiple lines of code at the same time
//3. it executes the code line by line
//4. it executes the code in the order in which it is written


//CALL STACK

//global execution context --->    


//what is event loops 

//event loop is a mechanism which is used to execute the code asynchronously
// Philip Roberts

//Asynchronous code ---> is executed and handle by the event loop

//CODE MOVES FORM QUEUE TO THE CALL STACK 


//setTimeout is a function which is used to execute the code after the specified time

setTimeout(function(){
    console.log("this is the first message");
},1000); 

//there is no gurentee that the code will be executed after the specified time
//time can be more than the specified time

//Queue will exectute the quque after the call stack is empty


setTimeout(()=>{
    console.log("this is the second message");
},0)
//this will be executed first as the call stack is empty

//adding 100paragraphs to the DOM

//standard way to measure the time taken by the code to execute
//performance.now() ---> timespan in milliseconds


//it will take more time to execute as compared to the below code
let t1=performance.now()
for(let i=1;i<=100;i++){
    let newElement=document.createElement('p')
    newElement.textContent=`this is the paragraph number ${i}`
    document.body.appendChild(newElement)
}
let t2=performance.now()
console.log("tgis tool "+(t2-t1)+" milliseconds");
//optimsing a bit 


//it will take less time to execute as compared to the above code
t1=performance.now()
let myDiv=document.createElement('div')
for(let i=1;i<=100;i++){
    let newElement=document.createElement('p')
    newElement.textContent=`this is the paragraph number ${i}`
    myDiv.appendChild(newElement)
}
t2=performance.now()
console.log("tgis tool "+(t2-t1)+" milliseconds");

document.body.appendChild(myDiv)

//reflow and repaint 

// reflow is the process of calculating the position of the element on the page
// repaint is the process of drawing the element on the page pixel by pixel

//care should be taken that 

//repaint is faster than reflow


//DocumentFragment is a special type of node which is used to store the list of nodes

//it is used to store the list of nodes
//DocumentFragment is not a part of the DOM
//if we are adding some node inside the DocumentFragment then it will not cause the reflow and repaint

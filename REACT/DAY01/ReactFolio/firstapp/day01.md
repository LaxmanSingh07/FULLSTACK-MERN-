## REACT 

` JS LIBRARY` 
`UI CREATE`

react is mainly used for ui creation 

## Magical line
  `React is all about components`


## what is component 
  `reusable piece of code`


`At the end of the day component is nothing but a function itself `


## Imperative vs Declarative

Normal js is based on the imperative approach 

`imprative`  how to do something
`declarative`  end state 



## REACT FOLLOWS SPA APPROACH (SINGLE PAGE APPROACH )

`Dynamic change`

what are the alernatives to react

1. Angular (google)
2. Vue (China)
3. Ember (Mozilla)
4. React (Facebook)

### components: 

## why React 

1. Virtual DOM ---> DOM is a tree structure
2. JSX ---> JS + HTML
3. Component based ---> reusable piece of code
4. One way data flow ---> data flows in one direction
5. Declarative ---> what to do
6. React Native ---> mobile app development
7. SOC (SEPRATION OF CONCERN)
8. SSR (SERVER SIDE RENDERING)
9. SPA (SINGLE PAGE APPLICATION)
10. Fast
11. Easy to learn
12. Easy to maintain
13. Easy to scale
14. Easy to debug



## WHAT IS JSX ? 

JAVA SCRIPT XML



`code will automatically convert into js code`

`YOU CAN CHECK THE CONVERSION IN BABELJS.IO`


### always try to build modular code


## what is props ?

props is a special keyword in react, which stands for properties and is being used for passing data from one component to another.


## what is props.classname ?
It is a special keyword in react, which stands for properties and is being used for passing data from one component to another.

## EventHandling in the React 


start with `on` keyword

`onClick`

This eventHandler is used to handle the click event on the element.

State in React

State is a special keyword in react which is used for handling the data in the component.

UseState is a hook which is used for handling the state in the functional component.

It returns an array with two elements.

first is the state variable and second is the function to update the state variable.

setState is a function which is used for updating the state in the class component.

IS setState take time to update the state ?

No, it does not take time to update the state.
It is asynchronous in nature.


//mulitple state hanlding with the help of the useState 

```js
//useState
//you can use the multiple useState in the single component


```

`IN CASE OF THE REACT TWO COMPONENTS ON SAME LEVEL CAN'T COMMUNICATE WITH EACH OTHER`



`LIFTING STATE UP`: IN react there is a concept of lifting state up, which means that if you want to share the data between two components which are on the same level then you have to lift the state up to the parent component.


`PROPS DRILLING`: In react there is a concept of props drilling, which means that if you want to share the data between two components which are on the same level then you have to pass the data from the parent component to the child component and then from the child component to the other child component and so on.


`Parent to child communication`: with the help of props

`Child to parent communication`:

with the help of the function as a props

```
________________
|               |
|  function     |
|  as a prop    |
|  to the child |
|               |
|_______________|

________________
|               |
|               |
|               |
|               |
|               |
|_______________|

```


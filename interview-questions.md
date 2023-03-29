# ASSESSMENT 2: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is the difference between a parameter and an argument?

Your answer: A parameter is part of the structure of a function. The parameters of a function tell the user what values or types of values it can accept and/or are required for the function to work. The arguments are the specific values that the user are giving to the function for processing. for example:

```js
const functionExample = (stringParameter) => {
    return console.log(`The string parameter (${stringParameter}) is passed as an argument.`)
}

functionExample("this argument")

// => The string parameter (this argument) is passed as an argument.
```

Researched answer: A parameter is a variable of a function and the argument is the data passed in the the given parameters. Arguments make functions more reusable as they can even allow us to pass functions into other functions as arguments

2. The JavaScript built in method .map() takes predefined parameters. What are they? Which are required and which are optional?

Your answer: value, index and array. Only the value is required, the index and array parameters are optional 

Researched answer: element, index, array. The element is what is being processed in the array.map(), the index is the index of the specific element being processed and the array is the array that called .map()

3. What is the difference between map and filter?

Your answer: the .map() method will return an array of equal size to the array that called the method with the values modified as specified during the method call. The .filter() method will return an array with only the values that fit the filtering criteria specified during the .filter() method call. 

Researched answer: the .map function method converts each item of an array while the .filter() method selects certain items within an array

4. What is iteration? 

Your answer: is the repetition of steps, usually in order to analyze or modify some value or sets of values.

Researched answer: repetition of steps or instructions which can be count controlled or condition controlled. 

5. What is the difference between a function and a method?

Your answer: a function is a set of instructions that can be re-used in code by ivoking it with different arguments. A method is a function within an object. A method are a set of instructions within that object that allow the user to interact with the object in specific ways as defined in that method. 

Researched answer: a function and a method are similar in that they are both set of instructions, but a function's instructions can be used anywhere in the code to perform whatever task they define, whereas the method is associated with an object and can only perform instructions associated with that type of object.

6. STRETCH: What is hoisting in JavaScript?

Your answer: I have no idea... 

Researched answer:  It is a concept whereby we do all variable declarations at the top of their scope (whether local or global). This way if we need to use a variable earleir than initially planned, we don't need to chase after the declaration or risk a declaration error. This is only done for declaration, not the assignment. 

```js
let variableDeclared; //declares the variable and commits it to memory but doesn't assign a value to it

variableDeclared = "now it is assigned a value" // here we have assigned it a value
```
ref: https://www.geeksforgeeks.org/javascript-hoisting/

## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

1. Component: a component is reusable code that acts the same way as a function but returns HTML

2. Spread operator: The spread operator takes in an iterateable element and expands it into individual elements 

3. React state: State is a built-in object in react that is used to keep data and property values on a component which allows for it to change over time and re-render

4. React props: Props is a React keyword that stands for properties. Props is used to pass data between React components from a parent component to a child component

5. DOM events: DOM events are a way to handle dynamic changes in the React app

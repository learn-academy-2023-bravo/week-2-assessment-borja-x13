// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

const cohort = "Bravo 2023"
console.log(cohort.split(""))

// a) Your answer: {"B", "r", "a", "v", "o"," ","2","0","0","3"} 
// b) Verify and explain: The split method converts the string into an array and by passing the argument "" we tell the method to make each character into its own string element within the new array

// --------------------2) What will this log?

const greeter = (name) => {
  `Hello, ${name}!`
}
console.log(greeter("LEARN Student"))

// a) Your answer: Hello, LEARN Student
// b) Verify and explain: Nothing was logged because there is no return statement in the function, which I overlooked. In order to actually get what I expected we need to change the function to the following:

// const greeter = (name) => {
//   return `Hello, ${name}!`
// }
// console.log(greeter("LEARN Student"))


// --------------------3) What will this log?

const multipliedByTwo = [4, 5, 6, 7, 8].map((number) => number * 2)
console.log(multipliedByTwo)

// a) Your answer: [8, 10, 12, 14, 16]
// b) Verify and explain: the .map() function iterates through the array and returns an array of equal length but modified based on the argument we pass as the function within the map function. Since here we asked each number to be multiplied by 2 then we receive the same sized array but with each value multiplied by 2

// --------------------4) What will this log?

const onlyOdds = [11, 12, 13, 14, 15].filter((number) => number % 2 !== 0)
console.log(onlyOdds)

// a) Your answer: [11, 13, 15]
// b) Verify and explain: the .filter() function iterates through the array and returns an arrayu with only the values that match the filter criteria. In this case we asked for only values where when they were divided by 2 they have a remainder other than 0, which means they are odd numbers. 

// --------------------5) What will this log?

const myCodingSkills = {
  languages: ["JavaScript", "Ruby"],
  frameworks: ["React", "Ruby on Rails"],
  databases: "PostgreSQL",
  versionControl: "GitHub"
}
console.log(myCodingSkills.languages[0])

// a) Your answer: JavaScript
// b) Verify and explain: myCodingSkills is an object. By using the myCodingSkills.languages we are accessing the languages array within the object and by further specifying that we want languages[0] we are asking for the value in the zeroith index of the array of languages. Thus JavaScript.

// --------------------STRETCH: What will this log?

class Learn {
  constructor(name) {
    this.student = name
    this.cohort = "Bravo"
    this.year = 2023
  }
}
const learnStudent = new Learn("George")
console.log(learnStudent)

// a) Your answer: Learn {student: 'George', cohort: 'Bravo', year: 2023}
// b) Verify and explain: Here we are creating an objject of the Learn class. By passing "George" as an argument, we are assigning it to this.student in the class constructor method
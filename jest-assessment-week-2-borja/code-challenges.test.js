// ASSESSMENT 2: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in an array of numbers and returns an array with all the numbers multiplied by 3.

// a) Create a test with expect statements for each of the variables provided.

const numbersArray1 = [6, 7, 8, 9, 10]
// Expected output: [18, 21, 24, 27, 30]
const numbersArray2 = [24, 27, 30, 33, 36]
// Expected output: [72, 81, 90, 99, 108]

// b) Create the function that makes the test pass.

//------------------------------------ Assessment Start ------------------------------------

// jest test template:

// describe ("nameOfFunction", () => {
//     it("explain what it takes and return expectation in plain English as this is for the programmer", () => {
//         expect(nameOfFunction()).toEqual(expected return)
//     })
// })

// object template:

// const objectName = { key: value }

// --------------------1) Create a function that takes an object as an argument and decides if the number inside it, is evenly divisible by three or not.

// a) Create a test with expect statements for each of the variables provided.

const object1 = { number: 15 }
// Expected output: "15 is divisible by three"
const object2 = { number: 0 }
// Expected output: "0 is divisible by three"
const object3 = { number: -7 }
// Expected output: "-7 is not divisible by three"

//------------------------------------ My Test Code ------------------------------------

//pseudo code:
// I will use the jest test template to test a function "divisibleByThree"
// it "takes an object { number: 2} and returns if the number is divisible by three"
// expect(divisibleByThree({number : 15})).toEqual("15 is divisible by three.")
// expect(divisibleByThree({number : 0})).toEqual("0 is divisible by three.")
// expect(divisibleByThree({number : -1})).toEqual("-7 is not divisible by three.")
// input: since there isn't a function to test, there is no input and I expect a fail (red)
// output: should output a ReferenceError: divisibleByThree is not defined
 
describe ("divisibleByThree", () => {
    it ("takes an object { number: 2} and returns if the number is divisible by three", () => {
        expect(divisibleByThree({number : 15})).toEqual("15 is divisible by three.")
        expect(divisibleByThree({number : 0})).toEqual("0 is divisible by three.")
        expect(divisibleByThree({number : -7})).toEqual("-7 is not divisible by three.")
    })
})

// FAIL  Desktop/week-2-assessment-borja-x13/code-challenges.test.js
// ● divisibleByThree › takes an object { number: 2} and returns if the number is divisible by three
// ReferenceError: divisibleByThree is not defined


// b) Create the function that makes the test pass.

// pseudo: 
// I will declare a function divisibleByThree that accepts a parameter of object {number: 2}
// Function will compare the value of number using  % 3 === 0 to see if it is divisible by three
// Use conditional statements if/else it to return divisible ot not divisible
// input: object {numberKey: numberValue}
// output: `${object.number} is divisible by three.` || `${object.number} is not divisible by three.`
// yarn jest should Pass (green)

const divisibleByThree = (object) => {
    if (object.number % 3 === 0 ) {
        return `${object.number} is divisible by three.`
    } else if (object.number % 3 !== 0) {
        return `${object.number} is not divisible by three.`
    }
}

// PASS  Desktop/week-2-assessment-borja-x13/jest-assessment-week-2-borja/code-challenges.test.js



// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// a) Create a test with expect statements for each of the variables provided.

const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
const randomNouns2 = ["temperature", "database", "chopsticks", "mango"]
// Expected output: ["Temperature", "Database", "Chopsticks", "Mango"]

//------------------------------------ My Test Code ------------------------------------

// pseudo code:
//I will use the jest test template to test a function "capitalized"
// it "takes an array "words" and returns an array with the first letter of each word capitalized"
// expect(capitalized(["streetlamp", "potato", "teeth", "conclusion", "nephew"])).toEqual(["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"])
// expect(capitalized(["temperature", "database", "chopsticks", "mango"])).toEqual(["Temperature", "Database", "Chopsticks", "Mango"])
// input: since there isn't a function to test, there is no input and I expect a fail (red)
// output: should output a ReferenceError: capitalized is not defined

describe ("capitalized", () => {
    it ("takes an array of words and returns an array with the first letter of each word capitalized", () => {
        expect(capitalized(["streetlamp", "potato", "teeth", "conclusion", "nephew"])).toEqual(["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"])
        expect(capitalized(["temperature", "database", "chopsticks", "mango"])).toEqual(["Temperature", "Database", "Chopsticks", "Mango"])
    })
})

// FAIL  Desktop/week-2-assessment-borja-x13/jest-assessment-week-2-borja/code-challenges.test.js
//   ● capitalized › takes an array of words and returns an array with the first letter of each word capitalized
//     ReferenceError: capitalized is not defined


// b) Create the function that makes the test pass.

// pseudo: 
// I will declare a function capitalized that accepts a parameter of an array of words
// Function will use .map() function to iterate through the array and change each string within to uppercase the first letter
// Use conditional statements if/else it to return divisible ot not divisible
// input: array of strings
// output: array of same length with same values with their first character capitalized
// yarn jest should Pass (green)

// I dind't know about the .substring method, but I found it in our lessons and looked up how it works at https://www.w3schools.com/jsref/jsref_substring.asp

const capitalized = (array) => {
    return array.map((value) => {
        return value[0].toUpperCase() + value.substring(1) 
    })
}

// PASS  Desktop/week-2-assessment-borja-x13/jest-assessment-week-2-borja/code-challenges.test.js
// Tests:       2 passed, 2 total



// --------------------3) Create a function that takes in a string and logs the index of the first vowel.

// a) Create a test with expect statements for each of the variables provided.

const vowelTester1 = "learn"
// Expected output: 1
const vowelTester2 = "academy"
// Expected output: 0
const vowelTester3 = "challenges"
// Expected output: 2


// pseudo code:
// I will use the jest test template to test a function "vowelIndex"
// it "takes a string and returns the first letter of each word"
// expect(vowelIndex("learn")).toEqual(1)
// expect(vowelIndex("academy")).toEqual(0)
// expect(vowelIndex("challenges")).toEqual(2)
// input: since there isn't a function to test, there is no input and I expect a fail (red)
// output: should output a ReferenceError: vowelIndex is not defined

describe ("vowelIndex", () => {
    it ("Takes a string and logs the index of the first vowel in the string", () => {
        expect(vowelIndex(vowelTester1)).toEqual(1)
        expect(vowelIndex(vowelTester2)).toEqual(0)
        expect(vowelIndex(vowelTester3)).toEqual(2)
    })
})

// FAIL  Desktop/week-2-assessment-borja-x13/jest-assessment-week-2-borja/code-challenges.test.js
// ● vowelIndex › Takes a string and logs the index of the first vowel in the string
//   ReferenceError: vowelIndex is not defined


// b) Create the function that makes the test pass.

// pseudo: 
// I will declare a function vowelIndex that accepts a parameter of string
// use for ... in  loop to iterate through the string
// Use conditional statement to compare the letter at the given index with a, e, i, o, u 
// return the index of the first vowel using .indexOf() method
// input: string
// output: index of the first vowel found in the given string
// yarn jest should Pass (green)

const vowelIndex = (string) => {
    for (let i in string) {
        if(string[i] === "a" || string[i] === "e" || string[i] === "i" || string[i] === "o" || string[i] === "u") {
           return string.indexOf(string[i])
        }
    }
}

//PASS  Desktop/week-2-assessment-borja-x13/jest-assessment-week-2-borja/code-challenges.test.js
// Tests:       3 passed, 3 total

//------------------------------------ Issues ------------------------------------

// whenever I run yarn jest, I am getting a bunch of unrelated passed and failed results that have nothing to do with my assessment. 
// I assumed that maybe I needed to do mkdir, like during the challenges and move the code-challenges file into that directory, but I am still getting the same errors. Either way I can see if my tests are working or not, so I will keep going with my assessment as I am already too far behind because of this. But I would like to understand what's going on.

// I wonder if I accidentally added jest globally at some point and that's why it is doing it. I will look for a way to revert that if I find that it is the case.


// ➜  jest-assessment-week-2-borja git:(week-2-borja-x13) ✗ yarn jest
// yarn run v1.22.19
// warning package.json: No license field
// $ /Users/learnacademy/node_modules/.bin/jest
//  FAIL  Desktop/week-2-assessment-borja-x13/jest-assessment-week-2-borja/code-challenges.test.js
//   ● divisibleByThree › takes an object { number: 2} and returns if the number is divisible by three

//     ReferenceError: divisibleByThree is not defined

//       59 | describe ("divisibleByThree", () => {
//       60 |     it ("takes an object { number: 2} and returns if the number is divisible by three", () => {
//     > 61 |         expect(divisibleByThree(9)).toEqual(`${object.number} is divisible by three.`)
//          |         ^
//       62 |         expect(divisibleByThree(11)).toEqual(`${object.number} is not divisible by three.`)
//       63 |     })
//       64 | })

//       at Object.expect (Desktop/week-2-assessment-borja-x13/jest-assessment-week-2-borja/code-challenges.test.js:61:9)

//  PASS  Desktop/javascript-foundations-challenges/jest-mark-nikki-felix/jest.test.js
//  PASS  Desktop/bravo-lecture-examples/javascript-foundations-jest/jest.test.js
//  FAIL  .vscode/extensions/ms-toolsai.vscode-jupyter-cell-tags-0.1.8/src/test/suite/extension.test.ts
//   ● Test suite failed to run

//     Jest encountered an unexpected token

//     Jest failed to parse a file. This happens e.g. when your code or its dependencies use non-standard JavaScript syntax, or when Jest is not configured to support such syntax.

//     Out of the box Jest supports Babel, which will be used to transform your files into valid JS based on your Babel configuration.

//     By default "node_modules" folder is ignored by transformers.

//     Here's what you can do:
//      • If you are trying to use ECMAScript Modules, see https://jestjs.io/docs/ecmascript-modules for how to enable it.
//      • If you are trying to use TypeScript, see https://jestjs.io/docs/getting-started#using-typescript
//      • To have some of your "node_modules" files transformed, you can specify a custom "transformIgnorePatterns" in your config.
//      • If you need a custom transformation specify a "transform" option in your config.
//      • If you simply want to mock your non-JS modules (e.g. binary assets) you can stub them out with the "moduleNameMapper" config option.

//     You'll find more details and examples of these config options in the docs:
//     https://jestjs.io/docs/configuration
//     For information about custom transformations, see:
//     https://jestjs.io/docs/code-transformation

//     Details:

//     /Users/learnacademy/.vscode/extensions/ms-toolsai.vscode-jupyter-cell-tags-0.1.8/src/test/suite/extension.test.ts:1
//     ({"Object.<anonymous>":function(module,exports,require,__dirname,__filename,jest){import * as assert from 'assert';
//                                                                                       ^^^^^^

//     SyntaxError: Cannot use import statement outside a module

//       at Runtime.createScriptFromCode (node_modules/jest-runtime/build/index.js:1495:14)

//  FAIL  .vscode/extensions/rebornix.ruby-0.28.1/src/languageConfiguration.test.ts
//   ● Test suite failed to run

//     SyntaxError: /Users/learnacademy/.vscode/extensions/rebornix.ruby-0.28.1/src/languageConfiguration.test.ts: Unexpected token, expected "from" (1:14)

//     > 1 | import assert = require('assert');
//         |               ^
//       2 | import languageConfiguration from './languageConfiguration'
//       3 |
//       4 | describe('wordPattern', function () {

//       at instantiate (node_modules/@babel/parser/src/parse-error/credentials.ts:62:21)
//       at instantiate (node_modules/@babel/parser/src/parse-error.ts:60:12)
//       at Parser.toParseError [as raise] (node_modules/@babel/parser/src/tokenizer/index.ts:1461:19)
//       at Parser.raise [as unexpected] (node_modules/@babel/parser/src/tokenizer/index.ts:1502:16)
//       at Parser.unexpected [as expectContextual] (node_modules/@babel/parser/src/parser/util.ts:104:12)
//       at Parser.expectContextual [as parseImport] (node_modules/@babel/parser/src/parser/statement.ts:2947:12)
//       at Parser.parseImport [as parseStatementContent] (node_modules/@babel/parser/src/parser/statement.ts:571:25)
//       at Parser.parseStatementContent [as parseStatementLike] (node_modules/@babel/parser/src/parser/statement.ts:416:17)
//       at Parser.parseStatementLike [as parseModuleItem] (node_modules/@babel/parser/src/parser/statement.ts:353:17)
//       at Parser.parseModuleItem [as parseBlockOrModuleBlockBody] (node_modules/@babel/parser/src/parser/statement.ts:1362:16)
//       at Parser.parseBlockOrModuleBlockBody [as parseBlockBody] (node_modules/@babel/parser/src/parser/statement.ts:1336:10)
//       at Parser.parseBlockBody [as parseProgram] (node_modules/@babel/parser/src/parser/statement.ts:226:10)
//       at Parser.parseProgram [as parseTopLevel] (node_modules/@babel/parser/src/parser/statement.ts:208:25)
//       at Parser.parseTopLevel [as parse] (node_modules/@babel/parser/src/parser/index.ts:45:10)
//       at parse (node_modules/@babel/parser/src/index.ts:67:38)
//       at parser (node_modules/@babel/core/src/parser/index.ts:28:19)
//           at parser.next (<anonymous>)
//       at normalizeFile (node_modules/@babel/core/src/transformation/normalize-file.ts:51:24)
//           at normalizeFile.next (<anonymous>)
//       at run (node_modules/@babel/core/src/transformation/index.ts:38:36)
//           at run.next (<anonymous>)
//       at transform (node_modules/@babel/core/src/transform.ts:29:20)
//           at transform.next (<anonymous>)
//       at evaluateSync (node_modules/gensync/index.js:251:28)
//       at sync (node_modules/gensync/index.js:89:14)
//       at fn (node_modules/@babel/core/src/errors/rewrite-stack-trace.ts:97:14)
//       at transformSync (node_modules/@babel/core/src/transform.ts:66:52)
//       at ScriptTransformer.transformSource (node_modules/@jest/transform/build/ScriptTransformer.js:542:31)
//       at ScriptTransformer._transformAndBuildScript (node_modules/@jest/transform/build/ScriptTransformer.js:671:40)
//       at ScriptTransformer.transform (node_modules/@jest/transform/build/ScriptTransformer.js:723:19)

// Test Suites: 3 failed, 2 passed, 5 total
// Tests:       1 failed, 9 passed, 10 total
// Snapshots:   0 total
// Time:        0.607 s, estimated 1 s
// Ran all test suites.
// error Command failed with exit code 1.
// info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
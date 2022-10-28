// Array Types
function Handler(
  a: Array<number>,
  b: Array<number>,
  cb: (ar: Array<number>) => void
) {
  let result = a.concat(b);
  cb(result);
}
Handler([1, 2, 3], [4, 6, 7], (result) => {
  // console.log(result);
});

let arrayOfNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Type is a function that returns an array of strings;
let createStrings: () => string[];
//Type is an array of functions that each return a string;
let stringCreator: (() => string)[];
// Type is either a number or an array of strings
let stringOrArrayOfNumbers: string | number[];
// Type is an array of elements that are each either a number or a string
let arrayOfStringOrNumbers: (string | number)[];

// A 2D array, or an array of arrays, will have two “[]”s:

let arrayOfArraysOfNumbers: number[][];
arrayOfArraysOfNumbers = [
  [1, 2, 3],
  [2, 4, 6],
  [3, 6, 9],
];

const defenders = ["Clarenza", "Dina"];
// Type: string
const defender = defenders[0];
//
// Here, soldiersOrDates is of type (string | Date)[], so the
// soldierOrDate variable is of type string | Date:
const soldiersOrDates = ["Deborah Sampson", new Date(1782, 6, 3)];
// Type: Date | string
const soldierOrDate = soldiersOrDates[0];

// Type: number and string;
const soldiers = ["Harriet Tubman", "Joan of Arc", "Khutulun"];
// Type: number[]
const soldierAges = [90, 19, 45];
type arrayOfData = string | number;
let arrayData: arrayOfData[] = [];
const joinedArray = [...soldiers, soldierAges];
function logWarriors(greeting: string, ...names: string[] | number[]) {
  for (const name of names) {
    if (typeof name !== "string") {
      console.log(`${greeting}, ${name}!`);
    } else {
      console.log(`${greeting} age is, ${name}!`);
    }
  }
}
const warriors = ["Cathay Williams", "Lozen", "Nzinga"];
logWarriors("Hello", ...warriors);
const birthYears = [1844, 1840, 1583];
logWarriors("Born in", ...birthYears);

// ...
const pairLoose = [false, 123];
const pairTupleLoose: [boolean, number] = [false, 34];

function logTrio(name: string, value: [number, boolean]) {
  console.log(`${name} has ${value[0]} (${value[1]}`);
}

const trios: [string, [number, boolean]][] = [
  ["Amanitore", [1, true]],
  ["Æthelflæd", [2, false]],
  ["Ann E. Dunwoody", [3, false]],
];
trios.forEach((trio) => logTrio(...trio));

// Tuples as rest parameters
function logPair(name: string, value: number) {
  console.log(`${name} has ${value}`);
}
const pairArray = ["Amage", 1];
const pairTupleIncorrect: [string, number] = ["jack", 1];
logPair(...pairTupleIncorrect);

//Tuple Inferences
// Explicit tuple types;
// Return type: [string, number]
function firstCharAndSizeExplicit(input: string): [string, number] {
  return [input[0], input.length];
} //
// firstChar type: string
// size type: number
const [firstChar, size] = firstCharAndSizeExplicit("Cathay Williams");
console.log(firstChar, size, "size----=--->");

//Const asserted tuples
const pairConst = [1157, "Tomoe"] as const;

// Cannot assign to '0' because it is a read-only property.ts(2540)
// pairConst[0] = 45;

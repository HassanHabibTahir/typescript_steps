var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Array Types
function Handler(a, b, cb) {
    var result = a.concat(b);
    cb(result);
}
Handler([1, 2, 3], [4, 6, 7], function (result) {
    // console.log(result);
});
var arrayOfNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// Type is a function that returns an array of strings;
var createStrings;
//Type is an array of functions that each return a string;
var stringCreator;
// Type is either a number or an array of strings
var stringOrArrayOfNumbers;
// Type is an array of elements that are each either a number or a string
var arrayOfStringOrNumbers;
// A 2D array, or an array of arrays, will have two “[]”s:
var arrayOfArraysOfNumbers;
arrayOfArraysOfNumbers = [
    [1, 2, 3],
    [2, 4, 6],
    [3, 6, 9],
];
var defenders = ["Clarenza", "Dina"];
// Type: string
var defender = defenders[0];
//
// Here, soldiersOrDates is of type (string | Date)[], so the
// soldierOrDate variable is of type string | Date:
var soldiersOrDates = ["Deborah Sampson", new Date(1782, 6, 3)];
// Type: Date | string
var soldierOrDate = soldiersOrDates[0];
// Type: number and string;
var soldiers = ["Harriet Tubman", "Joan of Arc", "Khutulun"];
// Type: number[]
var soldierAges = [90, 19, 45];
var arrayData = [];
var joinedArray = __spreadArray(__spreadArray([], soldiers, true), [soldierAges], false);
function logWarriors(greeting) {
    var names = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        names[_i - 1] = arguments[_i];
    }
    for (var _a = 0, names_1 = names; _a < names_1.length; _a++) {
        var name_1 = names_1[_a];
        if (typeof name_1 !== "string") {
            console.log("".concat(greeting, ", ").concat(name_1, "!"));
        }
        else {
            console.log("".concat(greeting, " age is, ").concat(name_1, "!"));
        }
    }
}
var warriors = ["Cathay Williams", "Lozen", "Nzinga"];
logWarriors.apply(void 0, __spreadArray(["Hello"], warriors, false));
var birthYears = [1844, 1840, 1583];
logWarriors.apply(void 0, __spreadArray(["Born in"], birthYears, false));
// ...
var pairLoose = [false, 123];
var pairTupleLoose = [false, 34];
function logTrio(name, value) {
    console.log("".concat(name, " has ").concat(value[0], " (").concat(value[1]));
}
var trios = [
    ["Amanitore", [1, true]],
    ["Æthelflæd", [2, false]],
    ["Ann E. Dunwoody", [3, false]],
];
trios.forEach(function (trio) { return logTrio.apply(void 0, trio); });
// Tuples as rest parameters
function logPair(name, value) {
    console.log("".concat(name, " has ").concat(value));
}
var pairArray = ["Amage", 1];
var pairTupleIncorrect = ["jack", 1];
logPair.apply(void 0, pairTupleIncorrect);
//Tuple Inferences
// Explicit tuple types;
// Return type: [string, number]
function firstCharAndSizeExplicit(input) {
    return [input[0], input.length];
} //
// firstChar type: string
// size type: number
var _a = firstCharAndSizeExplicit("Cathay Williams"), firstChar = _a[0], size = _a[1];
console.log(firstChar, size, "size----=--->");

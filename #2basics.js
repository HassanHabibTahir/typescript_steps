"use strict";
//1,2,3,5, core
//6 - Type Assignment & Type Inference
function add(n1, n2, showResult, resultIs) {
    const _resu = n1 + n2;
    if (showResult) {
        console.log(resultIs + _resu);
    }
    else {
        return _resu;
    }
}
const number1 = 6;
const number2 = 5;
const _showResult = true;
const _resultIs = "The result is:";
//number is required;
add(number1, number2, _showResult, _resultIs);
//7 - Object Types

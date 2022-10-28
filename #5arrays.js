"use strict";
// Array Types
function Handler(a, b, cb) {
    let result = a.concat(b);
    cb(result);
}
Handler([1, 2, 3], [4, 6, 7], (result) => {
    console.log(result);
});

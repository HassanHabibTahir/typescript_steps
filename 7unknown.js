var userInput;
var userName;
userInput = 5;
userInput = "Max";
// Type 'unknown' is not assignable to type 'string'.ts(2322)
// userName = userInput;
if (typeof userInput === "string") {
    userName = userInput;
}
function generateError(message, code) {
    throw { message: message, code: code };
}
generateError("An error occurred", 500);

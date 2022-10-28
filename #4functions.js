"use strict";
//Explicitly and Implicitly Types;
// The expression implicit used to refer to something done behind the scene, on the other hand, explicit refers to the manual approach of applying things
//Optional Parameters
// function announceSong(song: string, singer?: string) {
//   console.log(`Song: ${song}`);
//   if (singer) {
//     console.log(`Singer: ${singer}`);
//   }
// }
function _add(n1, n2) {
    let result;
    if (typeof n1 === "number" && typeof n2 === "number") {
        result = n1 + n2;
        return result;
    }
    else {
        result = n1.toString() + n2.toString();
    }
}
const combineAges = _add(23, 45);
function Songs(songs) {
    // console.log(songs, "songs");
    // for (let song of songs) {
    //   console.log(song, "this is the song!");
    // }
}
let songs = {
    name: "All",
    age: 34,
    songList: ["name", "hassan", "habib"],
};
Songs(songs);
// type Songs = {
//   songs: string[];
//   // songs: Array<string>;
// };
// function Songs(singer: string, ...songs: string[]) {
//   console.log(songs, "songs");
//   for (let song of songs) {
//     console.log(song, "this is the song!");
//   }
// }
// // let songs = ["name", "hassan", "habib"]
// Songs("name", "hassan", "habib");
function getSongRecordingDate(song) {
    switch (song) {
        case "Strange Fruit":
            return new Date("April 20, 1939"); // Ok
        case "Greensleeves":
            return "unknown";
        // Error: Type 'string' is not assignable to type 'Date'.
        default:
            return undefined; // Ok
    }
}
//let inputAndOutput = (songs: string[],count:number)=>number;
let songs2 = ["juice", "shake it off", "Whats Up"];
function runOnSongs(getSongs) {
    for (let i = 0; i < songs2.length; i++) {
        console.log(getSongs(i), "run");
    }
}
function getSongs(index) {
    return `${songs2[index]}`;
}
// runOnSongs(getSongs);
// ...............................
let signer;
signer = function (song) {
    return `Signing ${song}`;
};
const _songs = ["Call Me", "Jolene", "The Chain"];
// .........................
const records = [];
function saveRecords(newRecords) {
    newRecords.forEach((record) => records.push(record));
}
saveRecords(["21", "Come On Over", "The Bodyguard"]);
//  Void
// The void type is like having no type at all. A function that returns nothing in Typescript/Javascript actually return undefined.
const test = (arg) => {
    console.log(arg);
};
console.log(test("test"));
// Here void is useful to show that we expect nothing in return of this function, and that undefined is not an error
//Never;
// The never type in Typescript is useful fore defining a function that never returns. It must always have an unreachable endpoint. For example, a function that has an infinite loop will never return something :
//
const renderGame = (game) => {
    while (true) {
        game.renderFrame();
    }
};
const throwError = (message) => {
    throw new Error(message);
};
throwError("Error occurred");
//never : for typescript function that will never return something, can be always running or throw some error (doesn’t have time to return).
//void: for Typescript function that will return nothing.
// any: for Typescript function where you are not sure of it returns.
function fail(message) {
    throw new Error(`Invariant failure: ${message}.`);
}
function workWithUnsafeParam(param) {
    if (typeof param !== "string") {
        fail(`param should be a string, not ${typeof param}`);
    } //
    // Here, param is known to be type string
    param.toUpperCase(); // Ok
}
//

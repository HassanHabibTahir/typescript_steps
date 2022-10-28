//Optional Parameters
// function announceSong(song: string, singer?: string) {
//   console.log(`Song: ${song}`);
//   if (singer) {
//     console.log(`Singer: ${singer}`);
//   }
// }
function _add(n1, n2) {
    var result;
    if (typeof n1 === "number" && typeof n2 === "number") {
        result = n1 + n2;
        return result;
    }
    else {
        result = n1.toString() + n2.toString();
    }
}
var combineAges = _add(23, 45);
function Songs(songs) {
    // console.log(songs, "songs");
    // for (let song of songs) {
    //   console.log(song, "this is the song!");
    // }
}
var songs = {
    name: "All",
    age: 34,
    songList: ["name", "hassan", "habib"]
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
var songs2 = ["juice", "shake it off", "Whats Up"];
function runOnSongs(getSongs) {
    for (var i = 0; i < songs2.length; i++) {
        console.log(getSongs(i), "run");
    }
}
function getSongs(index) {
    return "".concat(songs2[index]);
}
runOnSongs(getSongs);

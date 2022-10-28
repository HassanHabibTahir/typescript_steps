"use strict";
const person = {
    name: "Maxmilian",
    age: 30,
};
console.log(person.name);
// interface Bear2 extends Animal {
//   honey: boolean;
// }
const getBear = ({ honey, name }) => {
    return {
        honey: honey,
        name: name,
    };
};
let n = { honey: true, name: "name" };
const bear = getBear(n);
const _person = {
    name: "James",
    address: {
        country: "Chile",
        city: "Santiago",
    },
};
const person_ = {
    name: "James",
    address: {
        country: "Chile",
        city: "Santiago",
    },
};
const person3 = {
    name: "James",
};
person3.address = {
    country: "Chile",
    city: "Santiago",
};
const heroesInBooks = {
    values: {
        age: 45,
        game: "56",
    },
    names: {
        Gunslinger: "The Dark Tower",
        "Jack Torrance": "The Shining",
    },
};
const person4 = {
    name: "hasan",
    address: {
        country: "45",
        city: "56",
    },
    _data: {
        Gunslinger: "The Dark Tower",
        "Jack Torrance": "The Shining",
    },
};
const poem = Math.random() > 0.5
    ? { name: "The Double Image", pages: 7, type: "pages" }
    : { name: "Her Kind", rhymes: true, type: "rhymes" };
if (poem.type === "pages") {
    console.log(`It's got pages: ${poem.pages}`); // Ok
}
else {
    console.log(`It rhymes: ${poem.rhymes}`);
}
poem.type; // Type: 'pages' | 'rhymes'
// Equivalent to:
// {
// genre: string;
// name: string;
// pages: number;
// }
//Optional Parameters
function announceSong(song, singer) {
    console.log(`Song: ${song}`);
    if (singer) {
        console.log(`Singer: ${singer}`);
    }
}

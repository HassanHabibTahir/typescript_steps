const person: {
  name: string;
  age: number;
} = {
  name: "Maxmilian",
  age: 30,
};
console.log(person.name);

//Nested Object Types;

type Animal = {
  name: string;
};

type Bear = Animal & {
  honey: boolean;
};
// interface Bear2 extends Animal {
//   honey: boolean;
// }

const getBear = ({ honey, name }: Bear) => {
  return {
    honey: honey,
    name: name,
  };
};
let n = { honey: true, name: "name" };
const bear = getBear(n);
// bear.name;
// bear.honey;

interface Person {
  name: string;
  address: {
    country: string;
    city: string;
  };
}

const _person: Person = {
  name: "James",
  address: {
    country: "Chile",
    city: "Santiago",
  },
};

/////
// 👇️ using type alias
type Person2 = {
  name: string;
  address: {
    country: string;
    city: string;
  };
};

const person_: Person2 = {
  name: "James",
  address: {
    country: "Chile",
    city: "Santiago",
  },
};

///
type Person3 = {
  name: string;
  address?: {
    // 👈️ address is optional
    country: string;
    city: string;
  };
};

const person3: Person3 = {
  name: "James",
};

person3.address = {
  country: "Chile",
  city: "Santiago",
};

interface Person4 {
  name: string;
  address: {
    country: string;
    city: string;
    // [key: string]: any; // 👈️ index signature
  };
  _data: {
    [key: string]: string;
  };
}
interface StringByString {
  values: {
    age: number;
    game: string;
  };
  names: {
    [key: string]: string;
  };
}
const heroesInBooks: StringByString = {
  values: {
    age: 45,
    game: "56",
  },
  names: {
    Gunslinger: "The Dark Tower",
    "Jack Torrance": "The Shining",
  },
};
const person4: Person4 = {
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
// Narrowing Object Types
//Discriminated Unions
type PoemWithPages = {
  name: string;
  pages: number;
  type: "pages";
};
type PoemWithRhymes = {
  name: string;
  rhymes: boolean;
  type: "rhymes";
};
type Poem = PoemWithPages | PoemWithRhymes;
const poem: Poem =
  Math.random() > 0.5
    ? { name: "The Double Image", pages: 7, type: "pages" }
    : { name: "Her Kind", rhymes: true, type: "rhymes" };
if (poem.type === "pages") {
  console.log(`It's got pages: ${poem.pages}`); // Ok
} else {
  console.log(`It rhymes: ${poem.rhymes}`);
}
poem.type; // Type: 'pages' | 'rhymes'
// poem.pages;

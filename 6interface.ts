interface Book {
  author?: string;
  pages: number;
}
// Ok
const ok: Book = {
  author: "Rita Dove",
  pages: 80,
};
const missing: Book = {
  pages: 80,
};
type Poet = {
  born?: number;
  name: string;
};
interface _Poet {
  born?: number;
  name?: string;
}
let valueLater: Poet;
// Ok
valueLater = {
  born: 1935,
  name: "Sara Teasdale",
};
// Error: Type 'string' is not assignable to 'Poet'.
valueLater = {
  // number error
  // born: true,

  // Error: Type 'boolean' is not assignable to type 'number'.
  name: "Sappho",
};

// Types of Properties
interface Book {
  author?: string;
  pages: number;
}
// Ok
const _ok: Book = {
  author: "Rita Dove",
  pages: 80,
};
const _missing: Book = {
  pages: 80,
};

//Read-Only Properties
interface Page {
  readonly text: string;
}
function read(page: Page) {
  // Ok: reading the text property doesn't attempt to modify it
  console.log(page.text);
  // Cannot assign to 'text' because it is a read-only property.ts(2540)

  // page.text += "!";
}

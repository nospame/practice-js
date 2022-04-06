// # 1. Make a hash to store a person's first name, last name, and email address. Then print each attribute on separate lines.
var person = {
  firstName: "Jonathan",
  lastName: "Waxman",
  email: "thewaxman@waxy.com"
};
console.log(person.firstName);
console.log(person.lastName);
console.log(person.email);

// # 2. Make an array of hashes to store the first name and last name for 3 different people. Then print out the first person's info.
var people = [
  { firstName: "Jon", lastName: "Stewart", email: "jstew@stewy.org" },
  { firstName: "Brian", lastName: "Cranston", email: "notbreakingbad@gmail.com" },
  { firstName: "Mariah", lastName: "Carey", email: "alliwantforchristmasistoneverhavetosingthissongagain@yahoo.com" }
];
console.log(people[0]);

// # 3. Make a hash to store prices for 3 different menu items. Then add a new menu item and price and print the hash to see the result.
var menu = { fries: 2.5, hamburger: 7, milkshake: 5 };
menu.soda = 1.75;
console.log(menu);

// # 4. Make a hash to store a book's title, author, number of pages, and language. Then print each attribute on separate lines.
var book = { title: "East of Eden", author: "John Steinbeck", pages: 696, language: "English" };
console.log(book.title);
console.log(book.author);
console.log(book.pages);
console.log(book.language);

// # 5. Make an array of hashes to store the title and author for 3 different books. Then print out the third book's author.
var books = [
  { title: "The Left Hand of Darkness", author: "Ursula K. Le Guin" },
  { title: "A Light in the Attic", author: "Shel Silverstein" },
  { title: "The World Atlas of Coffee", author: "James Hoffmann" }
];
console.log(books[2].author);

// # 6. Make a hash to store 3 different states and their capitals. Then add a new state and capital and print the hash to see the result.
var states = {
  Kansas: "Topeka",
  Washington: "Olympia",
  California: "Sacramento"
};
states.NewYork = "Albany";
console.log(states);

// # 7. Make a hash to store a laptop's brand, model, and year. Then print each attribute on separate lines.
var laptop = {
  brand: "Apple",
  model: "MacBook Air",
  year: 2022
};

console.log(laptop.brand);
console.log(laptop.model);
console.log(laptop.year);

for (let prop in laptop) {
  console.log(laptop[prop]);
}

// # 8. Make an array of hashes to store the brand and model for 3 different laptops. Then print out the second laptop's model.
var laptops = [
  laptop,
  { brand: "Dell", model: "Latitude", year: "2019" },
  { brand: "Acer", model: "Aspire", year: "2016" }
];
console.log(laptops[1].model);

// # 9. Make a hash to store definitions for 2 different words. Then add a new word and definition and print the hash to see the result.
var words = { "couch": "a thing you and 1-3 others can sit on", "glasses": "they help you see" };
words.mouse = "a small animal or a thing to help you use your computer";
console.log(words);

// # 10. Make a hash to store a shirt's brand, color, and size. Then print each attribute on separate lines.
var shirt = {
  brand: "Banana Republic",
  color: "black",
  size: "small"
};

for (let prop in shirt) {
  console.log(shirt[prop]);
}

// # SOLUTIONS: https://gist.github.com/peterxjang/d257aec07882d78009bd796ed53f81bb
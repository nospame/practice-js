// #  1. Start with an array of numbers and create a new array with each number times 3.
// #     For example, [1, 2, 3] becomes[3, 6, 9].
var numbers = [1, 2, 3];
numbers = numbers.map(function (number) {
  return number * 3;
});
console.log(numbers);

numbers = [1, 2, 3];
numbers = numbers.map(number => number * 3);
console.log(numbers);

// #  2. Start with an array of strings and create a new array with each string upcased.
// #     For example, ["hello", "goodbye"] becomes["HELLO", "GOODBYE"].
var strings = ["hello", "goodbye"];
strings = strings.map(string => string.toUpperCase());
console.log(strings);

// #  3. Start with an array of hashes and create a new array of string values from each hash's :name key.
// #     For example, [{ name: "Alice", age: 27 }, { name: "Blane", age: 16 }] becomes["Alice", "Blane"].
var people = [{ name: "Alice", age: 27 }, { name: "Blane", age: 16 }];
var names = people.map(person => person.name);
console.log(names);

// #  4. Start with an array of numbers and create a new array with each number plus 7.
// #     For example, [1, 2, 3] becomes[8, 9, 10].
numbers = [1, 2, 3];
numbers = numbers.map(number => number + 7);
console.log(numbers);

// #  5. Start with an array of strings and create a new array with each string's length.
// #     For example, ["hello", "goodbye"] becomes[5, 7].
strings = ["hello", "goodbye"];
var lengths = strings.map(string => string.length);
console.log(lengths);

// #  6. Start with an array of hashes and create a new array of number values from each hash's :age key.
// #     For example, [{ name: "Alice", age: 27 }, { name: "Blane", age: 16 }] becomes[27, 16].
people = [{ name: "Alice", age: 27 }, { name: "Blane", age: 16 }];
var ages = people.map(person => person.age);
console.log(ages);

// #  7. Start with an array of numbers and create a new array with each number divided by 2.
// #     For example, [1, 2, 3] becomes[0.5, 1.0, 1.5].
numbers = [1, 2, 3];
numbers = numbers.map(number => number / 2);
console.log(numbers);

// #  8. Start with an array of strings and create a new array with each string's first letter only.
// #     For example, ["hello", "goodbye"] becomes["h", "g"].
strings = ["hello", "goodbye"];
strings = strings.map(string => string[0]);
console.log(strings);

// # 9.  Start with an array of hashes and create a new array of number values from each hash's :age key times 2.
// #     For example, [{ name: "Alice", age: 27 }, { name: "Blane", age: 16 }] becomes[54, 32].
people = [{ name: "Alice", age: 27 }, { name: "Blane", age: 16 }]
ages = people.map(person => person.age * 2);
console.log(ages);

// # 10. Start with an array of numbers and create a new array with each number converted into a string.
// #     For example, [1, 2, 3] becomes["1", "2", "3"].
numbers = [1, 2, 3];
numbers = numbers.map(number => number.toString());
console.log(numbers);


// # SOLUTIONS(using while loop): https://gist.github.com/peterxjang/b9ac4390aad2301a2238efc95c904f3d
// # SOLUTIONS(using.each shortcut): https://gist.github.com/peterxjang/66598fd7cdbc67fe663624e217cebbaf
// # SOLUTIONS(using.map shortcut): https://gist.github.com/peterxjang/23a8f8a51601e4288ba3a8aa6d1f1c98
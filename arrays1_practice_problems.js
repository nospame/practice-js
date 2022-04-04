// # 1. Create an array to store 3 words. Then add two more words to the array and print the array on one line.
var words = ["potato", "apple", "banana"]
words.push("jonathan");
console.log(words);

// # 2. Create an array to store 4 letters. Then change the second letter to a number and print the array on one line.
var letters = ["a", "b", "c", "g"];
letters[1] = 2;
console.log(letters);

// # 3. Create an array to store 5 numbers. Then print out each number on separate lines with a while loop.
var numbers = [8, 6, 7, 5, 3];
let i = 0;
while (i < numbers.length) {
  console.log(numbers[i]);
  i++;
}

for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

// # 4. Create an array to store 1 number. Then add three more numbers to the array and print the array on one line.
numbers = [4];
numbers.push(2, 3, 27);
console.log(numbers);

// # 5. Create an array to store 3 strings with lower case letters. Then change the third string to have all capital letters and print the array on one line.
var strings = ["banana", "dumbbell", "housecat"];
strings[2] = strings[2].toUpperCase();
console.log(strings);

// # 6. Create an array to store 3 names. Then print out each name on separate lines with a while loop.
var names = ["George", "Michael", "Bluth"];
i = 0;
while (i < names.length) {
  console.log(names[i]);
  i++;
}

for (let i = 0; i < names.length; i++) {
  console.log(names[i]);
}

names.forEach(function (name) {
  console.log(name);
});

// # 7. Create an array to store 2 strings. Then add one string to the array and print the array on one line.
strings = ["bookcase", "turntable"];
strings.push("radio");
console.log(strings);

// # 8. Create an array to store 5 numbers. Then change the first number to 10 times its original value and print the array on one line.
numbers = [6, 0, 6, 0, 8, 4];
numbers[0] *= 10;
console.log(numbers);

// # 9. Create an array to store 2 numbers. Then print out each number on separate lines with a while loop.
numbers = [42, 109];
i = 0;
while (i < numbers.length) {
  console.log(numbers[i]);
  i++;
}

for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

for (const number of numbers) {
  console.log(number);
}

// # 10. Create an array to store names of 3 different countries. Then add one more country and print the array one line.
var countries = ["Venezuela", "Argentina", "Chile"];
countries.push("Brazil");
console.log(countries);


// # SOLUTIONS: https://gist.github.com/peterxjang/7095a2b19e1da2cc18d4a0dcd66cb8f1
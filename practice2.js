// 1) Write a function that takes in an array of numbers and returns its sum.
function sum(numbers) {
  var sum = 0;
  numbers.forEach(function (number) {
    sum += number;
  });
  return sum;
}

console.log(sum([100, 200, 12]));

// 2) Write a function that takes in an array of strings and returns the smallest string.
function smallestString(strings) {
  var smallest = strings[0];
  strings.forEach(function (string) {
    if (string.length < smallest.length) {
      smallest = string;
    }
  });
  return smallest;
}

console.log(
  smallestString(["orange", "banana", "oat", "c"])
);

// 3) Write a function that takes in an array of numbers and returns a new array with the numbers in reverse order.
function reverse(numbers) {
  var reversedNumbers = [];
  while (numbers.length > 0) {
    reversedNumbers.push(numbers.pop());
  }
  return reversedNumbers;
}

console.log(
  reverse([0, 1, 2, 219, 3, 5])
);

// 4) Write a function that takes in an array of words and returns the number of words that begin with the letter “a”.
function findAWords(words) {
  var aWords = [];
  words.forEach(function (word) {
    if (word[0] === "a") {
      aWords.push(word);
    }
  });
  return aWords;
}

console.log(
  findAWords(["banana", "apple", "aardvark", "giraffe", "antelope"])
);

// 5) Write a function that takes in an array of strings and joins them together to make a single string separated by commas.
function joinWithCommas(strings) {
  // var joined = [];
  // strings.forEach(function (string) {
  //   joined.push(string);
  //   joined.push(",");
  // });
  // joined.pop();
  // return joined.join("");
  var joined = strings.join();
  return joined;
}

console.log(
  joinWithCommas(["the", "quick", "brown", "fox"])
);

// 6) Write a function that takes in an array of numbers and returns the product of all the numbers (each number multiplied by each other).
function multiply(numbers) {
  var product = 1;
  numbers.forEach(function (number) {
    product *= number;
  });
  return product;
}

console.log(
  multiply([1, 3, 5, 10])
);

// 7) Write a function that takes in an array of numbers and returns the two smallest numbers.
// find which number is the smallest, then find second smallest?
// loop through to find the smallest
// save the index of the smallest
// loop through to find the next smallest (smallest that is NOT the same index)


function twoSmallest(numbers) {
  var smallest = numbers[0];
  var smallestIndex = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < smallest) {
      smallest = numbers[i];
      smallestIndex = i;
    }
  }
  var nextSmallest = numbers[smallestIndex + 1];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < nextSmallest && i !== smallestIndex) {
      nextSmallest = numbers[i];
    }
  }
  var twoSmallest = [smallest, nextSmallest];
  return twoSmallest;
}

console.log(
  twoSmallest([10, 1, 2, 5, 12])
);

// 8) Write a function that takes in an array of numbers and returns a count of how many zeros are in the array.
function howManyZeros(numbers) {
  var count = 0;
  numbers.forEach(function (number) {
    if (number === 0) {
      count++;
    }
  });
  return count;
}

console.log(
  howManyZeros([2, 3, 1, 9, 0, 18])
);


// 9) Write a function that takes in an array of numbers and returns true if all the numbers are bigger than 10, otherwise returns false.
function allBiggerThanTen(numbers) {
  var allBigger = true;
  // numbers.forEach(function (number) {
  //   if (number <= 10) {
  //     allBigger = false;
  //   }
  // });
  // return allBigger;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] <= 10) {
      return false;
    }
  }
  return true;
}

console.log(
  allBiggerThanTen([12, 17, 14, 9])
);


// 10) Write a function that takes in an array of words and returns the number of times the letter “a” appeared in total.
// (solutions to half of the ruby problems: https://gist.github.com/peterxjang/a9a3827be5077abe008b62f6f9900d71)


// BONUS PROBLEMS
// Write a function that accepts a string and returns whether it’s a palindrome.
// Write a function to generate/print/store the first “n” prime numbers.
// Given a tic-tac-toe board (matrix of 3 x 3), write a function that can check to see whether X or O won.
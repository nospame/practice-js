// # 1. Write a function that takes in a number and returns the number times two. Then run the function and print the result.
function double(number) {
  return number * 2;
}
console.log(
  double(7)
);

// # 2. Write a function that takes in a string and returns the string with all capital letters. Then run the function and print the result.
function capitalizeAll(string) {
  return string.toUpperCase();
}
console.log(
  capitalizeAll("banana")
);

// # 3. Write a function that takes in two numbers and returns the first number subtracted by the second. Then run the function and print the result.
function subtract(num1, num2) {
  return num1 - num2;
}
console.log(
  subtract(7, 3)
);

// # 4. Write a function that takes in a number and returns the number times itself. Then run the function and print the result.
function squareNumber(num) {
  return num * num;
}
console.log(
  squareNumber(12)
);

// # 5. Write a function that takes in a string and returns the first letter of the string. Then run the function and print the result.
function firstLetter(string) {
  return string[0];
}
console.log(
  firstLetter("carburetor")
);

// # 6. Write a function that takes in three strings and returns a string that combines all three strings with spaces in between. Then run the function and print the result.
function combineStrings(str1, str2, str3) {
  return [str1, str2, str3].join(' ');
}
console.log(
  combineStrings("apple", "banana", "oats")
);

// # 7. Write a function that takes in a number and returns the number as a string. Then run the function and print the result.
function numberToString(num) {
  return num.toString();
}
console.log(7);
console.log(numberToString(7));

// # 8. Write a function that takes in a string and returns the string repeated 5 times. Then run the function and print the result.
function repeatFiveTimes(str) {
  var result = '';
  for (let i = 0; i < 5; i++) {
    result += str;
  }
  return result;
}
console.log(
  repeatFiveTimes("tacocat")
);

// # 9. Write a function that takes in 3 numbers and returns the average (the sum divided by 3.0). Then run the function and print the result.
function meanAverage(num1, num2, num3) {
  return (num1 + num2 + num3) / 3;
}
console.log(
  meanAverage(8, 16, 212)
);

// # 10. Write a function that takes in a number and returns the number times 10 plus 30. Then run the function and print the result.
function timesTenPlusThirty(num) {
  return num * 10 + 30;
}
console.log(
  timesTenPlusThirty(18)
);

// # SOLUTIONS: https://gist.github.com/peterxjang/6a26d3c698c651dd6e9ccb168d32648c
/*
  Interview Question:
  Given a string
  return whether or not it's possible to make a palindrome out of the string's characters
  What is it about a string that makes it possible for it to be a palindrome?
  Determine whether or not it is possible for the string's characters to be
  rearranged into a palindrome.
*/

// racecar
// radar
// tacocat
// levle
// kayak

const str1 = "";
const expected1 = false;

const str2 = "a";
const expected2 = true;

const str3 = "ddaa";
const expected3 = true;
// Explanation: "daad" or "adda"

const str4 = "dda";
const expected4 = true;
// Explanation: "dad"

//                V
const str5 = "aadda";
const expected5 = true;
// Explanation: "daaad"

const str6 = "abc";
const expected6 = false;

//     v
// baabcceee

/* 
  For a string to be able to be re-ordered into a palindrome
  It must have an even occurrence of every character
  Unless it is odd length, then it can have 1 character that
  can have an odd number of occurrences.
  Another way to look at it would be, if you cancel out ever char that has a pair,
  it can be a palindrome if you are left with 0 or 1 char remaining:
    - "dad" the "d" cancels with itself to leave "a"
    - "daad" the "d" and "a" cancel with itself to leave nothing
    - "daam" the "a" cancels with itself leaving "dm", more than 1 char remaining, can't be palindrome
*/

const canBecomePalindrome = (str) => {
  // if str length is zero, return false
  if (str.length === 0) {
    return false;
  }

  const charCountMap = {}; // map of the character counts

  for (const char of str) {
    charCountMap.hasOwnProperty(char)
      ? charCountMap[char]++
      : (charCountMap[char] = 1);
  }
  console.log(charCountMap);

  const arr = Object.values(charCountMap);
  let oddCount = 0;
  //   console.log(arr);

  for (const num of arr) {
    num % 2 !== 0 && oddCount++;
  }

  if (str.length % 2 === 0) {
    // if string length is even, no character
    if (oddCount > 0) {
      return false;
    } else {
      return true;
    }
  }

  return oddCount === 1;
};

const numOfOdd = (map) => {};

console.log(canBecomePalindrome(str1), expected1);
console.log(canBecomePalindrome(str2), expected2);
console.log(canBecomePalindrome(str3), expected3);
console.log(canBecomePalindrome(str4), expected4);
console.log(canBecomePalindrome(str5), expected5);

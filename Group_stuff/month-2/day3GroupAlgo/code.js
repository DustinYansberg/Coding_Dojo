/* 
  String Encode

  You are given a string that may contain sequences of consecutive characters.
  Create a function to shorten a string by including the character,
  then the number of times it appears. 
  
  
  If final result is not shorter (such as "bb" => "b2" ),
  return the original string.
  */

var str1 = "aaaabbcddd";
var expected1 = "a4b2c1d3";

var str2 = "";
var expected2 = "";

var str3 = "a";
var expected3 = "a";

var str4 = "bbcc";
var expected4 = "bbcc";

var str5 = "aaaabbcdddaaa";
var expected5_bonus = "a4b2c1d3a3";
var expected5 = "a7b2c1d3";

/**
 * Encodes the given string such that duplicate characters appear once followed
 * by a number representing how many times the char occurs. Only encode strings
 * when the result yields a shorter length.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str The string to encode.
 * @returns {string} The given string encoded.
 */
function encodeStr(str) {
  out = "";
  var count = 0;

  for (var i = 0; i < str.length; i++) {
    count++; // iterate count every time we loop
    if (str[i] != str[i + 1]) {
      out += str[i];
      out += count;
      count = 0; // reset count to 0 for next run of characters
    }
  }
  if (out.length < str.length) {
    return out;
  }
  return str;
}

console.log("Actual:\t\t", encodeStr(str1), "\nExpected:\t", expected1, "\n");
console.log("Actual:\t\t", encodeStr(str2), "\nExpected:\t", expected2, "\n");
console.log("Actual:\t\t", encodeStr(str3), "\nExpected:\t", expected3, "\n");
console.log("Actual:\t\t", encodeStr(str4), "\nExpected:\t", expected4, "\n");
console.log(
  "Actual:\t\t",
  encodeStr(str5),
  "\nExpected:\t",
  expected5_bonus,
  "\n"
);
/*******************\t**********************************************************/

/* 
  String Decode  
*/

var str1 = "a3b2c1d3";
var expected1 = "aaabbcddd";

var str2 = "a3b2c12d10";
var expected2 = "aaabbccccccccccccdddddddddd";

/**
 * Decodes the given string by duplicating each character by the following int
 * amount if there is an int after the character.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str An encoded string with characters that may have an int
 *    after indicating how many times the character occurs.
 * @returns {string} The given str decoded / expanded.
 */
function decodeStr(str) {
  var out = "";
  var map1 = new Map();

  for (var i = 0; i < str.length; i += 2) {
    // loop through string, and use while loop to capture all numbers following a char

    let char = str[i]; // string to be used as a key in the hashmap
    var j = i + 1; // iterator for the next while loop. Will be used to see if str[j] is a number
    var numStr = ""; // the str from i to (j-1) that is parsable as a number

    // add the current value of str[j] to numStr as long as str[j] is parsable as a number
    while (parseInt(str[j]) || str[j] == "0") {
      numStr += str[j];
      j++;
    }

    // if the number captured in numStr is more than 1 digit, we need to move i forward so that the next iteration of i is the next alphabetical char in str
    while (j > i + 2) {
      i++;
    }

    // map the char as a key with its number of instances as a value
    map1.set(char, parseInt(numStr));
  }
  // iterate through the key, value pairs and add the key to the output string 'value' times
  for (const [key, value] of map1.entries()) {
    var v = value;
    while (v > 0) {
      out += key;
      v--;
    }
  }
  // console.log(out)
  return out;
}
console.log("Actual:\t\t", decodeStr(str1), "\nExpected:\t", expected1, "\n");
console.log("Actual:\t\t", decodeStr(str2), "\nExpected:\t", expected2, "\n");

/*****************************************************************************/

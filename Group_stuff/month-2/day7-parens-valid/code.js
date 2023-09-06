/* 
Parens Valid

Given an str that has parenthesis in it
return whether the parenthesis are valid
*/

var str1 = "Y(3(p)p(3)r)s";
var expected1 = true;

var str2 = "N(0(p)3";
var expected2 = false;
// Explanation: not every parenthesis is closed.

var str3 = "N(0)t ) 0(k";
var expected3 = false;
// Explanation: because the second ")" is premature: there is nothing open for it to close.

var str4 = "a(b))(c";
var expected4 = false;
// Explanation: same number of opens and closes but the 2nd closing closes nothing.

/**
 * Determines whether the parenthesis in the given string are valid.
 * Each opening parenthesis must have exactly one closing parenthesis.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str
 * @returns {boolean} Whether the parenthesis are valid.
 */
function parensValid(str) {
  let count = 0;
  let i = 0;
  while (count >= 0 && i < str.length) {
    if (str[i] == "(") count += 1;
    else if (str[i] == ")") count -= 1;
    i++;
  }
  return count != 0 ? false : true;
}

console.log(parensValid(str1));
console.log(parensValid(str2));
console.log(parensValid(str3));
console.log(parensValid(str4));

/*****************************************************************************/
/* 
Braces Valid

Given a string sequence of parentheses, braces and brackets, determine whether it is valid. 
*/

var str1 = "W(a{t}s[o(n{ c}o)m]e )h[e{r}e]!";
var expected1 = true;

var str2 = "D(i{a}l[ t]o)n{e";
var expected2 = false;

var str3 = "A(1)s[O (n]0{t) 0}k";
var expected3 = false;

/**
 * Determines whether the string's braces, brackets, and parenthesis are valid
 * based on the order and amount of opening and closing pairs.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str
 * @returns {boolean} Whether the given strings braces are valid.
 */
function bracesValid(str) {
  const openBraces = ["[", "{", "("];
  const closedBraces = [")", "}", "]"];
  const pairs = {
    ")": "(",
    "}": "{",
    "]": "[",
  };
  let stack = [];

  for (let i = 0; i < str.length; i++) {
    if (openBraces.includes(str[i])) {
      stack.push(str[i]);
    } else if (
      closedBraces.includes(str[i]) &&
      pairs[str[i]] == stack[stack.length - 1]
    ) {
      stack.pop();
    } else if (
      closedBraces.includes(str[i]) &&
      pairs[str[i]] != stack[stack.length - 1]
    ) {
      console.log(str[i]);
      return false;
    }
  }
  return stack.length != 0 ? true : false;
}

console.log(bracesValid(str1));
console.log(expected1);

/*****************************************************************************/

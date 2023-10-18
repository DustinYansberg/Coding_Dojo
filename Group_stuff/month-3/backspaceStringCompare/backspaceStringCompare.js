/* 
 ██╗ ██╗ 
████████╗
╚██╔═██╔╝
████████╗
╚██╔═██╔╝
 ╚═╝ ╚═╝ 
         
    Given two 🎻 strings S and T containing only lowercase letters and "#" characters,
    return if they are equal when both are typed into empty text editors.
    👉 '#' character means a 'backspace' character.
    i.e., after processing the backspaces, are the two strings equal?
    return true or false
    Ninja Bonus: solve in O(n) time
*/

// ad#clp
// aclp

//          v
const S1 = "ab#c";
// a -> ab -> a -> ac
//          v
const T1 = "ad#c";
// a -> ad -> a -> ac
const expected1 = true;
// Explanation: Both S and T become "ac"

//          v
const S2 = "ab##";
// ["a", "b"]
// "str1"
// a -> ab -> a -> ""
const T2 = "c#d#";
// []
// "str2"
// c -> "" -> d -> ""
const expected2 = true;
// Explanation: Both S and T become ""

const S3 = "a##c";
// a -> "" -> "" -> c
const T3 = "#a#c";
// "" -> a -> "" -> c
const expected3 = true;
// Explanation: Both S and T become "c"

const S4 = "a#c";
// a -> "" -> c
const T4 = "b";
// b
const expected4 = false;
// Explanation: S becomes "c" while T becomes "b".

function backspaceStringCompare(str1, str2) {
  str1 = str1.split("");
  newStr1 = [];

  str2 = str2.split("");
  newStr2 = [];

  let i = 0;

  while (i < str1.length || i < str2.length) {
    if (str1[i] != "#") {
      newStr1.push(str1[i]);
    } else {
      newStr1.pop(str1[i]);
    }
    if (str2[i] != "#") {
      newStr2.push(str2[i]);
    } else {
      newStr2.pop(str2[i]);
    }
    i++;
  }

  return newStr1.join("") == newStr2.join("");
}

// function backspaceStringCompare(s, t) {
//   let i = 0;
//   const outSArr = [];
//   const outTArr = [];

//   while (i < s.length) {
//     s[i] !== "#" ? outSArr.push(s[i]) : outSArr.pop();
//     i++;
//   }

//   i = 0;

//   while (i < t.length) {
//     t[i] !== "#" ? outTArr.push(t[i]) : outTArr.pop();
//     i++;
//   }

//   return outSArr.join("") == outTArr.join("");
// }

//---------------------

console.log(backspaceStringCompare(S1, T1));
console.log(backspaceStringCompare(S2, T2));
console.log(backspaceStringCompare(S3, T3));
console.log(backspaceStringCompare(S4, T4));

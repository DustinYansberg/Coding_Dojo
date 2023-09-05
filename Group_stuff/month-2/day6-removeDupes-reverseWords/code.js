/* 
  Given a string,
  return a new string with the duplicate characters excluded
  Bonus: Keep only the last instance of each character.
*/
// const str1 = "abcABCabcABCabcABC";
// const expected1 = "abcABC";

// const str2 = "helloo";
// const expected2 = "helo";

// const str3 = "";
// const expected3 = "";

// const str4 = "aa";
// const expected4 = "a";

// //bonus
// const str5 = "aba"
// const expected5 = "ba"

// function stringDedupe(str) {
//     let obj = {}
//     let out = ''

//     if(str == ''){
//         return ''
//     }

//     for(let i=str.length-1; i > 0; i--){
//         if(!obj[str[i]]){
//             obj[str[i]] = 1
//             out += str[i]
//         }
//     }
//     return out
// }

// console.log(stringDedupe(str1));
// console.log(stringDedupe(str2));
// console.log(stringDedupe(str3));
// console.log(stringDedupe(str4));
// console.log(stringDedupe(str5));

/* 
  Given a string containing space separated words
  Reverse each word in the string.
  If you need to, use .split to start, then try to do it without.
*/

const strA = "hello";
const expectedA = "olleh";

const strB = "hello world";
const expectedB = "olleh dlrow";

const strC = "abc def ghi";
const expectedC = "cba fed ihg";

/**
 * Reverses the letters in each words in the given space separated
 * string of words. Does NOT reverse the order of the words themselves.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str Contains space separated words.
 * @returns {string} The given string with each word's letters reversed.
 */
function reverseWords(str) {
    let previous = 0
    let out =''

    for(var i=previous; i < str.length; i=previous){
        if(str.indexOf(' ', previous) == -1){
            let str_to_rev = str.slice(previous)
            str_to_rev = str_to_rev.split('').reverse().join('')
            out += str_to_rev
            return out
        }else{
            let str_to_rev = str.slice(previous, str.indexOf(' ', previous))
            str_to_rev = str_to_rev.split('').reverse().join('')
            out += str_to_rev + ' '
        }
        previous = str.indexOf(' ', previous) + 1
    }
    
    return out
}
console.log(reverseWords(strA)) //expectedA: olleh
console.log(reverseWords(strB)) //expectedB: olleh dlrow
console.log(reverseWords(strC)) //expectedC: cba fed ihg
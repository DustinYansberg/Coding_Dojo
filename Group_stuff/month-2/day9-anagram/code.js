/* 
  An anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
  typically using all the original letters exactly once.

  Is there a quick way to determine if they aren't an anagram before spending more time?

  Given two strings
  return whether or not they are anagrams
*/

var strA1 = "yes";
var strB1 = "eys";
var expected1 = true;

var strA2 = "yes";
var strB2 = "eYs";
var expected2 = true;

var strA3 = "no";
var strB3 = "noo";
var expected3 = false;

var strA4 = "silent";
var strB4 = "listen";
var expected4 = true;

/**
 * Determines whether s1 and s2 are anagrams of each other.
 * Anagrams have all the same letters but in different orders.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} s1
 * @param {string} s2
 * @returns {boolean} Whether s1 and s2 are anagrams.
 */
function isAnagram(s1, s2) {
  if (s1.length != s2.length) {
    return false;
  }

  s1 = s1.toLowerCase();
  s2 = s2.toLowerCase();
  s1_dict = {};
  s2_dict = {};

  for (var i = 0; i <= s1.length; i++) {
    !s1_dict[s1[i]] ? (s1_dict[s1[i]] = 1) : (s1_dict[s1[i]] += 1);
    !s2_dict[s2[i]] ? (s2_dict[s2[i]] = 1) : (s1_dict[s2[i]] += 1);
  }
  for (const key in s1_dict) {
    if (s1_dict[key] != s2_dict[key]) {
      return false;
    }
  }
  return true;
}

console.log(isAnagram(strA1, strB1), expected1);
console.log(isAnagram(strA2, strB2), expected2);
console.log(isAnagram(strA3, strB3), expected3);

/*****************************************************************************/

/* 
  Given a string that may have extra spaces at the start and the end,
  return a new string that has the extra spaces at the start and the end trimmed (removed)
  do not remove any other spaces.
*/

var str1 = "   hello world     ";
var expected1 = "hello world";

/**
 * Trims any leading or trailing white space from the given str.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str
 * @returns {string} The given string with any leading or trailing white space
 *    stripped.
 */
function trim(str) {
  let i = 0;
  let j = str.length - 1;

  while (i != j) {
    str[i] == " " ? i++ : (i = i);
    str[j] == " " ? j-- : (j = j);

    if (str[i] != " " && str[j] != " ") {
      return str.substring(i, j + 1);
    }
  }
}

console.log(trim(str1));
/*****************************************************************************/

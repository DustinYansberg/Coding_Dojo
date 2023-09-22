/* 
  Recursively find the lowest common multiple between two numbers

  "A common multiple is a number that is a multiple of two or more integers. 
  The common multiples of 3 and 4 are 0, 12, 24, .... 
  The least common multiple (LCM) of two numbers is the smallest
  number (not zero) that is a multiple of both."
  
  Try writing two columns of multiples as a starting point:
  starting with 15 and 25 and keep writing their multiples until you find the
  lowest common one then turn this in to a step by step instruction

  15 25
  30 50
  45 75
  60 
  75

  75 is the first common
*/

const num1A = 1;
const num1B = 1;
const expected1 = 1;

const num2A = 5;
const num2B = 10;
const expected2 = 10;

const num3A = 10;
const num3B = 5;
const expected3 = 10;

const num4A = 6;
const num4B = 8;
const expected4 = 24;

const num5A = 15;
const num5B = 25;
const expected5 = 75;

const num6A = 37;
const num6B = 113;

/**
 * Add params if needed for recursion
 * Finds the lowest common multiple of the two given ints.
 * @param {number} a
 * @param {number} b
 * @returns {number} The lowest common multiple of the given ints.
 */
function lowestCommonMultiple(a, b) {
  // MATH EXPLANATION OF PRIME FACTORS
  // To solve this problem, we are recursively finding the prime factors of both a and b, then multiplying them all together
  // prime factors of an integer N are the smallest prime numbers that when multiplied together equal N.
  // a prime number is any integer that is only divisible by itself and the number 1.
  //
  // EXAMPLES OF PRIME FACTORS
  // EXAMPLE 1: the prime factors of 10 are 2 and 5. This is because 2 * 5 = 10, but 2 and 5 themselves
  //          cannot be divided into smaller numbers.
  // EXAMPLE 2: The prime factors of 8 are 2, 2, and 2. This is because 2 * 2 * 2 = 8
  // NOTE: 1 is ALWAYS a prime factor of any number, so we want to ignore this in calculations unless it is the only number left

  // MATH EXPLANATION OF LEAST COMMON MULTIPLES
  // In short, the least common multiple of two numbers can be found by making their prime factorizations be equal.
  // for example, the least common multiple of 10 and 25 is 50.
  // This is because the prime factors of 25 are 5 * 5.
  // The prime factors of 10 are 5 * 2
  // to make 5 * 2 and 5 * 5 have the same value, we essentially want to merge them.
  // look at 5 * 5 and then look at 5 * 2. What is 5 * 5 missing that 5 * 2 has? 5 * 5 is missing a 2.
  // so by "bringing over" the missing prime factor, we should have an equation that looks like 5 * 5 * 2, which is 50!

  // CODE

  // base cases -- when we no longer need to find prime factors:
  if (a == 1 || b == 1) return 1;
  if (a == b) return a;
  if (a % b == 0) return a;
  if (b % a == 0) return b;

  // start with 2 because everything is evenly divisible by 1
  let smallestPrimeFactorA = 2;
  let smallestPrimeFactorB = 2;

  // find the prime factor of each number if either number is prime, we will find no factor for it, and will ultimately return a * b
  for (
    smallestPrimeFactorA;
    smallestPrimeFactorA <= a;
    smallestPrimeFactorA++
  ) {
    if (a % smallestPrimeFactorA == 0) break;
  }
  for (
    smallestPrimeFactorB;
    smallestPrimeFactorB <= b;
    smallestPrimeFactorB++
  ) {
    if (b % smallestPrimeFactorB == 0) break;
  }

  //   now multiply the smallest prime factor of each number together with the returned value of the next level of the algorithm
  return (
    smallestPrimeFactorA *
    smallestPrimeFactorB *
    lowestCommonMultiple(a / smallestPrimeFactorA, b / smallestPrimeFactorB)
  );
}

console.log(lowestCommonMultiple(num1A, num1B), "expected:", expected1);
console.log(lowestCommonMultiple(num2A, num2B), "expected:", expected2);
console.log(lowestCommonMultiple(num3A, num3B), "expected:", expected3);
console.log(lowestCommonMultiple(num4A, num4B), "expected:", expected4);
console.log(lowestCommonMultiple(num5A, num5B), "expected:", expected5);
console.log(lowestCommonMultiple(11, 13));
/*****************************************************************************/

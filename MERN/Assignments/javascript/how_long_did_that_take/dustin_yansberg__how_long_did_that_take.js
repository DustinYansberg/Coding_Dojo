// PROMPT: REWRITE ISPRIME() TO CALCULATE PRIMES FASTER
// ANSWER: By having isPrime only iterate up to the square root of the number we pass it, we speed the function up dramatically.
// however, it still takes a long time to find the millionth prime.
// Maybe we could fit Sieve of Eratosthenes into this algorithm to makes it even faster?

Number.prototype.isPrime = function () {
  for (let i = 2; i <= Math.ceil(Math.sqrt(this)); i++) {
    if (this % i === 0) {
      return false;
    }
  }
  return true;
};

const { performance } = require("perf_hooks");
const start = performance.now();
let primeCount = 0;
let num = 2; // for math reasons, 1 is considered prime

while (primeCount < 1e4) {
  if (num.isPrime()) {
    primeCount++;
  }
  num++;
}
console.log(`The 10,000th prime number is ${num - 1}`);
console.log(`This took ${performance.now() - start} milliseconds to run`);

while (primeCount < 1e6) {
  if (num.isPrime()) {
    primeCount++;
  }
  num++;
}
console.log(`The 1,000,000th prime number is ${num - 1}`);
console.log(`This took ${performance.now() - start} milliseconds to run`); // this took nearly three minutes

// ~~~~FIBONACCI~~~~
// PROMPT: DETERMINE IF THE ITERATIVE OR RECURSIVE FUNCTION IS FASTER
// ANSWER: Iterative is much faster

// recursive
function rFib(n) {
  if (n < 2) {
    return n;
  }
  return rFib(n - 1) + rFib(n - 2);
}

// iterative
function iFib(n) {
  const vals = [0, 1];
  while (vals.length - 1 < n) {
    let len = vals.length;
    vals.push(vals[len - 1] + vals[len - 2]);
  }
  return vals[n];
}

const recurFibStart = performance.now();
rFib(20);
console.log(`rFib took ${performance.now() - recurFibStart}`);

const iterFibStart = performance.now();
iFib(20);

console.log(`iFib took ${performance.now() - iterFibStart}`);

// ~~~~Reverse a string!~~~~
// PROMPT: WRITE A MORE EFFICIENT FUNCTION TO REVERSE A STRING
// ANSWER: These both took nearly the same amount of time, but the second one is just a fraction faster than the first.

const story =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident culpa nihil repellat nulla laboriosam maxime, quia aliquam ipsam reprehenderit delectus reiciendis molestias assumenda aut fugit tempore laudantium tempora aspernatur? Repellendus consequatur expedita doloribus soluta cupiditate quae fugit! Aliquid, repellat animi, illum molestias maiores, laboriosam vero impedit iusto mollitia optio labore asperiores!";

const { performance } = require("perf_hooks");

const rev1Start = performance.now();
const reversed1 = story.split("").reverse().join("");
console.log(`reverse1 took ${performance.now() - rev1Start} milliseconds`);

const reverseString = (s) => {
  let answer = "";
  for (let i = s.length - 1; i >= 0; i--) answer += s[i];
  return answer;
};
const rev2Start = performance.now();
reverseString(story);
console.log(`reverseString took ${performance.now() - rev2Start} milliseconds`);

/* 
with a range of numbers 1- 10:
print the number unless:
if the number is divisible by 3 and only 3, print Fizz
if the number is divisible by 5 and only 5, print Buzz
if the number is divisible by both 3 and 5, print FizzBuzz 
*/
for (var i = 1; i <= 100; i++) {
  var out;

  if (i % 3 != 0 && i % 5 != 0) {
    out = i;
  } else {
    out = "";

    if (i % 3 == 0) {
      out += "Fizz";
    }

    if (i % 5 == 0) {
      out += "Buzz";
    }
  }

  console.log(out);
}

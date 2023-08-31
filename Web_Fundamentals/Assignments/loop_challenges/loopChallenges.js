// 1. print odds 1-20
console.log("1. Print odds 1-20");

var i = 1;
while (i <= 20) {
  if (i % 2 != 0) {
    console.log(i);
  }
  i++;
}
console.log("\n");

// 2. Decreasing Multiples of 3
console.log("2. Decreasing Multiples of 3");
i = 100;

while (i >= 0) {
  if (i % 3 == 0) {
    console.log(i);
  }
  i--;
}
console.log("\n");

// 3. Print the sequence
console.log("3. Print the sequence");
seq = [4, 2.5, 1, -0.5, -2, -3.5];

for (var i = 0; i < seq.length; i++) {
  console.log(seq[i]);
}
console.log("\n");

// 4. Sigma
console.log("4. Sigma");
i = 0;
var sum = 0;
while (i <= 100) {
  sum += i;
  i++;
}

console.log(sum);
console.log("\n");

// 5. Factorial
console.log("5. Factorial");
i = 1;
var factor = 1;

while (i <= 12) {
  factor *= i;
  i++;
}
console.log(factor);

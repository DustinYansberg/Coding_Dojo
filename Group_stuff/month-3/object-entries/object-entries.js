/* 
  Recreate Object.entries() method
  Given an object,
  return an array of arrays of the object's key value pairs, where each key value pair is a 2 item array

  Bonus: Do not include key value pairs from the given objects prototype (these are included by default when looping over an object's keys)
*/

const obj1 = {
  name: "Pizza",
  calories: 9001,
};
const expected1 = [
  ["name", "Pizza"],
  ["calories", 9001],
];

const obj2 = {
  firstName: "Foo",
  lastName: "Bar",
  age: 99,
};

const proto = {
  inheritedKey: "inherited value",
  keyOnProto: "value from proto",
};

const obj3 = Object.assign(Object.create(proto), {
  firstName: "Foo",
  lastName: "Bar",
  age: 99,
});

const expected2 = [
  ["firstName", "Foo"],
  ["lastName", "Bar"],
  ["age", 99],
];

// 1. DRIVER 🚗
// 2. PRESENTER 👩‍🏫👨‍🏫
// 3. NAVIGATOR 🧭

function entries(someObj) {
  // loop through object keys
  // only add array to array if object.hasOwnProperty()
  // return resulting array
  const out = [];
  for (const key in someObj)
    !someObj.hasOwnProperty(key) ? null : out.push([key, someObj[key]]);
  return out;
}

console.log("actual:\t", entries(obj1), "\nexpected:\t ", expected1);
console.log("\nactual:\t", entries(obj2), "\nexpected:\t ", expected2);
console.log("\nactual:\t", entries(obj3), "\nexpected:\t ", expected2);

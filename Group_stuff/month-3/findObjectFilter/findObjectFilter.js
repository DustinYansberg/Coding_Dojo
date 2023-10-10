/*
    findObjectsFilter({searchFor}, [itemsArr])

    given a 'search for' {object} with primitive values and a list of objects
    return a new list of objects containing the same key value pairs as the search for
*/

// given searchFor and items
const items = [
  { firstName: "Bob", lastName: "Robert", age: 31 },
  { firstName: "John", lastName: "Smith", age: 25 },
  { firstName: "Bob", lastName: "White", age: 31 },
  { firstName: "Bob", lastName: "Smith", age: 27 },
];
// db.ninjas.find({firstName: "Bob", age: 31})
const searchFor1 = {
  firstName: "Bob",
  age: 31,
};
// return a new list of objects containing the same key pair values
const output1 = [
  { firstName: "Bob", lastName: "Robert", age: 31 },
  { firstName: "Bob", lastName: "White", age: 31 },
  // { firstName: "Bob", lastName: "Smith", age: 27 },
];

const searchFor2 = {
  lastName: "Smith",
};
const output2 = [
  { firstName: "John", lastName: "Smith", age: 25 },
  { firstName: "Bob", lastName: "Smith", age: 27 },
];

function findObjectsFilter(searchObj, items) {
  const res = [];
  // loop through each element of array
  // inner loop to examine each key of searchObj
  // compare the searchObj Key-Value pairs with the outer loop's object's Key-Value pairs
  // if every kvp matches, add the
  for (const item of items) {
    let match = true;
    for (const key in searchObj) {
      item[key] !== searchObj[key] && (match = false);
    }
    match && res.push(item);
  }
  return res;
}

console.log(findObjectsFilter(searchFor1, items));
console.log(findObjectsFilter(searchFor2, items));

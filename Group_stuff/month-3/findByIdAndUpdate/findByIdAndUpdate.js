/* 
  findByIdAndUpdate(id, updateObject, arr)
  Given an id, an object that has keys with corresponding updated values, and an array of objects
  Find the object by "id" key that matches the given id value and then update that object's
  keys with the provided new values.
  Return the updated object, or null if no object was found

  check
  someObj.hasOwnProperty("key")
  obj[key] === undefined
  Object.keys(someObj) // returns [an array of "keys"]
*/

const students = [
  {
    id: 1,
    name: "student1",
    isLateToday: false,
    lateCount: 15,
    redBeltStatus: false,
  },
  {
    id: 2,
    name: "student2",
    isLateToday: false,
    lateCount: 1,
    redBeltStatus: false,
  },
  {
    id: 3,
    name: "student3",
    isLateToday: false,
    lateCount: 0,
    redBeltStatus: false,
  },
];

// Ninja.findByIdAndUpdate(req.params._id, {updateObject})
/*
    something
    here
  */

/**
 * Finds the specified obj by id and updates it with the given key value pairs.
 * - Time: O(?).
 * - Space: O(?).
 * @param {number} id
 * @param {Object} updatedValues Key value pairs used to update the found obj.
 * @param {Array<Object>} collection
 * @returns {?Object} The object that was updated or null if no object found.
 */
const findByIdAndUpdate = (id, updatedValues, collection) => {
  if (Object.keys(updatedValues).length === 0) {
    return null; // return null if the updateValues object is empty
  }

  for (obj of collection) {
    // loop through the collection and see if any id in the collection matches our given id
    if (obj["id"] === id) {
      for (key in updatedValues) {
        // if match is found, replaces the values in the matched object with the values in the updatedValues object
        if (obj.hasOwnProperty(key)) {
          obj[key] = updatedValues[key];
        }
      }
      return obj; // return updated obj
    }
  }
  return null; // return null if no match was found
};

module.exports = findByIdAndUpdate;

console.log(findByIdAndUpdate(3, { redBeltStatus: true }, students));
console.log(
  findByIdAndUpdate(
    1,
    { isLateToday: true, lateCount: 16, randomKey: "randomValue" },
    students
  )
);
console.log(findByIdAndUpdate(5, {}, students));

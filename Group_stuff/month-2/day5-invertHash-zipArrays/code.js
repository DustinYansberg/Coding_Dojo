/* 
  Zip Arrays into Map
  
  
  Given two arrays, create an associative array (aka hash map, an obj / dictionary) containing keys from the first array, and values from the second.

  Associative arrays are sometimes called maps because a key (string) maps to a value 
 */

  var keys1 = ["abc", 3, "yo"];
  var vals1 = [42, "wassup", true];
  var expected1 = {
    abc: 42,
    3: "wassup",
    yo: true,
  };
  
  var keys2 = [];
  var vals2 = [];
  var expected2 = {};

  var keys3 = ["Yup", 55, "Infinity", "Nope", "Soup", "Rats", "Rat Soup"]
  var vals3 = ["Uhhuh", true, "Cars", "Starvin", "Marvin", "14", "Hello"]
  var expected3 = {
    '55': true,
    Yup: 'Uhhuh',
    Infinity: 'Cars',
    Nope: 'Starvin',
    Soup: 'Marvin',
    Rats: '14',
    'Rat Soup': 'Hello'
  } 
  

  
  //BONUS: Allow the arrays to be of different lengths!


  /**
   * Converts the given arrays of keys and values into an object.
   * - Time: O(?).
   * - Space: O(?).
   * @param {Array<string>} keys
   * @param {Array<any>} values
   * @returns {Object} The object with the given keys and values.
   */
  function zipArraysIntoMap(keys, values) {
    if(values.length > keys.length){
        values.length = keys.length
    }else if(keys.length > values.length){
        keys.length =  values.length
    }
    var dict = {}
    for(var i = 0; i < values.length; i++){
        dict[keys[i]] = values[i]
    }
    return dict    
  }

  console.log("Actual:\t\t", zipArraysIntoMap(keys1, vals1),"\nExpected:\t", expected1, '\n')
  console.log("Actual:\t\t", zipArraysIntoMap(keys2, vals2),"\nExpected:\t", expected2, '\n')
  console.log("Actual:\t", zipArraysIntoMap(keys3, vals3),"\nExpected:\t", expected3,'\n\n')
  
  /*****************************************************************************/


  /* 
  Invert Hash

  A hash table / hash map is an obj / dictionary

  Given an object / dict,
  return a new object / dict that has the keys and the values swapped so that the keys become the values and the values become the keys
*/

var obj1 = { name: "Zaphod", charm: "high", morals: "dicey" };
var expected1 = { Zaphod: "name", high: "charm", dicey: "morals" };

/**
 * Inverts the given object's key value pairs so that the original values
 * become the keys and the original keys become the values.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Object<string, any>} obj
 * @return The given object with key value pairs inverted.
 */
function invertObj(obj) {
    // var dict = {}
    // for(let key in obj){
    //     dict[obj[key]] = key
    // }
        // return dict
        
    for(let key in obj){
        obj[obj[key]] = key
        delete obj[key]
    }

    return obj
}

console.log("Actual:\t\t", invertObj(obj1),"\nExpected:\t", expected1)

/*****************************************************************************/
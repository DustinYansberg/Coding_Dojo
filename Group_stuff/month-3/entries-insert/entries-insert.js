/*
Given a table name string and an object whose key value pairs represent column names and values for the columns
return a SQL insert statement string
Tip: string interpolation (using back ticks, the key to the left of num 1 key)
Bonus: after solving it, write a 2nd solution focusing on functional programming using built in methods
*/

const table = "users";
const insertData1 = { first_name: "John", last_name: "Doe" };
// extract just the keys from an object?
console.log(
  Object.values(insertData1) // returns an array of arrays of the key-value pairs
);

const expectedA =
  "INSERT INTO users (first_name, last_name) VALUES ('John', 'Doe');";

// Bonus:
const insertData2 = {
  first_name: "John",
  last_name: "Misirlakis",
  age: 30,
  is_admin: false,
};
const expectedB =
  "INSERT INTO users (first_name, last_name, age, is_admin) VALUES ('John', 'Doe', 30, -1);";

// R.I.O.T.
// DRIVER 🚗
// PRESENTER 🧑‍🏫
// NAVIGATOR 🧭
function insert(tableName, columnValuePairs) {
  // extract column names from columnValuePairs into an array
  // extract values from columnValuePairs into an array
  const columns = Object.keys(columnValuePairs).join(", ");
  let values = Object.values(columnValuePairs);

  // map over the values, and convert each value based on what type each element in the array is
  values = values
    .map(
      (val) =>
        typeof val === "string" // if it is a string just add quotes
          ? `'${val}'`
          : val === false // if it is false, convert to -1
          ? (val = -1)
          : val === true // if it is true, convert to 1
          ? 1
          : val // if its anything else, leave it as is.
    )
    .join(", "); // join them all into one string

  // Return the SQL query, but insert the table name, the columns, and the values
  return `INSERT INTO ${tableName} (${columns}) VALUES (${values});`;
}

console.log(insert(table, insertData1));
console.log(insert(table, insertData2));

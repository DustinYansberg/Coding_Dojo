const express = require("express");
const { faker } = require("@faker-js/faker");
const app = express();

const createUser = () => {
  const newUser = {
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
    phoneNumber: faker.phone.number(),
    _id: faker.database.mongodbObjectId(),
  };
  return newUser;
};

const createCompany = () => {
  const newCompany = {
    _id: faker.database.mongodbObjectId(),
    name: faker.company.name(),
    address: {
      street: faker.location.streetAddress(),
      city: faker.location.city(),
      state: faker.location.state(),
      zipCode: faker.location.zipCode(),
    },
  };
  return newCompany;
};



// req is short for request
// res is short for response
app.get("/api/users/new", (req, res) => {
  const newUser = createUser()
  res.json(newUser)
});
app.get("/api/companies/new", (req, res) => {
  const newCompany = createCompany()
  res.json(newCompany)
});
app.get("/api/user/company", (req, res) => {
  const newUser = createUser()
  const newCompany = createCompany()

  res.json({newUser, newCompany})
});

const server = app.listen(8000, () =>
  console.log(`Server is locked and loaded on port ${server.address().port}!`)
);

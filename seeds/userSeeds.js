const { User } = require('../models');

// creating user data
const userData = [
  {
    userName: "testblogger",
    email: "test@test.com",
    password: "test"
  },
  {
    userName: "coderX",
    email: "coderX@test.com",
    password: "password"
  },

]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
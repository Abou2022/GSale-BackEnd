"use strict";

const { User } = require('../models');

const userData = [
    {
        email: "andrew@andrew.com",
        password: "password",
      },
      {
        email: "joe@joe.com",
        password: "password1",
      },
      {
        email: "bakary@bakary.com",
        password: "password2",
      },
      {
        email: "brian@brian.com",
        password: "password3",
      },
      {
        email: "briadsfefn@brian.com",
        password: "password3",
      },
];

const seedUsers = () => User.bulkCreate(userData, { individualHooks: true });

module.exports = seedUsers;
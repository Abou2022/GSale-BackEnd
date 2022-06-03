"use strict";

const { Profile } = require("../models");

const profileData = [
  {
    user_id: 1,
    category_id: 1,
    email: "andrew@andrew.com",
  },
  {
    user_id: 2,
    category_id: 2,
    email: "joe@joe.com",
  },
  {
    user_id: 3,
    category_id: 3,
    email: "bakary@bakary.com",
  },
  {
    user_id: 4,
    category_id: 4,
    email: "brian@brian.com",
  },
  {
    user_id: 5,
    category_id: 5,
    email: "briadsfefn@brian.com",
  },
];

const seedProfiles = () => Profile.bulkCreate(profileData);

module.exports = seedProfiles;

"use strict";

const seedCategories = require('./categorySeeds.js');
const seedUsers = require('./userSeeds');
const seedProfiles = require('./profileSeeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');

    await seedCategories();
    console.log('\n----- CATEGORIES SEEDED -----\n');

    await seedUsers();
    console.log('\n----- USERS SEEDED -----\n');

    await seedProfiles();
    console.log('\n----- Profiles SEEDED -----\n');

    process.exit(0);
};

seedAll();
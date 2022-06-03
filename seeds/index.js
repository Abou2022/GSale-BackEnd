"use strict";

const seedCategories = require('./categorySeeds.js');
const seedUsers = require('./userSeeds');
const seedProfiles = require('./profileSeeds');
const seedGarageSaleEvents = require('./garageSaleEventSeeds');
const seedAttendees = require('./attendeeSeeds');
const seedVendors = require('./vendorSeeds');
const seedItems = require('./itemSeeds');
const seedComments = require('./commentSeeds');

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

    await seedGarageSaleEvents();
    console.log('\n----- GARAGE SALE EVENTS SEEDED -----\n');

    await seedAttendees();
    console.log('\n----- ATTENDEES SEEDED -----\n');

    await seedVendors();
    console.log('\n----- VENDORS SEEDED -----\n');

    await seedItems();
    console.log('\n----- ITEMS SEEDED -----\n');

    await seedComments();
    console.log('\n----- COMMENTS SEEDED -----\n');

    process.exit(0);
};

seedAll();
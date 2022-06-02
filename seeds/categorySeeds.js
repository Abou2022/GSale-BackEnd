"use strict";

const { Category } = require('../models');

const categoryData = [
    {},{},{},{},{},{},{},{},{},{},{},{},{},{},{}
];

const seedCategories = () => Category.bulkCreate(categoryData, { individualHooks: true });

module.exports = seedCategories;
"use strict";

const { Item } = require("../models");

const itemData = [
  {
    vendor_id: 1,
    garageSaleEvent_id: 1,
    imageURL:
      "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png",
    imageDescription: "my image description 1",
  },
  {
    vendor_id: 2,
    garageSaleEvent_id: 2,
    imageURL:
      "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png",
      imageDescription: "my image description 2",
  },
  {
    vendor_id: 3,
    garageSaleEvent_id: 3,
    imageURL:
      "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png",
    imageDescription: "my image description 3",
  },
  {
    vendor_id: 4,
    garageSaleEvent_id: 4,
    imageURL:
      "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png",
    imageDescription: "my image description 4",
  },
  {
    vendor_id: 5,
    garageSaleEvent_id: 5,
    imageURL:
      "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png",
    imageDescription: "my image description 5",
  },
];

const seedItems = () =>
  Item.bulkCreate(itemData, { individualHooks: true });

module.exports = seedItems;

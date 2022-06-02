"use strict";

const { Vendor } = require("../models");

const vendorData = [
  {
    profile_id: 1,
    garageSaleEvent_id: 1,
    category_id: 11,
    address: "600 4th Ave Seattle, WA 98104",
    startTime: "10 am",
    endTime: "12 pm",
    startDate: 06-15-2022,
    endDate: 06-20-2022,
    Description:
      "Many antique articles, electronic staff, and sporting equipment",
  },
  {
    profile_id: 2,
    garageSaleEvent_id: 2,
    category_id: 12,
    address: "2930 Wetmore Ave # 100 Everett, WA 98201",
    startTime: "10 am",
    endTime: "12 pm",
    startDate: 06-25-2022,
    endDate: 06-30-2022,
    Description: "electronic staff, baby clothes",
  },
  {
    profile_id: 3,
    garageSaleEvent_id: 3,
    category_id: 13,
    address: "19100 44th Ave W, Lynnwood WA, 98036",
    startTime: "10 am",
    endTime: "12 pm",
    startDate: 07-01-2022,
    endDate: 07-03-2022,
    Description: "Sporting equipment, a lot of game",
  },
  {
    profile_id: 4,
    garageSaleEvent_id: 4,
    category_id: 14,
    address: "123 5th Ave, Kirkland, WA 98033",
    startTime: "01 pm",
    endTime: "7 pm",
    startDate: 07-06-2022,
    endDate: 07-10-2022,
    Description:
      "antique articles, sporting equipment, a lot of game, electronic staff ",
  },
  {
    profile_id: 5,
    garageSaleEvent_id: 5,
    category_id: 15,
    address: "220 4th Ave S, Kent, WA 98032",
    startTime: "09 am",
    endTime: "12 pm",
    startDate: 07-15-2022,
    endDate: 07-20-2022,
    Description: "Sporting equipment, baby clothes",
  },
];

const seedVendors = () => Vendor.bulkCreate(vendorData);

module.exports = seedVendors;


"use strict";

const { Vendor } = require("../models");

const vendorData = [
    {
        profile_id: 1,
        garageSaleEvent_id: 1,
        category_id: 11,
        address: "600 4th Ave Seattle, WA 98104",
        zip: 98104,
        lat: 47.603828,
        lng: -122.330063,
        startTime: "10 am",
        endTime: "12 pm",
        startDate: "2022-06-13 00:00:00",
        endDate: "2022-06-13 00:00:00",
        description: "Many antique articles, electronic staff, and sporting equipment",
    },
    {
        profile_id: 2,
        garageSaleEvent_id: 2,
        category_id: 12,
        address: "2930 Wetmore Ave # 100 Everett, WA 98201",
        zip: 98201,
        lat: 47.978212,
        lng: -122.207626,
        startTime: "10 am",
        endTime: "12 pm",
        startDate: "2022-06-15 00:00:00",
        endDate: "2022-06-15 00:00:00",
        description: "electronic staff, baby clothes",
    },
    {
        profile_id: 3,
        garageSaleEvent_id: 3,
        category_id: 13,
        address: "19100 44th Ave W, Lynnwood WA, 98036",
        zip: 98036,
        lat: 47.825260,
        lng: -122.293910,
        startTime: "10 am",
        endTime: "12 pm",
        startDate: "2022-06-16 00:00:00",
        endDate: "2022-06-18 00:00:00",
        description: "Sporting equipment, a lot of game",
    },
    {
        profile_id: 4,
        garageSaleEvent_id: 4,
        category_id: 14,
        address: "123 5th Ave, Kirkland, WA 98033",
        zip: 98033,
        lat: 47.678261,
        lng: -122.206909,
        startTime: "01 pm",
        endTime: "7 pm",
        startDate: "2022-06-19 00:00:00",
        endDate: "2022-06-20 00:00:00",
        description: "antique articles, sporting equipment, a lot of game, electronic staff ",
    },
    {
        profile_id: 5,
        garageSaleEvent_id: 5,
        category_id: 15,
        address: "220 4th Ave S, Kent, WA 98032",
        zip: 98032,
        lat: 47.380290,
        lng: -122.237020,
        startTime: "09 am",
        endTime: "12 pm",
        startDate: "2022-06-20 00:00:00",
        endDate: "2022-06-20 00:00:00",
        description: "Sporting equipment, baby clothes",
    },
];

const seedVendors = () => Vendor.bulkCreate(vendorData);

module.exports = seedVendors;


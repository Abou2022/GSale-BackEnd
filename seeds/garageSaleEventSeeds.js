"use strict";

const { GarageSaleEvent } = require("../models");

const garageSaleEventData = [
  {
    profile_id: 1,
    category_id: 6,
    eventName: "Garage Sale 1",
    startTime: "10 AM",
    endTime: "6 PM",
    startDate: 06-13-2022,
    endDate: 06-14-2022,
    description: "We are moving!",
  },
  {
    profile_id: 2,
    category_id: 7,
    eventName: "Garage Sale 2",
    startTime: "9 AM",
    endTime: "9 PM",
    startDate: 06-15-2022,
    endDate: 06-15-2022,
    description: "We are moving!",
  },
  {
    profile_id: 3,
    category_id: 8,
    eventName: "Garage Sale 3",
    startTime: "12 PM",
    endTime: "5 PM",
    startDate: 06-16-2022,
    endDate: 06-18-2022,
    description: "We are moving!",
  },
  {
    profile_id: 4,
    category_id: 9,
    eventName: "Garage Sale 4",
    startTime: "11 AM",
    endTime: "6 PM",
    startDate: 06-19-2022,
    endDate: 06-20-2022,
    description: "We are moving!",
  },
  {
    profile_id: 5,
    category_id: 10,
    eventName: "Garage Sale 5",
    startTime: "10 AM",
    endTime: "2 PM",
    startDate: 06-20-2022,
    endDate: 06-20-2022,
    description: "We are moving!",
  },

];

const seedGarageSaleEvents = () => GarageSaleEvent.bulkCreate(garageSaleEventData, { individualHooks: true });

module.exports = seedGarageSaleEvents;

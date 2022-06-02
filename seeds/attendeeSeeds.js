"use strict";

const { Attendee } = require("../models");

const attendeeData = [
  {
    profile_id: 1,
    garageSaleEvent_id: 1,
  },
  {
    profile_id: 2,
    garageSaleEvent_id: 2,
  },
  {
    profile_id: 3,
    garageSaleEvent_id: 3,
  },
  {
    profile_id: 4,
    garageSaleEvent_id: 4,
  },
  {
    profile_id: 5,
    garageSaleEvent_id: 5,
  },
];

const seedAttendees = () =>
  Attendee.bulkCreate(attendeeData, { individualHooks: true });

module.exports = seedAttendees;

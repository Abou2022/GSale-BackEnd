"use strict";

const { Attendee } = require('../models');

const attendeeData = [
    {
        profile_id: 1,
        garageSaleEvent_id:
      },
      {
        profile_id: 1,
        garageSaleEvent_id:
      },
      {
        profile_id: 1,
        garageSaleEvent_id:
      },
      {
        profile_id: 1,
        garageSaleEvent_id:
      },
      {
        profile_id: 1,
        garageSaleEvent_id:
      },
];

const seedAttendees = () => User.bulkCreate(attendeeData, { individualHooks: true });

module.exports = seedAttendees;
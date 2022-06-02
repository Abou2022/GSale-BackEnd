"use strict";

const { Comment } = require('../models');

const commentData = [
    {
        profile_id: 1,
        garageSaleEvent_id: 1,
        content: ,
      },
      {
        profile_id: 2,
        garageSaleEvent_id: 2,
        content: ,
      },
      {
        profile_id: 3,
        garageSaleEvent_id: 3,
        content: ,
      },
      {
        profile_id: 4,
        garageSaleEvent_id: 4,
        content: ,
      },
      {
        profile_id: 5,
        garageSaleEvent_id: 5,
        content: ,
      },
];

const seedComments = () => Comment.bulkCreate(commentData, { individualHooks: true });

module.exports = seedComments;
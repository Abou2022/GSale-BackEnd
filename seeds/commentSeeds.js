"use strict";

const { Comment } = require('../models');

const commentData = [
    {
        profile_id: 1,
        garageSaleEvent_id: 1,
        content: "my content",
    },
    {
        profile_id: 2,
        garageSaleEvent_id: 2,
        content: "my content 2",
    },
    {
        profile_id: 3,
        garageSaleEvent_id: 3,
        content: "my content 3",
    },
    {
        profile_id: 4,
        garageSaleEvent_id: 4,
        content: "my content 4",
    },
    {
        profile_id: 5,
        garageSaleEvent_id: 5,
        content: "my content 5",
    },
];

const seedComments = () => Comment.bulkCreate(commentData, { individualHooks: true });

module.exports = seedComments;
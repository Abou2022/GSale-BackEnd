"use strict";

const { GarageSaleEvent } = require("../models");

const garageSaleEventData = [
    {
        profile_id: 1,
        category_id: 6,
        eventName: "Garage Sale 1",
        startTime: "10 AM",
        endTime: "6 PM",
        startDate: "2022-06-13 00:00:00",
        endDate: "2022-06-14 00:00:00",
        description: "We are moving!",
        address: "1105 Spring Street UNIT 1101, Seattle, WA 98104",
        lat: 47.609973,
        lng: -122.325261,
    },
    {
        profile_id: 2,
        category_id: 7,
        eventName: "Garage Sale 2",
        startTime: "9 AM",
        endTime: "9 PM",
        startDate: "2022-06-15 00:00:00",
        endDate: "2022-06-15 00:00:00",
        description: "We are moving!",
        address: "2113 Grand Avenue, Everett, WA 98201",
        lat: 47.989005,
        lng: -122.179804,
    },
    {
        profile_id: 3,
        category_id: 8,
        eventName: "Garage Sale 3",
        startTime: "12 PM",
        endTime: "5 PM",
        startDate: "2022-06-16 00:00:00",
        endDate: "2022-06-18 00:00:00",
        description: "We are moving!",
        address: "19411 56th Avenue W UNIT 316, Lynnwood, WA 98036",
        lat: 47.822691,
        lng: -122.307329,
    },
    {
        profile_id: 4,
        category_id: 9,
        eventName: "Garage Sale 4",
        startTime: "11 AM",
        endTime: "6 PM",
        startDate: "2022-06-19 00:00:00",
        endDate: "2022-06-20 00:00:00",
        description: "We are moving!",
        address: "6333 Lake Washington Boulevard NE UNIT 201, Kirkland, WA 98033",
        lat: 47.663182,
        lng: -122.207675,
    },
    {
        profile_id: 5,
        category_id: 10,
        eventName: "Garage Sale 5",
        startTime: "10 AM",
        endTime: "2 PM",
        startDate: "2022-06-20 00:00:00",
        endDate: "2022-06-20 00:00:00",
        description: "We are moving!",
        address: "26921 40th Avenue S, Kent, WA 98032",
        lat: 47.359933,
        lng: -122.284175,
    },

];

const seedGarageSaleEvents = () => GarageSaleEvent.bulkCreate(garageSaleEventData);

module.exports = seedGarageSaleEvents;
"use strict";

const router = require("express").Router();
const { Category, GarageSaleEvent, Vendor, Attendee, Comment } = require("../../models");
const bearerAuth = require("../../lib/bearer-auth-middleware");
const { Op } = require('sequelize');

// get all
router.get('/', async (req, res) => {
    try {
        const data = await GarageSaleEvent.findAll({ include: { all: true } });
        // to do get, attendees and vendors for each garage sale event
        res.json(data);
    } catch (err) {
        console.log("err: ", err);
        res.status(500).json({ msg: "an error occurred: ", err });
    }
});

// get by id
router.get('/:id', async (req, res) => {
    try {
        const [garageSaleEvent, attendee, vendor, comment] = await Promise.all([
            GarageSaleEvent.findByPk(req.params.id, { include: { all: true } }),
            Attendee.findAll({ where: { garageSaleEvent_id: req.params.id }, include: { all: true } }),
            Vendor.findAll({ where: { garageSaleEvent_id: req.params.id }, include: { all: true } }),
            Comment.findAll({ where: { garageSaleEvent_id: req.params.id }, include: { all: true } })
        ]);
        garageSaleEvent === null ?
            res.status(404).json({ message: 'No garageSaleEvent with this id!' }) :
            res.status(200).json({ garageSaleEvent, attendee, vendor, comment });
        // const garageSaleEvent = await GarageSaleEvent.findByPk(req.params.id, { include: { all: true } });
        // const attendee = await Attendee.findAll({ where: { garageSaleEvent_id: req.params.id }, include: { all: true } });
        // const vendor = await Vendor.findAll({ where: { garageSaleEvent_id: req.params.id }, include: { all: true } });
        // const comment = await Comment.findAll({ where: { garageSaleEvent_id: req.params.id }, include: { all: true } });
    } catch (err) {
        console.log("err: ", err);
        res.status(500).json(err);
    }
});


// to do get by location, not all fields in the example below are required
// format = /api/garageSaleEvents?startDate=11/11/2022&endDate=11/13/2022&lat=41.031031&lng=-121.054765&categories=antiques,furniture
// req.body is an array of acceptable zip codes of location
// router.post('/query', async (req, res) => {
//     try {
//         const startDate = req.query.startDate ? new Date(req.query.startDate) : null;
//         const endDate = req.query.endDate ? new Date(req.query.endDate) : null;
//         const lat = req.query.lat;
//         const lng = req.query.lng;
//         const categories = req.query.categories.split(',');

//         GarageSaleEvent.findAll({where :  {startDate: {[Op.between] : [startDate, endDate ]}}})

// start date they pick between gse start and end date OR end date they pick between gse start and end date



// *** distance calculation ***
// SELECT latitude, longitude, SQRT(
//     POW(69.1 * (latitude - [startlat]), 2) +
//     POW(69.1 * ([startlng] - longitude) * COS(latitude / 57.3), 2)) AS distance
// FROM TableName HAVING distance < 25 ORDER BY distance;


//         GarageSaleEvent.findAll({ where: }, { include: { all: true } }),
//             Attendee.findAll({ where: { garageSaleEvent_id: req.params.id }, include: { all: true } }),
//             Vendor.findAll({ where: { garageSaleEvent_id: req.params.id }, include: { all: true } }),
//             Comment.findAll({ where: { garageSaleEvent_id: req.params.id }, include: { all: true } })

//         const [garageSaleEvent, attendee, vendor, comment] = await Promise.all([
//             GarageSaleEvent.findByPk(req.params.id, { include: { all: true } }),
//             Attendee.findAll({ where: { garageSaleEvent_id: req.params.id }, include: { all: true } }),
//             Vendor.findAll({ where: { garageSaleEvent_id: req.params.id }, include: { all: true } }),
//             Comment.findAll({ where: { garageSaleEvent_id: req.params.id }, include: { all: true } })
//         ]);
//         garageSaleEvent === null ?
//             res.status(404).json({ message: 'No garageSaleEvent with this id!' }) :
//             res.status(200).json({ garageSaleEvent, attendee, vendor, comment });
//     } catch (err) {
//         console.log("err: ", err);
//         res.status(500).json(err);
//     }
// });


// post
router.post('/', bearerAuth, async (req, res) => {
    try {
        req.body.profile_id = req.profileId
        const message = !req.body.address ? 'expected an address'
            : !req.body.description ? 'expected a description'
            : !req.body.endDate ? 'expected a endDate'
            : !req.body.startDate ? 'expected a startDate'
                    : !req.body.lat ? 'expected an lat'
                        : !req.body.lng ? 'expected an lng'
                            : null;
        if (message)
            return res.status(400).json(`BAD REQUEST ERROR: ${message}`);
        const category = await Category.create();
        req.body.category_id = category.id;
        const data = await GarageSaleEvent.create(req.body);
        res.status(200).json(data);
    } catch (err) {
        res.status(400).json(err);
    }
});

//put by id
router.put('/:id', bearerAuth, async (req, res) => {
    try {
        const data = await GarageSaleEvent.update(req.body, { where: { id: req.params.id } });
        data[0] === 0 ? res.status(404).json({ message: 'No garageSaleEvent with this id!' }) : res.status(200).json(data);
    } catch (err) {
        console.log("err: ", err);
        res.status(500).json(err);
    }
});

//delete by id
router.delete("/:id", bearerAuth, async (req, res) => {
    try {
        const data = await GarageSaleEvent.destroy({ where: { id: req.params.id } });
        data === 0 ? res.status(404).json({ message: 'No garageSaleEvent with this id!' }) : res.json(data);
    } catch (err) {
        console.log("err: ", err);
        res.status(500).json(err);
    }
});

module.exports = router;
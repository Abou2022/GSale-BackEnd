"use strict";

const router = require("express").Router();
const { Category, GarageSaleEvent, Vendor, Attendee, Comment } = require("../../models");
const bearerAuth = require("../../lib/bearer-auth-middleware");

// get all
router.get('/', async (req, res) => {
    try {
        const data = await GarageSaleEvent.findAll({ include: { all: true } });
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
    } catch (err) {
        console.log("err: ", err);
        res.status(500).json(err);
    }
});

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
        const categories = req.body.category ? req.body.category : {}; 
        const category = await Category.create(categories);
        req.body.category_id = category.id;
        const garageSaleEvent = await GarageSaleEvent.create(req.body);
        res.status(200).json({garageSaleEvent, category});
    } catch (err) {
        res.status(400).json(err);
    }
});

//put by id
router.put('/:id', bearerAuth, async (req, res) => {
    try {
        const data = await GarageSaleEvent.update(req.body, { where: { id: req.params.id } });
        await Category.update(req.body.category, { where: { id: req.body.category.id } });
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
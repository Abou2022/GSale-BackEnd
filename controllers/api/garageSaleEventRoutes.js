"use strict";

const router = require("express").Router();
const { Category, GarageSaleEvent, Vendor, Attendee, Comment } = require("../../models");

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

// to do get by location


// post
router.post('/', async (req, res) => {
    try {
        const message = !req.body.creator_id ? 'expected a creator_id' : null;
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
router.put('/:id', async (req, res) => {
    try {
        const data = await GarageSaleEvent.update(req.body, { where: { id: req.params.id } });
        data[0] === 0 ? res.status(404).json({ message: 'No garageSaleEvent with this id!' }) : res.status(200).json(data);
    } catch (err) {
        console.log("err: ", err);
        res.status(500).json(err);
    }
});

//delete by id
router.delete("/:id", async (req, res) => {
    try {
        const data = await GarageSaleEvent.destroy({ where: { id: req.params.id } });
        data === 0 ? res.status(404).json({ message: 'No garageSaleEvent with this id!' }) : res.json(data);
    } catch (err) {
        console.log("err: ", err);
        res.status(500).json(err);
    }
});

module.exports = router;
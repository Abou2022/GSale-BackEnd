"use strict";

const router = require("express").Router();
const { Category, Vendor } = require("../../models");
const bearerAuth = require("../../lib/bearer-auth-middleware");

// get all
router.get('/', async (req, res) => {
    try {
        const data = await Vendor.findAll({ include: { all: true }, order: [['createdOn', 'DESC']] });
        res.json(data);
    } catch (err) {
        console.log("err: ", err);
        res.status(500).json({ msg: "an error occurred: ", err });
    }
});

// get by id
router.get('/:id', async (req, res) => {
    try {
        const data = await Vendor.findByPk(req.params.id, { include: { all: true } });
        data === null ? res.status(404).json({ message: 'No vendor with this id!' }) : res.status(200).json(data);
    } catch (err) {
        console.log("err: ", err);
        res.status(500).json(err);
    }
});

// get all vendors by garageSaleEventId
router.get('/garageSaleEvent/:garageSaleEventId', async (req, res) => {
    try {
        const data = await Vendor.findAll({ where: { garageSaleEvent_id: req.params.garageSaleEventId }, include: { all: true }, order: [['createdOn', 'DESC']] });
        data === null ? res.status(404).json({ message: 'No vendor with this garageSaleEventId!' }) : res.status(200).json(data);
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
        const category = await Category.create();
        req.body.category_id = category.id;
        const data = await Vendor.create(req.body);
        res.status(200).json(data);
    } catch (err) {
        res.status(400).json(err);
    }
});

//put by id
router.put('/:id', bearerAuth, async (req, res) => {
    try {
        const data = await Vendor.update(req.body, { where: { id: req.params.id } });
        data[0] === 0 ? res.status(404).json({ message: 'No vendor with this id!' }) : res.status(200).json(data);
    } catch (err) {
        console.log("err: ", err);
        res.status(500).json(err);
    }
});

//delete by id
router.delete("/:id", bearerAuth, async (req, res) => {
    try {
        const data = await Vendor.destroy({ where: { id: req.params.id } });
        data === 0 ? res.status(404).json({ message: 'No vendor with this id!' }) : res.json(data);
    } catch (err) {
        console.log("err: ", err);
        res.status(500).json(err);
    }
});

module.exports = router;
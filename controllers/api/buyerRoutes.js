"use strict";

const router = require("express").Router();
const { Buyer } = require("../../models");

// to do add auth middleware

// get all
router.get('/', async (req, res) => {
    try {
        const data = await Buyer.findAll({ include: { all: true } });
        res.json(data);
    } catch (err) {
        console.log("err: ", err);
        res.status(500).json({ msg: "an error occurred: ", err });
    }
});

// get by id
router.get('/:id', async (req, res) => {
    try {
        const data = await Buyer.findByPk(req.params.id, { include: { all: true } });
        data === null ? res.status(404).json({ message: 'No buyer with this id!' }) : res.status(200).json(data);
    } catch (err) {
        console.log("err: ", err);
        res.status(500).json(err);
    }
});

// get all buyers by garageSaleEventId
router.get('/garageSaleEvent/:garageSaleEventId', async (req, res) => {
    try {
        const data = await Buyer.findAll({ where: { garageSaleEvent_id: req.params.garageSaleEventId }, include: { all: true } });
        data === null ? res.status(404).json({ message: 'No buyer with this garageSaleEventId!' }) : res.status(200).json(data);
        // to do sort by something
    } catch (err) {
        console.log("err: ", err);
        res.status(500).json(err);
    }
});

// post
router.post('/', async (req, res) => {
    try {
        const message = !req.body.profile_id ? 'expected a profile_id'
            : !req.body.garageSaleEvent_id ? 'expected an garageSaleEvent_id'
                : null;
        if (message)
            return res.status(400).json(`BAD REQUEST ERROR: ${message}`);
        const data = await Buyer.create(req.body);
        res.status(200).json(data);
    } catch (err) {
        res.status(400).json(err);
    }
});

//put by id
router.put('/:id', async (req, res) => {
    try {
        const data = await Buyer.update(req.body, { where: { id: req.params.id } });
        data[0] === 0 ? res.status(404).json({ message: 'No buyer with this id!' }) : res.status(200).json(data);
    } catch (err) {
        console.log("err: ", err);
        res.status(500).json(err);
    }
});

//delete by id
router.delete("/:id", async (req, res) => {
    try {
        const data = await Buyer.destroy({ where: { id: req.params.id } });
        data === 0 ? res.status(404).json({ message: 'No buyer with this id!' }) : res.json(data);
        // to do remove: buyer from garageSaleEvent
    } catch (err) {
        console.log("err: ", err);
        res.status(500).json(err);
    }
});

module.exports = router;
"use strict";

const router = require("express").Router();
const { Seller } = require("../../models");

// get all
router.get('/', async (req, res) => {
    try {
        const data = await Seller.findAll({ include: { all: true } });
        res.json(data);
    } catch (err) {
        console.log("err: ", err);
        res.status(500).json({ msg: "an error occurred: ", err });
    }
});

// get by id
router.get('/:id', async (req, res) => {
    try {
        const data = await Seller.findByPk(req.params.id, { include: { all: true } });
        data === null ? res.status(404).json({ message: 'No seller with this id!' }) : res.status(200).json(data);
    } catch (err) {
        console.log("err: ", err);
        res.status(500).json(err);
    }
});

// get all sellers by garageSaleEventId
router.get('/garageSaleEvent/:garageSaleEventId', async (req, res) => {
    try {
        const data = await Seller.findAll({ where: { garageSaleEvent_id: req.params.garageSaleEventId }, include: { all: true } });
        data === null ? res.status(404).json({ message: 'No seller with this garageSaleEventId!' }) : res.status(200).json(data);
        // to do sort by something
    } catch (err) {
        console.log("err: ", err);
        res.status(500).json(err);
    }
});

// to do route that filters by date/time/categories/and location as req params

// to do get by location

// post
router.post('/', async (req, res) => {
    try {
        const data = await Seller.create(req.body);
        res.status(200).json(data);
    } catch (err) {
        res.status(400).json(err);
    }
});

//put by id
router.put('/:id', async (req, res) => {
    try {
        const data = await Seller.update(req.body, { where: { id: req.params.id } });
        data[0] === 0 ? res.status(404).json({ message: 'No seller with this id!' }) : res.status(200).json(data);
    } catch (err) {
        console.log("err: ", err);
        res.status(500).json(err);
    }
});

//delete by id
router.delete("/:id", async (req, res) => {
    try {
        const data = await Seller.destroy({ where: { id: req.params.id } });
        data === 0 ? res.status(404).json({ message: 'No seller with this id!' }) : res.json(data);
    } catch (err) {
        console.log("err: ", err);
        res.status(500).json(err);
    }
});

module.exports = router;
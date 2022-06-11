"use strict";

const router = require("express").Router();
const { Item } = require("../../models");
const bearerAuth = require("../../lib/bearer-auth-middleware");

// get all
router.get('/', async (req, res) => {
    try {
        const data = await Item.findAll({ include: { all: true } });
        res.json(data);
    } catch (err) {
        console.log("err: ", err);
        res.status(500).json({ msg: "an error occurred: ", err });
    }
});

// get a item by itemId
router.get('/:id', async (req, res) => {
    try {
        const data = await Item.findByPk(req.params.id, { include: { all: true } });
        data === null ? res.status(404).json({ message: 'No item with this id!' }) : res.status(200).json(data);
    } catch (err) {
        console.log("err: ", err);
        res.status(500).json(err);
    }
});

// get all items by vendor id
router.get('/vendor/:vendorId', async (req, res) => {
    try {
        const data = await Item.findAll({ where: { vendor_id: req.params.vendorId }, include: { all: true } });
        data === null ? res.status(404).json({ message: 'No item with this vendorId!' }) : res.status(200).json(data);
    } catch (err) {
        console.log("err: ", err);
        res.status(500).json(err);
    }
});

// get all items by garageSaleEvent id
router.get('/garageSaleEvent/:garageSaleEventId', async (req, res) => {
    try {
        const data = await Item.findAll({ where: { garageSaleEvent_id: req.params.garageSaleEventId }, include: { all: true } });
        data === null ? res.status(404).json({ message: 'No item with this garageSaleEventId!' }) : res.status(200).json(data);
    } catch (err) {
        console.log("err: ", err);
        res.status(500).json(err);
    }
});

// post
router.post('/', bearerAuth, async (req, res) => {
    try {
        const data = await Item.create(req.body);
        res.status(200).json(data);
    } catch (err) {
        res.status(400).json(err);
    }
});

//put by id
router.put('/:id', bearerAuth, async (req, res) => {
    try {
        const data = await Item.update(req.body, { where: { id: req.params.id } });
        data[0] === 0 ? res.status(404).json({ message: 'No item with this id!' }) : res.status(200).json(data);
    } catch (err) {
        console.log("err: ", err);
        res.status(500).json(err);
    }
});

//delete by id
router.delete("/:id", bearerAuth, async (req, res) => {
    try {
        const data = await Item.destroy({ where: { id: req.params.id } });
        data === 0 ? res.status(404).json({ message: 'No item with this id!' }) : res.json(data);
    } catch (err) {
        console.log("err: ", err);
        res.status(500).json(err);
    }
});

module.exports = router;
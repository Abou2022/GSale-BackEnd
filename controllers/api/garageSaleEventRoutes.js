"use strict";

const router = require("express").Router();
const { GarageSaleEvent } = require("../../models");

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
        const data = await GarageSaleEvent.findByPk(req.params.id, { include: { all: true } });
        data === null ? res.status(404).json({ message: 'No garageSaleEvent with this id!' }) : res.status(200).json(data);
    } catch (err) {
        console.log("err: ", err);
        res.status(500).json(err);
    }
});

// to do get by location


// post
router.post('/', async (req, res) => {
    try {
        const data = await GarageSaleEvent.create(req.body);
        res.status(200).json(data);
        // to do add: add the garageSaleEvent to the creators profile
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
        // to do remove: garageSaleEvent from  the users profile, delete all comments message boards, sellers, uyers etc
    } catch (err) {
        console.log("err: ", err);
        res.status(500).json(err);
    }
});

module.exports = router;
"use strict";

const router = require("express").Router();
const { Profile } = require("../../models");

// get all
router.get('/', async (req, res) => {
    try {
        const data = await Profile.findAll({ include: { all: true } });
        res.json(data);
    } catch (err) {
        console.log("err: ", err);
        res.status(500).json({ msg: "an error occurred: ", err });
    }
});

// get by id
router.get('/:id', async (req, res) => {
    try {
        const data = await Profile.findByPk(req.params.id, { include: { all: true } });
        data === null ? res.status(404).json({ message: 'No profile with this id!' }) : res.status(200).json(data);
    } catch (err) {
        console.log("err: ", err);
        res.status(500).json(err);
    }
});

// get all by user id
router.get('/user/:userId', async (req, res) => {
    try {
        const data = await Profile.findOne({ where: { user_id: req.params.userId }, include: { all: true } });
        data === null ? res.status(404).json({ message: 'No profile with this usertId!' }) : res.status(200).json(data);
        // to do sort by date
    } catch (err) {
        console.log("err: ", err);
        res.status(500).json(err);
    }
});

// get all by email
router.get('/email/:email', async (req, res) => {
    try {
        const data = await Profile.findAll({ where: { email: req.params.email }, include: { all: true } });
        data === null ? res.status(404).json({ message: 'No profile with this email!' }) : res.status(200).json(data);
                // to do sort by date
    } catch (err) {
        console.log("err: ", err);
        res.status(500).json(err);
    }
});

// post
router.post('/', async (req, res) => {
    try {
        const data = await Profile.create(req.body);
        res.status(200).json(data);
    } catch (err) {
        res.status(400).json(err);
    }
});

//put by id
router.put('/:id', async (req, res) => {
    try {
        const data = await Profile.update(req.body, { where: { id: req.params.id } });
        data[0] === 0 ? res.status(404).json({ message: 'No profile with this id!' }) : res.status(200).json(data);
    } catch (err) {
        console.log("err: ", err);
        res.status(500).json(err);
    }
});

//delete by id
router.delete("/:id", async (req, res) => {
    try {
        const data = await Profile.destroy({ where: { id: req.params.id } });
        data === 0 ? res.status(404).json({ message: 'No profile with this id!' }) : res.json(data);
        // to do remove: all associated buyers and sellers and comments,
    } catch (err) {
        console.log("err: ", err);
        res.status(500).json(err);
    }
});

module.exports = router;
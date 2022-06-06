"use strict";

const router = require("express").Router();
const { Profile } = require("../../models");
const bearerToken = require("../../lib/bearer-auth-middleware");

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

// get a profile by profileId
router.get('/:id', async (req, res) => {
    try {
        const data = await Profile.findByPk(req.params.id, { include: { all: true } });
        data === null ? res.status(404).json({ message: 'No profile with this id!' }) : res.status(200).json(data);
    } catch (err) {
        console.log("err: ", err);
        res.status(500).json(err);
    }
});

// get one by user id
router.get('/user/:userId', async (req, res) => {
    try {
        const data = await Profile.findOne({ where: { user_id: req.params.userId }, include: { all: true } });
        data === null ? res.status(404).json({ message: 'No profile with this usertId!' }) : res.status(200).json(data);
    } catch (err) {
        console.log("err: ", err);
        res.status(500).json(err);
    }
});

// get one by email
router.get('/email/:email', async (req, res) => {
    try {
        const data = await Profile.findOne({ where: { email: req.params.email }, include: { all: true } });
        data === null ? res.status(404).json({ message: 'No profile with this email!' }) : res.status(200).json(data);
    } catch (err) {
        console.log("err: ", err);
        res.status(500).json(err);
    }
});

// post
router.post('/', bearerToken, async (req, res) => {
    try {
        const message = !req.body.user_id ? 'expected a user_id' : null;
        if (message)
            return res.status(400).json(`BAD REQUEST ERROR: ${message}`);
        const data = await Profile.create(req.body);
        res.status(200).json(data);
    } catch (err) {
        res.status(400).json(err);
    }
});

//put by id
router.put('/:id', bearerToken, async (req, res) => {
    try {
        if (req.profileId !== req.params.id) {
            return res.status(403).json({ message: "not allowed" });
        }
        const data = await Profile.update(req.body, { where: { id: req.params.id } });
        data[0] === 0 ? res.status(404).json({ message: 'No profile with this id!' }) : res.status(200).json(data);
    } catch (err) {
        console.log("err: ", err);
        res.status(500).json(err);
    }
});

//delete by id
router.delete("/:id", bearerToken, async (req, res) => {
    try {
        if (req.profileId !== req.params.id) {
            return res.status(403).json({ message: "not allowed" });
        }
        const data = await Profile.destroy({ where: { id: req.params.id } });
        data === 0 ? res.status(404).json({ message: 'No profile with this id!' }) : res.json(data);
    } catch (err) {
        console.log("err: ", err);
        res.status(500).json(err);
    }
});

module.exports = router;
"use strict";

const router = require("express").Router();
const { Comment } = require("../../models");

// get all
router.get('/', async (req, res) => {
    try {
        const data = await Comment.findAll({ include: { all: true } });
        res.json(data);
    } catch (err) {
        console.log("err: ", err);
        res.status(500).json({ msg: "an error occurred: ", err });
    }
});

// get by id
router.get('/:id', async (req, res) => {
    try {
        const data = await Comment.findByPk(req.params.id, { include: { all: true } });
        data === null ? res.status(404).json({ message: 'No comment with this id!' }) : res.status(200).json(data);
    } catch (err) {
        console.log("err: ", err);
        res.status(500).json(err);
    }
});

// get all by garage sale event id
router.get('/garageSaleEvent/:garageSaleEventId', async (req, res) => {
    try {
        const data = await Comment.findAll({ where: { garageSaleEvent_id: req.params.garageSaleEventId }, include: { all: true } });
        data === null ? res.status(404).json({ message: 'No comment with this garageSaleEventId!' }) : res.status(200).json(data);
        // to do sort by date
    } catch (err) {
        console.log("err: ", err);
        res.status(500).json(err);
    }
});

// get all by messageBoard id
router.get('/messageBoard/:messageBoardId', async (req, res) => {
    try {
        const data = await Comment.findAll({ where: { messageBoard_id: req.params.messageBoardId }, include: { all: true } });
        data === null ? res.status(404).json({ message: 'No comment with this messageBoardId!' }) : res.status(200).json(data);
                // to do sort by date
    } catch (err) {
        console.log("err: ", err);
        res.status(500).json(err);
    }
});

// post
router.post('/', async (req, res) => {
    try {
        const data = await Comment.create(req.body);
        res.status(200).json(data);
        // to do add: add the comment to the join table
    } catch (err) {
        res.status(400).json(err);
    }
});

//put by id
router.put('/:id', async (req, res) => {
    try {
        const data = await Comment.update(req.body, { where: { id: req.params.id } });
        data[0] === 0 ? res.status(404).json({ message: 'No comment with this id!' }) : res.status(200).json(data);
    } catch (err) {
        console.log("err: ", err);
        res.status(500).json(err);
    }
});

//delete by id
router.delete("/:id", async (req, res) => {
    try {
        const data = await Comment.destroy({ where: { id: req.params.id } });
        data === 0 ? res.status(404).json({ message: 'No comment with this id!' }) : res.json(data);
        // to do remove: comment from garageSaleEvent
    } catch (err) {
        console.log("err: ", err);
        res.status(500).json(err);
    }
});

module.exports = router;
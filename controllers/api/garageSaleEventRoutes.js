"use strict";

const router = require("express").Router();
const { GarageSaleEvent, Seller, Buyer, Comment } = require("../../models");

// get all
router.get('/', async (req, res) => {
    try {
        const data = await GarageSaleEvent.findAll({ include: { all: true } });
        // to do get, buyers and sellers for each garage sale event
        res.json(data);
    } catch (err) {
        console.log("err: ", err);
        res.status(500).json({ msg: "an error occurred: ", err });
    }
});

// get by id
router.get('/:id', async (req, res) => {
    try {
        const [garageSaleEvent, buyer, seller, comment] = await Promise.all([
            GarageSaleEvent.findByPk(req.params.id, { include: { all: true } }),
            Buyer.findAll({ where: { garageSaleEvent_id: req.params.id }, include: { all: true } }),
            Seller.findAll({ where: { garageSaleEvent_id: req.params.id }, include: { all: true } }),
            Comment.findAll({ where: { garageSaleEvent_id: req.params.id }, include: { all: true } })
        ]);
        garageSaleEvent === null ? 
            res.status(404).json({ message: 'No garageSaleEvent with this id!' }) : 
                res.status(200).json({ garageSaleEvent, buyer, seller, comment });
        // const garageSaleEvent = await GarageSaleEvent.findByPk(req.params.id, { include: { all: true } });
        // const buyer = await Buyer.findAll({ where: { garageSaleEvent_id: req.params.id }, include: { all: true } });
        // const seller = await Seller.findAll({ where: { garageSaleEvent_id: req.params.id }, include: { all: true } });
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
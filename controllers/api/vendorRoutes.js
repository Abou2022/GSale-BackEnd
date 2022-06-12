"use strict";

const router = require("express").Router();
const { Category, Vendor, Item } = require("../../models");
const bearerAuth = require("../../lib/bearer-auth-middleware");

// get all
router.get('/', async (req, res) => {
    try {
        const [vendor, item] = await Promise.all([
            Vendor.findAll({ include: { all: true }, order: [['id', 'DESC']] }),
            Item.findAll({ order: [['vendor_id', 'DESC']] }),
        ]);
        res.json({vendor, item});
    } catch (err) {
        console.log("err: ", err);
        res.status(500).json({ msg: "an error occurred: ", err });
    }
});

// get by id
router.get('/:id', async (req, res) => {
    try {
        let [vendor, item] = await Promise.all([
            Vendor.findByPk(req.params.id, { include: { all: true } }),
            Item.findAll({ where: { vendor_id: req.params.id } }),
        ]);
        if (vendor === null) {
            res.status(404).json({ message: 'No vendor with this id!' })
        } else {
            vendor.items = item;
            res.status(200).json(vendor);
        }
    } catch (err) {
        console.log("err: ", err);
        res.status(500).json(err);
    }
});

// get all vendors by garageSaleEventId
router.get('/garageSaleEvent/:garageSaleEventId', async (req, res) => {
    try {
        const [vendor, item] = await Promise.all([
            Vendor.findAll({ where: { garageSaleEvent_id: req.params.garageSaleEventId }, include: { all: true }, order: [['id', 'DESC']] }),
            Item.findAll({ where: { garageSaleEvent_id: req.params.garageSaleEventId }, order: [['vendor_id', 'DESC']] }),
        ]);
        res.json({vendor, item});
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
        let category = await Category.create(req.body.category);
        req.body.category_id = category.id;
        let vendor = await Vendor.create(req.body);
        if (req.body.items && req.body.items.length) {
            console.log("req.body.items: ", req.body.items);
            let itemsArray = req.body.items.map(item => {
                item.garageSaleEvent_id = req.body.garageSaleEvent_id;
                item.vendor_id = vendor.id;
                return item;
            })
            console.log("itemsArray: ", itemsArray);
            const items = await Items.bulkCreate(itemsArray);
            vendor.items = items;
        } else {
            vendor.items = [];
        }
        res.status(200).json({vendor, category});
    } catch (err) {
        console.log("err: ", err);
        res.status(400).json(err);
    }
});

//put by id
router.put('/:id', bearerAuth, async (req, res) => {
    try {
        const data = await Vendor.update(req.body, { where: { id: req.params.id } });
        const categoryData = await Category.update(req.body.category, { where: { id: req.body.category.id } });
        let itemsArray = [0];
        console.log("data: ", data);
        if (req.body.items && req.body.items.length) {
            console.log("req.body.items: ", req.body.items);
            itemsArray = await Item.bulkCreate(req.body.items, { updateOnDuplicate: ["imageURL", "imageDescription"] });
            console.log("itemsArray: ", itemsArray);
        }
        data[0] === 0 && categoryData[0] === 0 && itemsArray[0] === 0 ? res.status(404).json({ message: 'No vendor with this id! || No new data to update' }) : res.status(200).json(data);
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
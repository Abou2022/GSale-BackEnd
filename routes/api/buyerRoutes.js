'use strict';

const router = require('express').Router();
const {
	getBuyers,
	getSingleBuyer,
	createBuyer,
	deleteBuyer,
	updateBuyer,
} = require('../../controllers/buyerController');

// /api/buyers
router.route('/').get(getBuyers).post(createBuyer);

// /api/buyers/:buyerId
router.route('/:buyerId').get(getSingleBuyer).delete(deleteBuyer).put(updateBuyer);

module.exports = router;
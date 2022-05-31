'use strict';

const router = require('express').Router();
const {
	getSellers,
	getSingleSeller,
	createSeller,
	deleteSeller,
	updateSeller,
} = require('../../controllers/sellerController');

// /api/sellers
router.route('/').get(getSellers).post(createSeller);

// /api/sellers/:sellerId
router.route('/:userId').get(getSingleSeller).delete(deleteSeller).put(updateSeller);

module.exports = router;
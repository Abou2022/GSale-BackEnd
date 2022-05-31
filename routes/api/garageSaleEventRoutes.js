'use strict';

const router = require('express').Router();
const {
	getGarageSaleEvents,
	getSingleGarageSaleEvent,
	createGarageSaleEvent,
	deleteGarageSaleEvent,
	updateGarageSaleEvent,
} = require('../../controllers/garageSaleEventController');

// /api/garageSaleEvents
router.route('/').get(getGarageSaleEvents).post(createGarageSaleEvent);

// /api/garageSaleEvents/:garageSaleEventId
router.route('/:garageSaleEventId').get(getSingleGarageSaleEvent).delete(deleteGarageSaleEvent).put(updateGarageSaleEvent);

module.exports = router;
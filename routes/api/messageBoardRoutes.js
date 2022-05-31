'use strict';

const router = require('express').Router();
const {
	getMessageBoards,
	getSingleMessageBoard,
	createMessageBoard,
	deleteMessageBoard,
	updateMessageBoard,
} = require('../../controllers/messageBoardController');

// /api/messageBoards
router.route('/').get(getMessageBoards).post(createMessageBoard);

// /api/messageBoards/:messageBoardId
router.route('/:messageBoardId').get(getSingleMessageBoard).delete(deleteMessageBoard).put(updateMessageBoard);

module.exports = router;
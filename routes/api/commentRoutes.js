'use strict';

const router = require('express').Router();
const {
	getComments,
	getSingleComment,
	createComment,
	deleteComment,
	updateComment,
} = require('../../controllers/commentController');

// /api/comments
router.route('/').get(getComments).post(createComment);

// /api/comments/:commentId
router.route('/:commentId').get(getSingleComment).delete(deleteComment).put(updateComment);

module.exports = router;
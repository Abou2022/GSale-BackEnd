'use strict';

const router = require('express').Router();
const {
	getProfiles,
	getSingleProfile,
	createProfile,
	deleteProfile,
	updateProfile,
} = require('../../controllers/profileController');

// /api/profiles
router.route('/').get(getProfiles).post(createProfile);

// /api/profiles/:profileId
router.route('/:profileId').get(getSingleProfile).delete(deleteProfile).put(updateProfile);

module.exports = router;
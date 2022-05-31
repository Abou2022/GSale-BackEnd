'use strict';

const router = require('express').Router();
const {
    getSingleUser,
    createUser,
    login,
    logout,
    updateUser,
} = require('../../controllers/userController');

// /api/users
router.route('/').post(createUser);

// /api/users/login
router.route('/login').post(login);

// /api/users/logout
router.route('/logout').post(logout);

// /api/users/:userId
router.route('/:userId').get(getSingleUser).put(updateUser);

module.exports = router;
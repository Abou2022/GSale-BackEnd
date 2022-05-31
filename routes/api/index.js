'use strict';

const router = require('express').Router();

const buyerRoutes = require('./buyerRoutes');
const commentRoutes = require('./commentRoutes');
const garageSaleEventRoutes = require('./garageSaleEventRoutes');
const profileRoutes = require('./profileRoutes');
const sellerRoutes = require('./sellerRoutes');
const userRoutes = require('./userRoutes');
const errors = require('../../lib/error-middleware.js');

router.use('/buyers', buyerRoutes);
router.use('/comments', commentRoutes);
router.use('/garageSaleEvents', garageSaleEventRoutes);
router.use('/profiles', profileRoutes);
router.use('/sellers', sellerRoutes);
router.use('/users', userRoutes);
router.use(errors);

module.exports = router;
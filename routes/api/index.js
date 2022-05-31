'use strict';

const router = require('express').Router();

const buyerRoutes = require('./buyerRoutes');
const commentRoutes = require('./commentRoutes');
const garageSaleEventRoutes = require('./garageSaleEventRoutes');
const messageBoardRoutes = require('./messageBoardRoutes');
const profileRoutes = require('./profileRoutes');
const sellerRoutes = require('./sellerRoutes');
const userRoutes = require('./userRoutes');

router.use('/buyers', buyerRoutes);
router.use('/comments', commentRoutes);
router.use('/garageSaleEvents', garageSaleEventRoutes);
router.use('/messageBoards', messageBoardRoutes);
router.use('/profiles', profileRoutes);
router.use('/sellers', sellerRoutes);
router.use('/users', userRoutes);

module.exports = router;
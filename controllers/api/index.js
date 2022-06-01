const router = require('express').Router();

const buyerRoutes = require('./buyerRoutes');
const commentRoutes = require('./commentRoutes');
const garageSaleEventRoutes = require('./garageSaleEventRoutes');
const profileRoutes = require('./profileRoutes');
const sellerRoutes = require('./sellerRoutes');
const userRoutes = require('./userRoutes');

router.use('/buyers', buyerRoutes);
router.use('/comments', commentRoutes);
router.use('/garageSaleEvent', garageSaleEventRoutes);
router.use('/profiless', profileRoutes);
router.use('/sellers', sellerRoutes);
router.use('/users', userRoutes);

module.exports = router;
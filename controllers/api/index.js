const router = require('express').Router();

const attendeeRoutes = require('./attendeeRoutes');
const commentRoutes = require('./commentRoutes');
const garageSaleEventRoutes = require('./garageSaleEventRoutes');
const profileRoutes = require('./profileRoutes');
const vendorRoutes = require('./vendorRoutes');
const userRoutes = require('./userRoutes');

router.use('/attendees', attendeeRoutes);
router.use('/comments', commentRoutes);
router.use('/garageSaleEvent', garageSaleEventRoutes);
router.use('/profiless', profileRoutes);
router.use('/vendors', vendorRoutes);
router.use('/users', userRoutes);

module.exports = router;
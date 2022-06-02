const router = require('express').Router();

const attendeeRoutes = require('./attendeeRoutes');
const commentRoutes = require('./commentRoutes');
const garageSaleEventRoutes = require('./garageSaleEventRoutes');
const itemRoutes = require('./itemRoutes');
const profileRoutes = require('./profileRoutes');
const userRoutes = require('./userRoutes');
const vendorRoutes = require('./vendorRoutes');

router.use('/attendees', attendeeRoutes);
router.use('/comments', commentRoutes);
router.use('/garageSaleEvent', garageSaleEventRoutes);
router.use('/items', itemRoutes);
router.use('/profiles', profileRoutes);
router.use('/users', userRoutes);
router.use('/vendors', vendorRoutes);

module.exports = router;
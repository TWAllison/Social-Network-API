const router = require('express').Router();
const userRoutes = require('./user-route');
const thoughtRoutes = require('./thought-route');

router.use('/Users', userRoutes);

router.use('/thoughts', thoughtRoutes);

module.exports = router;
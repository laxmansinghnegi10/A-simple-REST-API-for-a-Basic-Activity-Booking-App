const express = require('express');
const router = express.Router();
const { bookActivity, getMyBookings } = require('../controllers/bookingController');
const { protect } = require('../middlewares/auth');
const { validateBooking, handleValidationErrors } = require('../middlewares/validators');

router.post('/', protect, validateBooking, handleValidationErrors, bookActivity);
router.get('/me', protect, getMyBookings);

module.exports = router; 
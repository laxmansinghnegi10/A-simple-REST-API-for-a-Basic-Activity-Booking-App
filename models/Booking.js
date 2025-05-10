const mongoose = require('mongoose');

// Booking Schema
const BookingSchema = new mongoose.Schema(
  {
    activity: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Activity',
      required: true
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    bookingDate: {
      type: Date,
      default: Date.now
    }
  }
);

module.exports = mongoose.model('Booking', BookingSchema); 
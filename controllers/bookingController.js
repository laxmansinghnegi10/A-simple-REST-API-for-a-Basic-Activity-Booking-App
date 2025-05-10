const Booking = require('../models/Booking');
const Activity = require('../models/Activity');


exports.bookActivity = async (req, res) => {
  try {
    const { activityId } = req.body;

    // Check if activity exists
    const activity = await Activity.findById(activityId);

    if (!activity) {
      return res.status(404).json({
        success: false,
        message: 'Activity not found'
      });
    }

    // Check if user has already booked this activity
    const existingBooking = await Booking.findOne({
      user: req.user._id,
      activity: activityId
    });

    if (existingBooking) {
      return res.status(400).json({
        success: false,
        message: 'You have already booked this activity'
      });
    }

    // Create booking
    const booking = await Booking.create({
      activity: activityId,
      user: req.user._id
    });

    res.status(201).json({
      success: true,
      data: booking
    });
  } catch (error) {
    console.error(error);
    if (error.kind === 'ObjectId') {
      return res.status(404).json({
        success: false,
        message: 'Activity not found'
      });
    }
    res.status(500).json({
      success: false,
      message: 'Server Error'
    });
  }
};


exports.getMyBookings = async (req, res) => {
  try {
    const bookings = await Booking.find({ user: req.user._id })
      .populate({
        path: 'activity',
        select: 'title description location dateTime'
      });

    res.json({
      success: true,
      count: bookings.length,
      data: bookings
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: 'Server Error'
    });
  }
}; 
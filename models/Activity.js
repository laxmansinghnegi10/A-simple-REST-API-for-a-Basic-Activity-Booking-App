const mongoose = require('mongoose');
// Activity Schema
const ActivitySchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Please add a title'],
      trim: true,
      maxlength: [100, 'Title cannot be more than 100 characters']
    },
    description: {
      type: String,
      required: [true, 'Please add a description']
    },
    location: {
      type: String,
      required: [true, 'Please add a location']
    },
    dateTime: {
      type: Date,
      required: [true, 'Please add a date and time']
    },
    createdAt: {
      type: Date,
      default: Date.now
    }
  }
);

module.exports = mongoose.model('Activity', ActivitySchema); 
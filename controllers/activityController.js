const Activity = require('../models/Activity');


exports.createActivity = async (req, res) => {
  try {
    const { title, description, location, dateTime } = req.body;

    const activity = await Activity.create({
      title,
      description,
      location,
      dateTime
    });

    res.status(201).json({
      success: true,
      data: activity
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: 'Server Error'
    });
  }
};


exports.getActivities = async (req, res) => {
  try {
    const activities = await Activity.find().sort({ dateTime: 1 });

    res.json({
      success: true,
      count: activities.length,
      data: activities
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: 'Server Error'
    });
  }
};


exports.getActivity = async (req, res) => {
  try {
    const activity = await Activity.findById(req.params.id);

    if (!activity) {
      return res.status(404).json({
        success: false,
        message: 'Activity not found'
      });
    }

    res.json({
      success: true,
      data: activity
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
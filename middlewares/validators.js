const { body, validationResult } = require('express-validator');

// Middleware to handle validation errors
exports.handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ 
      success: false,
      errors: errors.array() 
    });
  }
  next();
};

// User registration validation
exports.validateUserRegistration = [
  body('name')
    .notEmpty()
    .withMessage('Name is required')
    .trim()
    .isLength({ max: 50 })
    .withMessage('Name cannot be more than 50 characters'),
  body('email')
    .notEmpty()
    .withMessage('Email is required')
    .isEmail()
    .withMessage('Please provide a valid email'),
  body('phone')
    .notEmpty()
    .withMessage('Phone number is required')
    .isLength({ max: 20 })
    .withMessage('Phone number cannot be longer than 20 characters'),
  body('password')
    .notEmpty()
    .withMessage('Password is required')
    .isLength({ min: 6 })
    .withMessage('Password must be at least 6 characters long'),
];

// User login validation
exports.validateUserLogin = [
  body('email')
    .notEmpty()
    .withMessage('Email is required')
    .isEmail()
    .withMessage('Please provide a valid email'),
  body('password')
    .notEmpty()
    .withMessage('Password is required'),
];

// Activity validation
exports.validateActivity = [
  body('title')
    .notEmpty()
    .withMessage('Title is required')
    .trim()
    .isLength({ max: 100 })
    .withMessage('Title cannot be more than 100 characters'),
  body('description')
    .notEmpty()
    .withMessage('Description is required'),
  body('location')
    .notEmpty()
    .withMessage('Location is required'),
  body('dateTime')
    .notEmpty()
    .withMessage('Date and time is required')
    .isISO8601()
    .withMessage('Please provide a valid date and time in ISO format'),
];

// Booking validation
exports.validateBooking = [
  body('activityId')
    .notEmpty()
    .withMessage('Activity ID is required')
    .isMongoId()
    .withMessage('Please provide a valid activity ID'),
]; 
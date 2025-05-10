const express = require('express');
const router = express.Router();
const { getActivities, getActivity, createActivity } = require('../controllers/activityController');
const { protect } = require('../middlewares/auth');
const { validateActivity, handleValidationErrors } = require('../middlewares/validators');


router.get('/', getActivities);


router.get('/:id', getActivity);


// In a real app, this would be admin-only
router.post('/', protect, validateActivity, handleValidationErrors, createActivity);

module.exports = router; 
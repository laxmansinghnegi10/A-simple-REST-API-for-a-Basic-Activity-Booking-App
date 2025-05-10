const express = require('express');
const router = express.Router();
const { registerUser, loginUser } = require('../controllers/userController');
const { validateUserRegistration, validateUserLogin, handleValidationErrors } = require('../middlewares/validators');


router.post('/register', validateUserRegistration, handleValidationErrors, registerUser);


router.post('/login', validateUserLogin, handleValidationErrors, loginUser);

module.exports = router; 
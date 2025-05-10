const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');

// Load env vars
dotenv.config();

// Connect to database
connectDB();

// Route files
const userRoutes = require('./routes/userRoutes');
const activityRoutes = require('./routes/activityRoutes');
const bookingRoutes = require('./routes/bookingRoutes');

const app = express();

// Body parser
app.use(express.json());

// Enable CORS
app.use(cors());

// Mount routers
app.use('/api/users', userRoutes);
app.use('/api/activities', activityRoutes);
app.use('/api/bookings', bookingRoutes);

// Basic route
app.get('/', (req, res) => {
  res.json({
    success: true,
    message: 'API is running...',
    endpoints: {
      users: {
        register: '[POST] /api/users/register',
        login: '[POST] /api/users/login'
      },
      activities: {
        getAll: '[GET] /api/activities',
        getOne: '[GET] /api/activities/:id',
        create: '[POST] /api/activities'
      },
      bookings: {
        book: '[POST] /api/bookings',
        getMyBookings: '[GET] /api/bookings/me'
      }
    }
  });
});

// Error handling middleware
app.use((req, res, next) => {
  res.status(404).json({
    success: false,
    message: 'Route not found'
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}); 